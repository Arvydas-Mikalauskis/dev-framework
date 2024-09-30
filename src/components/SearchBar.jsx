import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useState, useEffect } from 'react'

const SearchBar = ({ onSearchSelected }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState([])

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setItems([])
    } else {
      fetchSuggestions(searchTerm)
    }
  }, [searchTerm])

  const fetchSuggestions = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://v2.api.noroff.dev/online-shop?query=${encodeURIComponent(
          searchTerm
        )}`
      )
      const data = await response.json()
      setItems(data)
    } catch (error) {
      console.error('Error fetching suggestions', error)
    }
  }

  const handleOnSearch = (string) => {
    setSearchTerm(string)
  }

  const handleOnSelect = (item) => {
    console.log('Selected:', item)
    onSearchSelected(item) // Call the parent handler
  }

  const handleOnHover = (item) => {
    console.log('Hovered:', item)
  }

  const handleOnFocus = () => {
    console.log('The search input is focused')
  }

  const handleOnClear = () => {
    console.log('Search has been cleared')
    setItems([])
  }

  return (
    <section className="w-full flex justify-center">
      <div style={{ width: 300 }}>
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          onSelect={handleOnSelect}
          onHover={handleOnHover}
          onFocus={handleOnFocus}
          onClear={handleOnClear}
          placeholder="Type for items"
        />
      </div>
    </section>
  )
}

export default SearchBar

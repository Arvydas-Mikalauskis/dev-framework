import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { debounce } from 'lodash'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState([])

  const navigateToItem = useNavigate()

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
      const result = await response.json()
      console.log('Fetched data:', result.data)
      const filteredItems = result.data
        .filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((item) => ({ id: item.id, name: item.title }))
      setItems(filteredItems)
    } catch (error) {
      console.error('Error fetching suggestions', error)
    }
  }

  const debounceFetch = debounce(fetchSuggestions, 200)

  const handleOnSearch = (string) => {
    debounceFetch(string)
  }

  const handleOnSelect = (item) => {
    console.log('Selected:', item)
    navigateToItem(`/product/${item.id}`)
  }

  const handleOnClear = () => {
    setItems([])
  }

  useEffect(() => {
    console.log('Items in state:', items)
  }, [items])

  return (
    <section className="w-full flex justify-center">
      <div className="w-2/3  sm:w-1/2 z-10">
        <ReactSearchAutocomplete
          styling={{
            border: '1px solid #e5e7eb',
            borderRadius: '3px',
          }}
          items={items}
          onSearch={handleOnSearch}
          onSelect={handleOnSelect}
          onClear={handleOnClear}
          placeholder="Search for a product"
          fuseOptions={{ keys: ['name'], threshold: 0.7 }}
          autohighlight={true}
        />
      </div>
    </section>
  )
}

export default SearchBar

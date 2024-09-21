import React from 'react'

const SearchBar = () => {
  return (
    <section className="w-full flex justify-center">
      <form className="w-1/2 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search Items.."
          className="search-input"
        />
      </form>
    </section>
  )
}

export default SearchBar

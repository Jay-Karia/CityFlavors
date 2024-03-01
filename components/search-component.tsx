import React from 'react'

const Search = () => {
  return (
    <div className="flex flex-row justify-between items-center mt-4 my-4">
      <input
        type="text"
        placeholder="Search"
        className="w-96 p-2 border border-gray-300 rounded-md"
      />
    </div>
  )
}

export default Search
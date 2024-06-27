import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [search, setSearchQuery] = useState('');
  const Navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      Navigate(`/Properties?search=${search}`);
    }
  };

  return (
    <form className="mx-auto w-full" onSubmit={handleSearchSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border rounded-lg bg-gray-50"
          placeholder="Search destinations, cities..."
          value={search}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-[#FFA920] hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
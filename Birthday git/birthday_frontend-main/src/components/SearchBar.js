import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/SearchBar.css'; // Ensure the path is correct

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value); // Pass the query to the parent
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery); // Pass the query on submit
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search planners..."
        className="search-input"
        value={searchQuery}
        onChange={handleChange}
      />
      <button type="submit" className="search-button">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;

import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    return (
        <input 
            className="search-bar"
            type="text" 
            placeholder="Search publications..."
            onChange={(e) => onSearch(e.target.value)}
        />
    );
};

export default SearchBar;

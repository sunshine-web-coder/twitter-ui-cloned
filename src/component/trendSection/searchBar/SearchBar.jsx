import React, { useState } from "react";
import SearchBarStyle from "./SearchBar.module.scss";
import { FiSearch } from 'react-icons/fi';
import { searchData } from "../../data/SearchData";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(searchData);
  
    const handleSearch = (event) => {
      const value = event.target.value;
      setSearchQuery(value);
  
      // Perform search logic and update searchResults state variable
      // In this example, we're searching an array of objects with firstName and lastName properties
      const filteredResults = names.filter(name => {
        return (
          name.firstName.toLowerCase().includes(value.toLowerCase()) ||
          name.lastName.toLowerCase().includes(value.toLowerCase())
        );
      });
      setSearchResults(filteredResults);
    };
  return (
    <div className={SearchBarStyle.search_Bar}>
      <div className={SearchBarStyle.inner_Search_Bar}>
        <button onClick={() => onSearch(value)}>
            <FiSearch />
        </button>
        <input type="search" placeholder="Search Twitter " value={searchQuery} onChange={handleSearch} />
      </div>
      <div className={SearchBarStyle.dropdown}>
      {searchResults.map(result => (
          <div key={result.id} className={SearchBarStyle.dropdown_row} onClick={() => onSearch(filteredResults)}>
            {result.firstName} {result.lastName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;

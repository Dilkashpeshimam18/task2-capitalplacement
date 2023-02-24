import React, { useState } from 'react';
import './MainSidebarSearch.css'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="searchBar">
      <SearchIcon sx={{ width: 20, height: 18, color: 'gray' }} className='search-icon' />

        <input
        className='search_input'
          type="text"
          placeholder="Filter by name email, edu and exp"
          value={searchTerm}
          onChange={handleInputChange}
        />
       
      </div>
    </form>
  );
};

export default SearchBar;

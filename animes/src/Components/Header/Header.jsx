import React, { useState } from 'react';
import { HeaderWrapper } from './styles';
import { FaSearch } from 'react-icons/fa';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Buscando por:', searchQuery);
  };

  return (
    <HeaderWrapper>
      <h1>O Maior Catálogo De Anime Do Mundo</h1>
      <div className="search-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="search-icon"
          onClick={handleSearch} 
        >
          <FaSearch size={20} /> 
        </button>
      </div>
    </HeaderWrapper>
  );
}

export default Header;

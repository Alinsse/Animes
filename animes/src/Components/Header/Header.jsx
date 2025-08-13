// src/components/Header/Header.tsx
import React, { useState } from 'react';
import { HeaderWrapper } from './styles.ts';
import { FaSearch } from 'react-icons/fa';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Buscando por:', searchQuery);
  };

  return (
    <HeaderWrapper>
      <form className="search-wrapper" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-icon" type="submit">
          <FaSearch size={16} />
        </button>
      </form>
    </HeaderWrapper>
  );
}

export default Header;

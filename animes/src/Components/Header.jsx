// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="App-header">
      <h1>Minha Página React</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}

export default Header;

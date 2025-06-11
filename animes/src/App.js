// src/App.js
import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <h2>Bem-vindo à minha página!</h2>
          <p>Este é o conteúdo principal da página.</p>
        </section>
        <section id="about">
          <h2>Sobre</h2>
          <p>Aqui você pode encontrar informações sobre o projeto.</p>
        </section>
        <section id="contact">
          <h2>Contato</h2>
          <p>Entre em contato através do e-mail: exemplo@dominio.com</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

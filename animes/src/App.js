import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
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
    </div>
  );
}

export default App;

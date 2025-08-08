import React, { useState } from 'react';
import './App.css';

import Footer from './Components/Footer/Footer';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import AppRoutes from './Routes/Routes';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Inicialmente fechado

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="App">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`main-content ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

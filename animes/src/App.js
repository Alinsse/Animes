import React, { useState } from 'react';
import './App.css';

import Footer from './Components/Footer/Footer';
import AppRoutes from './Routes/Routes';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

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

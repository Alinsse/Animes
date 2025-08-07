import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import Home from '../src/Pages/Home/index';
import About from '../Pages/About/index';
import Contact from '../src/Pages/Contact/index';
import AnimeDetail from '../src/Pages/AnimeDetail';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/anime/:id" element={<AnimeDetail />} />
    </Routes>
  );
}


const AnimeDetailWrapper = () => {
  const { id } = useParams();
  return <AnimeDetail animeId={id} />;
};


export default AppRoutes;

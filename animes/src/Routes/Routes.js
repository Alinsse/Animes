import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import Home from '../Pages/Home/index';
import AnimeDetail from '../Pages/AnimeDetail';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anime/:id" element={<AnimeDetail />} />
    </Routes>
  );
}


const AnimeDetailWrapper = () => {
  const { id } = useParams();
  return <AnimeDetail animeId={id} />;
};


export default AppRoutes;

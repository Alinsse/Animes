import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import Home from '../Pages/Home/index';
import AnimeDetail from '../Pages/AnimeDetail';

const AnimeDetailWrapper = () => {
  const { id } = useParams();
  return <AnimeDetail animeId={id} />;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anime/:id" element={<AnimeDetailWrapper />} />
    </Routes>
  );
}

export default AppRoutes;

import React, { useEffect, useState } from 'react';
import AnimeCarousel from '../../Components/Carrousel';
import { getTopRatedAnimes, getTrendingAnimes } from '../../Services/HomeApis';

const Home = () => {
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    async function fetchAnimes() {
      const topRatedData = await getTopRatedAnimes();
      const popularData = await getTrendingAnimes();

      setTopRated(topRatedData);
      setPopular(popularData);
    }

    fetchAnimes();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <AnimeCarousel title="Mais Bem Avaliados" animes={topRated} />
      <AnimeCarousel title="Mais Populares" animes={popular} />
    </div>
  );
};

export default Home;

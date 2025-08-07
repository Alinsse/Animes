import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import AnimeGrid from '../../Components/Carrousel/Anime.tsx';
import { getTopRatedAnimes } from '../../Services/HomeApis/HomePopulares/usePopulares.ts';
import { getTrendingAnimes } from '../../Services/HomeApis/HomeClassificados/useClassificados.ts';

const Container = styled.div`
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: #222;
`;

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
    <Container>
      <Section>
        <Title>Mais Bem Avaliados</Title>
        <AnimeGrid animes={topRated} />
      </Section>

      <Section>
        <Title>Mais Populares</Title>
        <AnimeGrid animes={popular} />
      </Section>
    </Container>
  );
};

export default Home;

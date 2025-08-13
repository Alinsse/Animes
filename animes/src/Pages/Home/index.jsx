import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AnimeGrid from '../../Components/Carrousel/Anime.tsx';
import { getTopRatedAnimes } from '../../Services/HomeApis/HomePopulares/usePopulares.ts';
import { getTrendingAnimes } from '../../Services/HomeApis/HomeClassificados/useClassificados.ts';

// Importação do componente do Carrossel de Banners
import BannerCarousel from '../../Components/Carrousel/index.tsx';  // Caminho do componente

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

  // Defina os banners aqui com os caminhos das imagens
  const banners = [
    '/banner1.png',  // Imagem 1
    '/banner2.png',  // Imagem 2
    '/banner3.png',  // Imagem 3
  ];

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
        <Title>Animes Mais Populares</Title>
        <AnimeGrid animes={topRated} />
      </Section>
{/* Adicionando o Carrossel de Banners acima das seções de animes */}
      <Section>
        <BannerCarousel banners={banners} />
      </Section>

      <Section>
        <Title>Animes Mais bem Classificados</Title>
        <AnimeGrid animes={popular} />
      </Section>
    </Container>
  );
};

export default Home;

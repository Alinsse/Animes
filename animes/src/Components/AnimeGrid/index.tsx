import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
`;

const Card = styled.div`
  cursor: pointer;
  text-align: center;
`;

const Poster = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Title = styled.h3`
  font-size: 0.9rem;
  margin-top: 8px;
`;

const AnimeGrid = ({ animes }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/anime/${id}`);
  };

  return (
    <Grid>
      {animes.map((anime) => (
        <Card key={anime.id} onClick={() => handleClick(anime.id)}>
          <Poster src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
          <Title>{anime.attributes.canonicalTitle}</Title>
        </Card>
      ))}
    </Grid>
  );
};

export default AnimeGrid;

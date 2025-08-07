import React from 'react';
import { Grid, Card, Poster, AnimeTitle } from './styles';

type Anime = {
  id: string;
  attributes: {
    canonicalTitle: string;
    posterImage?: {
      small?: string;
    };
  };
};

type AnimeCardProps = {
  anime: Anime;
};

type AnimeGridProps = {
  animes: Anime[];
};

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <Card>
      <Poster
        src={anime.attributes.posterImage?.small}
        alt={anime.attributes.canonicalTitle}
      />
      <AnimeTitle>{anime.attributes.canonicalTitle}</AnimeTitle>
    </Card>
  );
};

const AnimeGrid: React.FC<AnimeGridProps> = ({ animes }) => {
  return (
    <Grid>
      {animes.map((anime) => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </Grid>
  );
};

export { AnimeCard, AnimeGrid };
export default AnimeGrid;

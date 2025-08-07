import React from 'react';
import * as S from './styles';

function AnimeCard({ anime }) {
  return (
    <S.Card>
      <S.Poster src={anime.attributes.posterImage?.small} alt={anime.attributes.canonicalTitle} />
      <S.AnimeTitle>{anime.attributes.canonicalTitle}</S.AnimeTitle>
    </S.Card>
  );
}

function AnimeGrid({ animes }) {
  return (
    <S.Grid>
      {animes.map((anime) => (
        <React.Fragment key={anime.id}>
          <AnimeCard anime={anime} />
        </React.Fragment>
      ))}
    </S.Grid>
  );
}

export { AnimeCard, AnimeGrid };
export default AnimeGrid; // export default para facilitar importação

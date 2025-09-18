import { useEffect, useState } from 'react';
import { getAnimeDetails } from '../../Services/HomeApis/HomeId/useId.ts';

const AnimeDetail = ({ animeId }) => {
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      const data = await getAnimeDetails(animeId);
      setAnime(data);
    };

    fetchAnime();
  }, [animeId]);

  if (!anime) return <p>Carregando...</p>;

  const { titles, synopsis, posterImage } = anime.attributes;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{titles.en || titles.en_jp}</h1>
      <img src={posterImage?.medium} alt={titles.en || titles.en_jp} />
      <p>{synopsis}</p>
    </div>
  );
};

export default AnimeDetail;

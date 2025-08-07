import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAnimeDetails } from '../../Services/HomeApis/HomeId/useId.ts';

const AnimeDetails = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      const data = await getAnimeDetails(id);
      setAnime(data);
    };
    fetchAnime();
  }, [id]);

  if (!anime) {
    return <p>Carregando...</p>;
  }

  const { titles, synopsis, posterImage } = anime.attributes;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{titles.en || titles.en_jp}</h1>
      <img src={posterImage.medium} alt={titles.en || titles.en_jp} />
      <p>{synopsis}</p>
    </div>
  );
};

export default AnimeDetails;

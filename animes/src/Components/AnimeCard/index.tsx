import { useNavigate } from 'react-router-dom';
import { Card, AnimeImage, AnimeTitle } from './AnimeCard.styles';

const AnimeCard = ({ anime }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/anime/${anime.id}`);
  };

  return (
    <Card onClick={handleClick}>
      <AnimeImage src={anime.attributes.posterImage.small} alt={anime.attributes.titles.en || anime.attributes.titles.en_jp} />
      <AnimeTitle>{anime.attributes.titles.en || anime.attributes.titles.en_jp}</AnimeTitle>
    </Card>
  );
};

export default AnimeCard;

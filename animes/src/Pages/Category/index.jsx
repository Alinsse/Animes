import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AnimeGrid from '../../Components/Carrousel/Anime.tsx';
import { getAnimesByCategory } from '../../Services/Categorias/ByCategory/useByCategory.ts';

const CategoryPage = () => {
  const { slug } = useParams();
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchByCategory = async () => {
      try {
        setLoading(true);
        const data = await getAnimesByCategory(slug, 20, 0);
        setAnimes(data);
        setError(null);
      } catch (err) {
        console.error('Erro ao buscar animes por categoria:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchByCategory();
  }, [slug]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar: {error.message}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Categoria: {slug}</h1>
      <AnimeGrid animes={animes} />
    </div>
  );
};

export default CategoryPage;

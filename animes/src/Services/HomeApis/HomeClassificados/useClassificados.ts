import axios from 'axios';

const api = axios.create({
  baseURL: 'https://kitsu.io/api/edge/',
});

export const getTrendingAnimes = async () => {
  try {
    const response = await api.get('trending/anime?limit=5');
    return response.data.data;
  } catch (error) {
    console.error('Erro ao buscar animes em alta:', error);
    return [];
  }
};
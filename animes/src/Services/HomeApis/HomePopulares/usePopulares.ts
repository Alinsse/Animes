import axios from 'axios';

const api = axios.create({
  baseURL: 'https://kitsu.io/api/edge/',
});

export const getTopRatedAnimes = async () => {
  try {
    const response = await api.get('anime?page[limit]=5&sort=-average_rating');
    return response.data.data;
  } catch (error) {
    console.error('Erro ao buscar animes mais bem avaliados:', error);
    return [];
  }
};





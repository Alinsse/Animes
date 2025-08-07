import axios from 'axios';

const api = axios.create({
  baseURL: 'https://kitsu.io/api/edge/',
});

export const getAnimeDetails = async (id) => {
  try {
    const response = await api.get(`anime/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(`Erro ao buscar detalhes do anime com ID ${id}:`, error);
    return null;
  }
};
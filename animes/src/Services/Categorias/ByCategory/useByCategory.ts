import axios from 'axios';

const api = axios.create({
  baseURL: 'https://kitsu.io/api/edge/',
});

export const getAnimesByCategory = async (slug: string, limit = 20, offset = 0) => {
  try {
    const response = await api.get(`anime?filter[categories]=${encodeURIComponent(slug)}&page[limit]=${limit}&page[offset]=${offset}`);
    return response.data.data;
  } catch (error) {
    console.error(`Erro ao buscar animes da categoria ${slug}:`, error);
    return [];
  }
};

export default getAnimesByCategory;

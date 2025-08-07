
export const getCategories = async () => {
  try {
    const response = await api.get('categories?page[limit]=40&sort=-total_media_count');
    return response.data.data; // Pegando as categorias
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return [];
  }
};
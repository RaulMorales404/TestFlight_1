import AsyncStorage from '@react-native-async-storage/async-storage';
import { Article } from '@services/interfaces/articlesInterface';


export const setStoreArticles = async (newArticles: Article[]) => {
  try {
    // Obtener los artículos almacenados previamente
    const existingArticles = await getStoreArticles();

    // Verificar si el nuevo arreglo de artículos es diferente al existente
    const areArticlesDifferent = JSON.stringify(existingArticles) !== JSON.stringify(newArticles);

    if (areArticlesDifferent) {
      // Limitar el arreglo a 10 artículos
      const limitedArticles = newArticles.slice(0, 10);
      const transformArticlesJson = JSON.stringify(limitedArticles);

      // Guardar el nuevo arreglo actualizado en AsyncStorage
      await AsyncStorage.setItem('Articles', transformArticlesJson);
      console.log('Artículos actualizados correctamente');
    } else {
      console.log('El arreglo es el mismo, no se guardará.');
    }
  } catch (error) {
    console.error('Error al guardar los datos:', error);
  }
};

// Función para obtener el arreglo de artículos
export const getStoreArticles = async (): Promise<Article[]> => {
  try {
    const storedArticles = await AsyncStorage.getItem('Articles');
    return storedArticles != null ? JSON.parse(storedArticles) : [];
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return [];
  }
};

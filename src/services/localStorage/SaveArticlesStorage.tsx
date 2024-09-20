import AsyncStorage from '@react-native-async-storage/async-storage';
import {Article} from '@services/interfaces/articlesInterface';

const SAVE_ARTICLES_KEY = '@SaveArticles';

// Función para obtener el historial desde AsyncStorage
export const getArticlesSave = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(SAVE_ARTICLES_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error al obtener el historial:', error);
    return [];
  }
};

const saveArticlesLike = async (articles: Article[]) => {
  try {
    const jsonValue = JSON.stringify(articles);
    await AsyncStorage.setItem(SAVE_ARTICLES_KEY, jsonValue);
  } catch (error) {
    console.error('Error al guardar el historial:', error);
  }
};

// Función para guardar el historial en AsyncStorage
export const saveNewArticle = async (articles: Article) => {
  try {
    const curretnSaveArticles: Article[] = await getArticlesSave();
    if (curretnSaveArticles) {
      const articleLikeExist = curretnSaveArticles.some(
        (item: Article) => item.urlToImage === articles.urlToImage,
      );
      if (articleLikeExist) {
        const deleteExiste = curretnSaveArticles.filter(
          (item: Article) => item.urlToImage !== articles.urlToImage,
        );
        await saveArticlesLike(deleteExiste);
      } else {
        const newArrayArticles = [...curretnSaveArticles, articles];
        await saveArticlesLike(newArrayArticles);
      }
    } else {
      await saveArticlesLike([articles]);
    }
  } catch (error) {
    console.error('Error al intentar guardar:', error);
  }
};

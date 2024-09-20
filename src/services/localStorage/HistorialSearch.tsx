import AsyncStorage from '@react-native-async-storage/async-storage';

 
const SEARCH_HISTORY_KEY = '@searchHistory';

// Función para obtener el historial desde AsyncStorage
export const getSearchHistory = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(SEARCH_HISTORY_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error al obtener el historial:', error);
    return [];
  }
};

// Función para guardar el historial en AsyncStorage
export const saveSearchHistory = async (history: any[]) => {
  try {
    const jsonValue = JSON.stringify(history);
    await AsyncStorage.setItem(SEARCH_HISTORY_KEY, jsonValue);
  } catch (error) {
    console.error('Error al guardar el historial:', error);
  }
};

 
 
export const addSearchToHistory = async (newSearch: any) => {
  if (!newSearch) return;  

  try {
    const currentHistory = await getSearchHistory(); 
    const searchExists = currentHistory.some((search: any) => search === newSearch);
    //si ya existe no hacemos nada
    if (searchExists) return; 
    const updatedHistory = [newSearch, ...currentHistory]; 
    if (updatedHistory.length > 10) {
      updatedHistory.length = 10;  
    } 
    await saveSearchHistory(updatedHistory);
  } catch (error) {
    console.error('Error al agregar búsqueda al historial:', error);
  }
};


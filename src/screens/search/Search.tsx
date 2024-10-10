import {HistoryList} from '@components/history/HistoryList';
import {LoadingSearchArticles} from '@components/loadings/LoadingSearchArticles';
import {Message} from '@components/message/Message';
import SearchInput from '@components/searchInput/SearchInput';
import Trend from '@components/trend/Trend';
import {searchArticlesServices} from '@services/articles';
import {Article} from '@services/interfaces/articlesInterface';
import {
  addSearchToHistory,
  getSearchHistory,
  saveSearchHistory,
} from '@services/localStorage/HistorialSearch';
import {saveNewArticle} from '@services/localStorage/SaveArticlesStorage';
import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Search = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [historSearch, setHistorSearch] = useState<Array<string>>([]);

  const [likedArticles, setLikedArticles] = useState<{[key: string]: boolean}>(
    {},
  );
  const [textInput, setTextInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const showHistory = useRef(0);

  const searchingNews = async (text: string) => {
    setArticles([]);
    if (text.trim() !== '') {
      showHistory.current = 1;
      try {
        const response = await searchArticlesServices(text);
        setArticles(response);
        setIsLoading(false);
        addSearchToHistory(text);
      } catch (error) {
        console.log('Error', error);
        setIsLoading(false);
      }
    } else {
      if (showHistory.current === 1) {
        setArticles([]);
        getArticlesStore();
        setIsLoading(false);
        showHistory.current = 0;
      }
    }
  };

  const changeTextInpud = (text: string) => {
    if (text.trim() !== '') {
      setIsLoading(true);
    }
    setTextInput(text);
  };

  const getArticlesStore = async () => {
    const historyStorage = await getSearchHistory();
    if (historyStorage) {
      setHistorSearch(historyStorage);
      setIsLoading(false);
    }
  };

  const toggleLike = async (articleId: string, item: Article) => {
    setLikedArticles(prevState => ({
      ...prevState,
      [articleId]: !prevState[articleId], // Invierte el estado de "like" para el artículo específico
    }));
    await saveNewArticle(item);
  };

  useEffect(() => {
    getArticlesStore();
    return () => {};
  }, []);

  const deleteHistorySearItem = async (item: string) => {
    const resultNewHistory = historSearch.filter(value => {
      if (value !== item) {
        return value;
      }
    });
    if (resultNewHistory) {
      setHistorSearch(resultNewHistory);
      await saveSearchHistory(resultNewHistory);
    }
  };

  return (
    <View style={{flex: 1}}>
      <SearchInput
        onDebounce={searchingNews}
        textInput={textInput}
        action={changeTextInpud}
      />
      <View style={styles.headerTitle}></View>

      {textInput.length === 0 && (
        <HistoryList
          dataHistory={historSearch}
          action={changeTextInpud}
          deleteSearch={deleteHistorySearItem}
        />
      )}

      {isLoading ? (
        <LoadingSearchArticles />
      ) : (
        articles.length > 0 &&
        textInput.length > 0 && (
          <View style={{paddingHorizontal: 5, paddingRight: 10}}>
            <Trend
              data={articles}
              title={false}
              likedArticles={likedArticles}
              actionLike={toggleLike}
              horizontal={false}
              imgCart={{
                width: 160,
                height: '100%',
              }}
              titleStyle={{width: 200, textAlign: 'justify'}}
              descStyle={{}}
              containerCartStyle={{width: '100%', height: 130}}
              containerStyle={{height: '100%'}}
            />
          </View>
        )
      )}
      {articles.length === 0 && textInput && !isLoading  &&(
        <Message message={'No se encontraron resultados.'}></Message>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  headerTitle: {
    marginBottom: 110,
    paddingBottom: 10,
  },
});

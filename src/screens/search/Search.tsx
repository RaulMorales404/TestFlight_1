import {HistoryList} from '@components/history/HistoryList';
import SearchInput from '@components/searchInput/SearchInput';
import Trend from '@components/trend/Trend';
import {searchArticlesServices} from '@services/articles';
import {Article} from '@services/interfaces/articlesInterface';
import {
  addSearchToHistory,
  getSearchHistory,
} from '@services/localStorage/HistorialSearch';
import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';

const Search = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [historSearch, setHistorSearch] = useState<Array<string>>([]);
  const [textInput, setTextInput] = useState<string>('');
  const showHistory = useRef(0);

  const searchingNews = async (text: string) => {
    if (text.trim() !== '') {
      showHistory.current = 1;
      try {
        const response = await searchArticlesServices(text);
        setArticles(response);
        addSearchToHistory(text);
      } catch (error) {
        console.log('Error', error);
      }
    } else {
      if (showHistory.current === 1) {
        getArticlesStore();
        showHistory.current = 0;
      }
    }
  };

  const changeTextInpud = (text: string) => {
    setTextInput(text);
  };

  const getArticlesStore = async () => {
    const historyStorage = await getSearchHistory();
    if (historyStorage) {
      setHistorSearch(historyStorage);
    }
  };

  useEffect(() => {
    getArticlesStore();
    return () => {};
  }, []);

  return (
    <View style={{flex: 1}}>
      <SearchInput
        onDebounce={searchingNews}
        textInput={textInput}
        action={changeTextInpud}
      />
      <View style={styles.headerTitle}></View>
      {textInput.length === 0 && (
        <HistoryList dataHistory={historSearch} action={changeTextInpud} />
      )}

      {textInput.length > 0 && (
        <View style={{paddingHorizontal: 5, paddingRight: 10}}>
          <Trend
            data={articles}
            title={false}
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

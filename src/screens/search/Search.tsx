import SearchInput from '@components/searchInput/SearchInput';
import Trend from '@components/trend/Trend';
import {searchArticlesServices} from '@services/articles';
import { Article } from '@services/interfaces/articlesInterface';
import React, {  useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Search = () => {

  const [articles,setArticles]= useState<Article[]>();

  const searchingNews = async (text: string) => {
    try {
      const response = await searchArticlesServices(text);
      setArticles(response)
    } catch (error) {
      console.log('Error', error);
    }
  };


  return (
    <View style={{flex: 1}}>
      <SearchInput onDebounce={searchingNews} />
      <View style={styles.headerTitle}></View>
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

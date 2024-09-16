import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, View, Animated, Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Cart} from '@components/carts/Cart';
import {getArticlesServices} from '@services/articles';
import {Article} from '../../services/interfaces/articlesInterface';
import {FilterButton} from '@components/filters/FilterButton';
import {styles} from './stylesHome';

const Home = () => {
  const [articles, setArticles] = useState<Article[]>();

  const renderItem = ({item}: {item: Article}) => {
    return <Cart {...item} />;
  };

  const getAllArticles = async () => {
    try {
      const response = await getArticlesServices();
      setArticles(response);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getAllArticles();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: '#fff'}}>
      <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight || 0}}>
        <View style={{marginLeft: 10}}>
          <Text style={styles.titleHeader}>News App</Text>
        </View>
        <FilterButton />
        <Animated.FlatList
          data={articles}
          ListHeaderComponent={
            <View style={{paddingBottom: 20}}>{/* <Text>Hola</Text> */}</View>
          }
          renderItem={renderItem}
          style={{backgroundColor: 'white'}}
          ListFooterComponent={<View style={{paddingBottom: 20}} />}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
          keyExtractor={item => item.title}
          // onScroll={handleScroll}
          scrollEventThrottle={16} // Para un rendimiento más suave en el desplazamiento
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;

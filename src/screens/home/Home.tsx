import React, {useEffect, useState, useCallback} from 'react';
import {SafeAreaView, StatusBar, View, Animated, Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Cart} from '@components/carts/Cart';
import {getArticlesServices} from '@services/articles';
import {Article} from '../../services/interfaces/articlesInterface';
import {FilterButton} from '@components/filters/FilterButton';
import {styles} from './stylesHome';
import {getStoreArticles, setStoreArticles} from '@services/localStorage/LocalStore';

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const saveArticlesStore = async (data: Article[]) => {
    if (data) {
      await setStoreArticles(data);
    }
  };

  const getArticlesStore = async () => {
    const articlesStorage = await getStoreArticles();
    if (articlesStorage) {
      setArticles(articlesStorage);
    }
  };

  const getAllArticles = async () => {
    try {
      const response = await getArticlesServices();
      setArticles(response);
      saveArticlesStore(response);
    } catch (error) {
      console.log('error', error);
      getArticlesStore();
    }
  };

  useEffect(() => {
    getAllArticles();
  }, []);

  // Usar useCallback para memorizar renderItem y evitar renders innecesarios
  const renderItem = useCallback(({item}: {item: Article}) => {
    return <MemoizedCart {...item} />;
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
          ListFooterComponent={<View style={{paddingBottom: 50}} />}
          ItemSeparatorComponent={() => <View style={{height: 0}} />}
          keyExtractor={(item, index) => item.title + index}
          scrollEventThrottle={16}
          getItemLayout={(data, index) => ({
            length: 100, // Aquí podrías ajustar el tamaño del ítem
            offset: 100 * index, // Si sabes el tamaño de cada elemento, ajusta aquí también
            index,
          })}
          initialNumToRender={10} // Renderiza solo 10 elementos inicialmente
          maxToRenderPerBatch={10} // Límite de artículos renderizados por lote
          windowSize={6} // Cantidad de ítems fuera de la pantalla a mantener en el DOM
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const MemoizedCart = React.memo((props: Article) => {
  return <Cart {...props} />;
});

export default Home;

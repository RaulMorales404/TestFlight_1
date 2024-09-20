import React, {useEffect, useState, useCallback, Key} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Animated,
  Text,
  RefreshControl,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Cart} from '@components/carts/Cart';
import {getArticlesServices} from '@services/articles';
import {Article} from '../../services/interfaces/articlesInterface';
import {FilterButton} from '@components/filters/FilterButton';
import {styles} from './stylesHome';
import {
  getStoreArticles,
  setStoreArticles,
} from '@services/localStorage/LocalStore';
import {LoadingCardArticles} from '@components/loadings/LoadingAcrdsArticles';
import { saveNewArticle } from '@services/localStorage/SaveArticlesStorage';




const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [likedArticle,setLikedArticle] = useState<{[key:string]:boolean}>({})
  const [isLoading, setIsLoading] = useState(false);
  const [isRefresh, setisRefresh] = useState(false);

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
      setIsLoading(true);
      const response = await getArticlesServices();
      setArticles(response);
      saveArticlesStore(response);
      setIsLoading(false);
    } catch (error) {
      console.log('error', error);
      getArticlesStore();
      setIsLoading(false);
    }
  };

  const onRefresh = async () => {
    try {
      setisRefresh(true);
      const response = await getArticlesServices();
      setArticles(response);
      saveArticlesStore(response);
      setisRefresh(false);
    } catch (error) {
      console.log('error', error);
      getArticlesStore();
      setisRefresh(false);
    }
  };

  const clickLikedArticle = async (idArticle:string,data:Article)=>{
    setLikedArticle((prevState)=>({
      ...prevState,
      [idArticle]:!prevState[idArticle],
    }))
    await saveNewArticle(data);
    
  }

  useEffect(() => {
    getAllArticles();
  }, []);

  // Usar useCallback para memorizar renderItem y evitar renders innecesarios
  const renderItem =  ({item}: {item: Article}) => {
    return <Cart data={item} action={clickLikedArticle} stateLiked={likedArticle}  />;
  };

  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: '#fff'}}>
      <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight || 0}}>
        <View style={{marginLeft: 10, marginBottom: 10}}>
          <Text style={styles.titleHeader}>News App</Text>
        </View>
        <FilterButton />
        {!isLoading && (
          <Animated.FlatList
            data={articles}
            ListHeaderComponent={<View style={{paddingBottom: 20}} />}
            refreshControl={
              <RefreshControl
                style={{marginBottom: 10}}
                refreshing={isRefresh}
                onRefresh={onRefresh}
                colors={['#2CB3FC']} // Colores para Android
                tintColor="#2CB3FC" // Color para iOS
              />
            }
            renderItem={renderItem}
            style={{backgroundColor: 'white'}}
            ListFooterComponent={<View style={{paddingBottom: 50}} />}
            ItemSeparatorComponent={() => <View style={{height: 0}} />}
            keyExtractor={(item, index) => item.title + index}
            scrollEventThrottle={16}
          />
        )}
        {isLoading && <LoadingCardArticles />}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

 

export default Home;

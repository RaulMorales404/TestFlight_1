import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Animated,
  Text,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Cart} from '@components/carts/Cart';
import {Article} from '../../services/interfaces/articlesInterface';
import {FilterButton} from '@components/filters/FilterButton';
import {styles} from './stylesHome';
import Toast from 'react-native-toast-message';
import {LoadingCardArticles} from '@components/loadings/LoadingAcrdsArticles';
import {saveNewArticle} from '@services/localStorage/SaveArticlesStorage';
import {useStore} from '@store/useStore';
import {useCategories} from '@store/useCategories';
import {Message} from '@components/message/Message';

const Home = () => {
  const {
    articles,
    isLoading,
    getArticles,
    isRefresh,
    error,
    setIsRefresh,
    isLoadingFooder,
  } = useStore();
  const {categorySelected, categorySelectedId} = useCategories();
  const refFlatList = useRef<Animated.FlatList>(null);
  const isScrolling = useRef(false);
  const [likedArticle, setLikedArticle] = useState<{[key: string]: boolean}>(
    {},
  );

  const onRefresh = async () => {
    if (error) {
      setIsRefresh(false);
      return;
    }
    const setIsRefreshing = true;
    const showEasyLoad = false;
    getArticles(8, setIsRefreshing, showEasyLoad, categorySelected);
  };

  const getMoreArticles = () => {
    const page = articles.length + 9;
    const showEasyLoad = false;
    const setIsRefreshing = false;
    getArticles(page, setIsRefreshing, showEasyLoad, categorySelected);
    const index = 0;
    if (articles.length === 5 && !isScrolling.current && !error) {
      refFlatList.current?.scrollToIndex({index, animated: true});
    }
  };

  const clickLikedArticle = async (idArticle: string, data: Article) => {
    setLikedArticle(prevState => ({
      ...prevState,
      [idArticle]: !prevState[idArticle],
    }));
    await saveNewArticle(data);
  };

  // Usar useCallback para memorizar renderItem y evitar renders innecesarios
  const renderItem = ({item}: {item: Article}) => {
    return (
      <Cart data={item} action={clickLikedArticle} stateLiked={likedArticle} />
    );
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
            ref={refFlatList}
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
            ListFooterComponent={
              <View style={{height: 150, justifyContent: 'center'}}>
                {isLoadingFooder ? (
                  <ActivityIndicator color={'#2CB3FC'} size={50} />
                ) : (
                  <Message
                    message={'Ya no tenermos mas noticías'}
                    stylesText={{fontSize: 20, fontWeight: '300'}}></Message>
                )}
              </View>
            }
            renderToHardwareTextureAndroid
            keyExtractor={(item, index) => item.title + index}
            scrollEventThrottle={30}
            onEndReached={getMoreArticles}
            onEndReachedThreshold={0.7}
            onScrollBeginDrag={() => (isScrolling.current = true)}
            onScrollEndDrag={() => (isScrolling.current = false)}
          />
        )}
        {isLoading && <LoadingCardArticles />}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;

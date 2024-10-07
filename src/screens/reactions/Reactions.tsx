import {IconLike} from '@assets/icons-svgs';
import Trend from '@components/trend/Trend';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Article} from '@services/interfaces/articlesInterface';
import {
  getArticlesSave,
  saveNewArticle,
} from '@services/localStorage/SaveArticlesStorage';
import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'navigation/HomeStackNavigation';

interface LikedArticlesMap {
  [key: string]: boolean;
}

type LikeNavigationProp = StackNavigationProp<RootStackParamList>;

const Reactions = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigation = useNavigation<LikeNavigationProp>();
  const [likedArticles, setLikedArticles] = useState<{[key: string]: boolean}>(
    {},
  );

  const getLikesSaves = async () => {
    const responseArticlesSave: Article[] = await getArticlesSave();
    if (responseArticlesSave) {
      setArticles(responseArticlesSave);
      const likedArticlesMap = responseArticlesSave.reduce(
        (acc, item: Article) => {
          if (item.urlToImage) {
            acc[item.url] = true;
          }
          return acc;
        },
        {} as LikedArticlesMap,
      );
      setLikedArticles(likedArticlesMap);
    }
  };

  const toggleLike = async (articleId: string, item: Article) => {
    setLikedArticles(prevState => ({
      ...prevState,
      [articleId]: !prevState[articleId], // Invierte el estado de "like" para el artículo específico
    }));
    await saveNewArticle(item);
    getLikesSaves();
  };

  const goHome = () => {
    navigation.navigate('Home');
  };

  useFocusEffect(
    useCallback(() => {
      getLikesSaves();
    }, []),
  );

  return (
    <View style={{flex: 1}}>
      <View style={{paddingHorizontal: 5, paddingRight: 10}}>
        {articles.length !== 0 ? (
          <Trend
            data={articles}
            likedArticles={likedArticles}
            actionLike={toggleLike}
            actionRefresh={getLikesSaves}
            title={false}
            horizontal={false}
            imgCart={{width: 160, height: '100%'}}
            titleStyle={{width: 200, textAlign: 'justify'}}
            descStyle={{paddingRight:10}}
            containerCartStyle={{width: '100%', height: 130}}
            containerStyle={{height: '100%'}}
          />
        ) : (
          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 33,
                fontWeight: '200',
                paddingHorizontal: 10,
                color: '#6a6a6a',
                textAlign: 'center',
              }}>
              Aún no has dado
              <Text style={{color: '#2CB3FC'}}>
                {' '}
                Like
                <View style={{paddingHorizontal: 15}}>
                  <IconLike color="#2CB3FC" width={30} height={30} />
                </View>
              </Text>{' '}
              a ningún artículo
            </Text>
            <TouchableOpacity style={{marginTop: 40}} onPress={() => goHome()}>
              <Text style={{color: '#2CB3FC', fontSize: 18}}>Ir a Home</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Reactions;

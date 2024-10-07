import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleProp,
  ImageStyle,
  TextStyle,
  ViewStyle,
  RefreshControl,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {styles} from './styles';
import {IconLike, IconLikeFull} from '@assets/icons-svgs';
import {Article} from '@services/interfaces/articlesInterface';
import {getStoreArticles} from '@services/localStorage/LocalStore';
import {RootStackParamList} from 'navigation/HomeStackNavigation';

interface Props {
  data: Article[];
  likedArticles: {[key: string]: boolean};
  actionLike: (item: string, data: Article) => void;
  actionRefresh?: () => void;
  horizontal?: boolean;
  title?: boolean;
  containerCartStyle?: StyleProp<ViewStyle>;
  imgCart?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  descStyle?: StyleProp<TextStyle>;
}

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

const Trend = ({
  data,
  title = true,
  horizontal = true,
  likedArticles,
  actionLike,
  actionRefresh,
  containerStyle,
  titleStyle,
  descStyle,
  imgCart,
  containerCartStyle,
}: Props) => {
  const [articles, setArticles] = useState<Article[]>([]);

  const navigation = useNavigation<DetailsScreenNavigationProp>();
  const [refreshing, setRefreshing] = useState(false);

  const getArticlesStore = useCallback(async () => {
    const articlesStorage = await getStoreArticles();
    if (articlesStorage && articlesStorage.length > 0) {
      const fiveMoreRecent = articlesStorage.slice(0, 6);
      if (fiveMoreRecent.length) {
        setArticles(fiveMoreRecent);
      }
    }
  }, []);

  const showDetails = useCallback(
    (data: Article,isLiked:boolean) => {
      navigation.navigate('Details', {dataDetails: {...data,isLiked}});
    },
    [navigation],
  );

  const onRefresh = () => {
    setRefreshing(true);
    actionRefresh ? actionRefresh() : getArticlesStore();
    setRefreshing(false);
  };

  useEffect(() => {
    getArticlesStore();
  }, [getArticlesStore]);

  const renderCartRecent = useCallback(
    ({item}: {item: Article}) => {
      if (!item.urlToImage) return null;

      const isLiked = likedArticles[item.url] || false;

      return (
        <TouchableOpacity
          onPress={() => showDetails(item,isLiked)}
          style={[
            styles.containerCard,
             containerCartStyle]}>
          <Image
            style={[styles.imgCartRecents, imgCart,{marginRight:10}]}
            source={{uri: item.urlToImage}}
            resizeMode="cover"
          />
          <View style={{flex:1 }}>
            <Text
              style={[styles.textTitleRecent, titleStyle,{paddingRight:10,
                width:"100%",paddingBottom:10}]}
              numberOfLines={horizontal ? 1 : 2}
              ellipsizeMode="clip"
              >
              {item.title}
            </Text>
          
           <View style={{flexDirection:'row'}}>
            <Text
                style={[ styles.titleDesc, descStyle,{width:"85%"}]}
                numberOfLines={horizontal ? 3 : 5}>
                {item.description}
              </Text>

          {!horizontal && (
                <View style={{flex:1,justifyContent:'flex-end',
                  bottom:0,
                  right:7,
                  top:10
                }}>
                    <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    padding: 7,
                    top:-5,
                    right:-3,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: 100,
                  }}
                  onPress={() => actionLike(item.url, item)}>
                  {isLiked ? (
                    <IconLikeFull
                      color="#2ba8eb"
                      secColor="#fff"
                      width={20}
                      height={20}
                    />
                  ) : (
                    <IconLike color="#6a6a6a" width={20} height={20} />
                  )}
                </TouchableOpacity>
                  </View>
              
              )} 
           </View>
             
          </View>
        </TouchableOpacity>
      );
    },
    [likedArticles, showDetails],
  );

  return (
    <View style={[styles.containerRecents, containerStyle]}>
      {title && <Text style={styles.titleRecents}>TENDENCIAS</Text>}
      <FlatList
        refreshControl={
          !horizontal && <RefreshControl
            style={{marginBottom: 10}}
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#2CB3FC']} // Colores para Android
            tintColor="#2CB3FC" // Color para iOS
          />
        }
        horizontal={horizontal}
        data={data || articles}
        showsHorizontalScrollIndicator={!horizontal}
        showsVerticalScrollIndicator={horizontal}
        ItemSeparatorComponent={() => (
          <View style={horizontal ? {marginRight: 20} : {marginBottom: 0}} />
        )}
        ListFooterComponent={<View style={{marginRight: 80}} />}
        ListHeaderComponent={<View style={{marginRight: 10}} />}
        keyExtractor={(item, index) => item.url + index || item.title + index} // Asegúrate de tener una clave única.
        renderItem={renderCartRecent}
      />
    </View>
  );
};

export default React.memo(Trend);

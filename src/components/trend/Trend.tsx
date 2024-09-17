import { Image, Text, View, FlatList, TouchableOpacity, StyleProp, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { styles } from './styles'; 
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/HomeStackNavigation';
import { IconLike } from '@assets/icons-svgs';
import { Article } from '@services/interfaces/articlesInterface';
import { getStoreArticles } from '@services/localStorage/LocalStore'; 
import { useEffect, useState, useCallback } from 'react';
import React from 'react';

interface Props {
  data: Article;
  horizontal?: boolean;
  title?: boolean;
  containerCartStyle?: StyleProp<ViewStyle>;
  imgCart?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  descStyle?: StyleProp<TextStyle>;
}

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

const Trend = ({ data, title = true, horizontal = true, containerStyle, titleStyle, descStyle, imgCart, containerCartStyle }: Props) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const getArticlesStore = useCallback(async () => {
    const articlesStorage = await getStoreArticles();
    if (articlesStorage && articlesStorage.length > 0) {
      const fiveMoreRecent = articlesStorage.slice(0, 6);
      if (fiveMoreRecent.length) {
        setArticles(fiveMoreRecent);
      }
    }
  }, []);

  useEffect(() => {
    getArticlesStore();
  }, [getArticlesStore]);

  const showDetails = useCallback((data: Article) => {
    navigation.navigate('Details', { dataDetails: { ...data } });
  }, [navigation]);

  const renderCartRecent = useCallback(({ item }: { item: Article }) => {
    if (!item.urlToImage) return null;
    return (
      <TouchableOpacity onPress={() => showDetails(item)} style={[styles.containerCard, containerCartStyle]}>
        <Image style={[styles.imgCartRecents, imgCart]} source={{ uri: item.urlToImage }} resizeMode="cover" />
        <View style={styles.containerInfoText}>
          <Text style={[styles.textTitleRecent, titleStyle]} numberOfLines={horizontal ? 1 : 2} ellipsizeMode="clip">
            {item.title}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Text style={[styles.textTitleRecent, styles.titleDesc, descStyle]} numberOfLines={horizontal ? 3 : 5}>
              {item.description}
            </Text>
            {!horizontal && (
              <TouchableOpacity>
                <IconLike color="#323232" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }, [showDetails, containerCartStyle, imgCart, titleStyle, descStyle, horizontal]);

  return (
    <View style={[styles.containerRecents, containerStyle]}>
      {title && <Text style={styles.titleRecents}>TENDENCIAS</Text>}
      <FlatList
        horizontal={horizontal}
        data={data || articles}
        showsHorizontalScrollIndicator={!horizontal}
        showsVerticalScrollIndicator={horizontal}
        ItemSeparatorComponent={() => <View style={horizontal ? { marginRight: 20 } : { marginBottom: 15 }} />}
        ListFooterComponent={<View style={{ marginRight: 80 }} />}
        ListHeaderComponent={<View style={{ marginRight: 10 }} />}
        keyExtractor={(item,index) => item.url+index || item.title+index} // Asegúrate de tener una clave única.
        renderItem={renderCartRecent}
      />
    </View>
  );
};

export default React.memo(Trend);

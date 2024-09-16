import {Image, Text, View, TextStyle, ViewStyle, StyleProp, ImageStyle, FlatList } from 'react-native';
import {styles} from './styles'; 
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'navigation/HomeStackNavigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {  IconLike } from '@assets/icons-svgs';
import { Article } from '@services/interfaces/articlesInterface';
import { getStoreArticles } from '@services/localStorage/LocalStore'; 
import { useEffect, useState } from 'react';

 
interface Props {
  data:Article;
  horizontal?: boolean;
  title?: boolean;
  containerCartStyle?: StyleProp<ViewStyle>;
  imgCart?:StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  descStyle?: StyleProp<TextStyle>;
}

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;




const Trend = ({data,title = true, horizontal = true,
  containerStyle,titleStyle,
  descStyle,
  imgCart,
  containerCartStyle}: Props) => {
    const [articles, setArticles] = useState<Article[]>([]);
  const navigation = useNavigation<DetailsScreenNavigationProp>();



  const getArticlesStore = async () => {
    const articlesStorage = await getStoreArticles();
  
    if (articlesStorage && articlesStorage.length > 0) {
      // Obtener los primeros 5 elementos más recientes
      const fiveMoreRecent = articlesStorage.slice(0, 6);
      
      // Verificar si existen artículos recientes y actualizarlos en el estado
      if (fiveMoreRecent.length) {
        setArticles(fiveMoreRecent);
      }
    }
  };
  


useEffect(() => {
  getArticlesStore();
  return () => { };
}, []);

  const showDetails = (data: Article) => {
    navigation.navigate('Details',{
      dataDetails:{
        ...data
      }
    })
  };

 
  const renderCartRecent = ({item}: {item: Article}) => {
    if(!item.urlToImage)return;
    return (
      <TouchableOpacity
        onPress={() => showDetails(item)}
        style={[styles.containerCard,containerCartStyle]}>
        <Image
          style={[styles.imgCartRecents,imgCart]}
          source={{uri: item.urlToImage}}
          resizeMode="cover"
        />
        <View style={styles.containerInfoText}>
          <Text
            style={[styles.textTitleRecent,titleStyle]}
            numberOfLines={horizontal?1:2}
            ellipsizeMode="clip">
            {item.title}
          </Text>
          <View style={{flexDirection:'row',alignItems:'flex-end'}}>
          <Text
            style={[styles.textTitleRecent, styles.titleDesc,descStyle]}
            numberOfLines={horizontal?3:5}>
            {item.description}
          </Text>
         { !horizontal  && <TouchableOpacity>
          <IconLike color={"#323232"} />
         </TouchableOpacity>
         }
          </View>
         
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.containerRecents,containerStyle]}>
      { title && <Text style={styles.titleRecents}>TENDENCIAS</Text>}
      <FlatList
        horizontal={horizontal}
        data={data?data:articles}
        showsHorizontalScrollIndicator={!horizontal}
        showsVerticalScrollIndicator={horizontal}
        ItemSeparatorComponent={() => {
         return  horizontal? <View style={{marginRight: 20}} />:
         <View style={{marginBottom: 15}} />
       
      }}
        ListFooterComponent={<View style={{marginRight: 80}} />}
        ListHeaderComponent={<View style={{marginRight: 10}} />}
        renderItem={renderCartRecent}
      />
    </View>
  );
};

export default Trend;

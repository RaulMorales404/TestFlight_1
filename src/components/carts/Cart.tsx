 
import {Image, ScrollView, Text, View} from 'react-native';
import {styles} from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/HomeStackNavigation';
import { useFormatDate } from '../hooks/useFormatDate';
import { Article } from '@services/interfaces/articlesInterface';
 
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

export const Cart = (data:Article) => {
  const navigation = useNavigation<DetailsScreenNavigationProp>()
  const {formattedDate} = useFormatDate();

  const showDetails = () => {
    navigation.navigate('Details',{
      dataDetails:{
        ...data
      }
    })
  }

  

 


  if(!data.urlToImage)return;

  return (
    <TouchableOpacity
      onPress={()=>showDetails()}
      style={styles.container}>
      <Image source={{uri: data.urlToImage}} style={styles.img} />

      <View style={styles.containerInfo}>
        <Text style={styles.titleText}>{data.title}</Text>

        <View style={styles.containerAuthor}>
          <Image source={{uri: data.urlToImage}} style={styles.imgAuthor} />
          <Text style={styles.authorText}>{data.author}</Text>
          <View style={styles.circle} />
        </View>

        <View style={styles.containerDesc}>
          <Text numberOfLines={3} ellipsizeMode="clip" style={styles.descText}>
            {data.description} 
          </Text>
          <Text style={styles.readMore}>Read More</Text>
        </View>
        <View style={styles.continerPublished}>
          <Text style={[styles.descText, styles.publishedAtText]}>
            {formattedDate(data.publishedAt)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

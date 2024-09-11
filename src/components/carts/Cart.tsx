import { DataNews} from 'interfaces/dataNews';
import {Image, Text, View} from 'react-native';
import {styles} from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/StackNavigation';
import { useFormatDate } from '../hooks/useFormatDate';

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

export const Cart = (data:DataNews) => {
  const navigation = useNavigation<DetailsScreenNavigationProp>()
  const {formattedDate} = useFormatDate();
  const showDetails = () => {
    navigation.navigate('Details',{
      dataDetails:{
        ...data
      }
    })
  }

  return (
    <TouchableOpacity
      onPress={()=>showDetails()}
      style={styles.container}>
      <Image source={{uri: data.url}} style={styles.img} />

      <View style={styles.containerInfo}>
        <Text style={styles.titleText}>{data.title}</Text>
        <View style={styles.containerAuthor}>
          <Image source={{uri: data.imgAuthor}} style={styles.imgAuthor} />
          <Text style={styles.authorText}>{data.author}</Text>
          <View style={styles.circle} />
        </View>
        <View style={styles.containerDesc}>
          <Text numberOfLines={3} ellipsizeMode="clip" style={styles.descText}>
            {data.desc} <Text style={styles.readMore}>Read More</Text>
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

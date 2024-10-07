import {Image, Text, View} from 'react-native';
import {styles} from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'navigation/HomeStackNavigation';
import {useFormatDate} from '../hooks/useFormatDate';
import {Article} from '@services/interfaces/articlesInterface';
import {IconLike, IconLikeFull} from '@assets/icons-svgs';
import {FadeInImage} from '@components/fade/FadeInImage';

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

interface Props {
  data: Article;
  action: (idArticle: string, data: Article) => void;
  stateLiked: {[key: string]: boolean};
}

export const Cart = ({data, action, stateLiked}: Props) => {
  if (!data.urlToImage) return;
  const isLiked = stateLiked[data.urlToImage] || false;
  const navigation = useNavigation<DetailsScreenNavigationProp>();
  const {formattedDate} = useFormatDate();

  const showDetails = () => {
    navigation.navigate('Details', {
      dataDetails: {
        ...data,
        isLiked: isLiked,
      },
    });
  };

  return (
    <TouchableOpacity onPress={() => showDetails()} style={styles.container}>
      <View>
        <FadeInImage uri={data.urlToImage} styles={{...styles.img}} />
        <View style={{position: 'absolute', bottom: -5, right: 1}}>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 100,
            }}
            onPress={() => action(data.urlToImage, data)}>
            {isLiked ? (
              <IconLikeFull
                color="#2ba8eb"
                secColor="#fff"
                width={25}
                height={25}
              />
            ) : (
              <IconLike color="#6a6a6a" width={25} height={25} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.containerInfo, {marginTop: 10}]}>
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

import {Animated, Image, Text, View} from 'react-native';
import {styles} from './styles';
import {DataNews} from 'interfaces/dataNews';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/StackNavigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

const dataRecent = [
  {
    id: 'm3',
    url: 'https://assets-jpcust.jwpsrv.com/thumbnails/t6fFDEjR-1920.jpg',
    title:
      'Mohali blast: Police find dump of 7,000 mobile phones, Oppn knocks security lapses',
    author: 'Lian Li',
    imgAuthor:
      'https://images.reporteindigo.com/wp-content/uploads/2024/03/Nuevas-revelaciones-de-Alexa-Hoffman-complican-situacion-de-Hector-Parra.jpg',
    desc: "Saturday's report warned that rising sea levels brought by climate change were having a 'continuous impact' on the development of coastal regions, and urged evention efforts. por su papel en el caso de soborno de Stormy Daniels.  Desde que la entrevista se emitió el viernes, Rolling Stone ha informado que Tacopina ha sembrado desconfianza entre los abogados del expresidente, y que fuentes anónimas lo critican a sus espaldas.",
    publishedAt: '2024-08-14T08:48:11Z',
  },
  {
    id: 'm2',
    url: 'https://media.autoexpress.co.uk/image/private/s--Ko0MO24n--/f_auto,t_primary-image-desktop@1/v1721402388/autoexpress/2024/07/Polestar%202%20LRSM%20long%20term%20first%20report-5.jpg',
    title:
      'Mohali blast: Police find dump of 7,000 mobile phones, Oppn knocks security lapses',
    author: 'Lian Li',
    imgAuthor:
      'https://images.reporteindigo.com/wp-content/uploads/2024/03/Nuevas-revelaciones-de-Alexa-Hoffman-complican-situacion-de-Hector-Parra.jpg',
    desc: "Saturday's report warned that rising sea levels brought by climate change were having a 'continuous impact' on the development of coastal regions, and urged evention efforts. por su papel en el caso de soborno de Stormy Daniels.  Desde que la entrevista se emitió el viernes, Rolling Stone ha informado que Tacopina ha sembrado desconfianza entre los abogados del expresidente, y que fuentes anónimas lo critican a sus espaldas.",
    publishedAt: '2024-08-14T08:48:11Z',
  },
  {
    id: 'm1',
    url: 'https://i.cbc.ca/1.7293571.1723577240!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/trudeau-transit-funding-20240717.JPG',
    title:
      'The political consensus on taxing Chinese imports is now complete — your move, Minister Freeland',
    author: 'Janyce McGregor',
    imgAuthor:
      'https://images.reporteindigo.com/wp-content/uploads/2024/03/Nuevas-revelaciones-de-Alexa-Hoffman-complican-situacion-de-Hector-Parra.jpg',
    desc: 'Now that Conservative Leader Pierre Poilievre and his party have joined the chorus calling for more action against Chinese imports, a key decision facing Finance Minister Chrystia Freeland this month just got a little easier.',
    publishedAt: '2024-08-14T08:48:11Z',
  },
];

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

const Trend = () => {

const navigation = useNavigation<DetailsScreenNavigationProp>();

  const showDetails = (data: DataNews) => {
    navigation.navigate('Details',{
      dataDetails:{
        ...data
      }
    })
  }

  const renderCartRecent = ({item}: {item: DataNews}) => {
    return (
      <TouchableOpacity onPress={()=>showDetails(item)} style={styles.containerCard}>
        <Image
          style={styles.imgCartRecents}
          source={{uri: item.url}}
          resizeMode="cover"
        />
        <View style={styles.containerInfoText}>
          <Text style={styles.textTitleRecent} numberOfLines={1} ellipsizeMode="clip">
            {item.title}
          </Text>
          <Text style={[styles.textTitleRecent,styles.titleDesc]} numberOfLines={3}>
            {item.desc}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.containerRecents}>
      <Text style={styles.titleRecents}>TENDENCIAS</Text>
      <Animated.FlatList
        horizontal
        data={dataRecent}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{marginRight: 20}} />}
        ListFooterComponent={<View style={{marginRight: 80}} />}
        ListHeaderComponent={<View style={{marginRight: 10}} />}
        renderItem={renderCartRecent}
      />
    </View>
  );
};

export default Trend;

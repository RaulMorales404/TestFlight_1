import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import Trend from '@components/trend/Trend';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScreenRouteStackProp} from 'navigation/HomeStackNavigation';
import {useFormatDate} from '@components/hooks/useFormatDate';
import {IconArroLeft} from '@assets/icons-svgs';
import { Article } from '@services/interfaces/articlesInterface';

const Details = () => {
  const navigation = useNavigation();
  const getDataRoute = useRoute<ScreenRouteStackProp>();
  const {formattedDate} = useFormatDate();

  const dataDetails: Article = getDataRoute.params?.dataDetails || {
    source: {id: '', name: ''},
    author: '',
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
    content: '',
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <SafeAreaView>
        <View>
          <Image source={{uri:dataDetails.urlToImage }} style={styles.img} />

          <View style={[styles.containerIconBack, {backgroundColor: 'black'}]}>
            <TouchableOpacity
              style={styles.buttonGoBack}
              onPress={() => navigation.goBack()}>
              <IconArroLeft color={'#fff'} />
            </TouchableOpacity>
          </View>

          <View style={[styles.containerIconBack, styles.containerIconSave]}>
            <Text style={{color: 'white'}}>Sa</Text>
          </View>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.titleText}>{dataDetails.title}</Text>
          <View style={styles.containerAuthor}>
            <View style={styles.containerAuthor}>
              <Image
                source={{uri: dataDetails.urlToImage}}
                style={styles.imgAuthor}
              />
              <Text numberOfLines={1} ellipsizeMode="clip"   style={styles.authorText}>{dataDetails.author}</Text>
            </View>

            <View style={styles.continerPublished}>
              <Text style={styles.publishedAtText}>
                {formattedDate(dataDetails.publishedAt)}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.descText}>{dataDetails.description}</Text>
            <Text style={styles.descText}>{dataDetails.content}</Text>
          </View>
        </View>
        <Trend />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Details;

import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {styles} from './styles';

const categories = ['Popular', 'All', 'Politics', 'Tech', 'Healthy', 'Science'];

export const FilterButton = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <FlatList
      data={categories}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => setSelectedIndex(index)}
          style={[
            styles.containerButton,
            selectedIndex === index && styles.selectedButton,
          ]}>
          <Text
            style={[
              styles.titleText,
              {color: selectedIndex === index ? '#000' : '#999'},
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
      style={{backgroundColor: 'white'}}
      horizontal
      ListHeaderComponent={<View style={{marginLeft: 10}}></View>}
      ListFooterComponent={<View style={{paddingBottom: 20,marginRight:20}}></View>}
      ItemSeparatorComponent={() => <View style={{width: 40}}></View>}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item}
    />
  );
};

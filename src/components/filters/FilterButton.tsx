import React, {useEffect, useRef, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {styles} from './styles';
import {  useCategories } from '@store/useCategories';
import { useStore } from '@store/useStore';




export const FilterButton = () => {
  const {getArticles} = useStore();
  const {categories,selectCategory} = useCategories();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const refFlatList = useRef<FlatList>(null);
  const changeSelect = (id:number,name:string)=>{
  
    setSelectedIndex(id);
    const setIsRefresh = false;
    const setLoading = false;
    selectCategory(name,id);
    getArticles(5,setLoading,setIsRefresh,name);
    scrollIndexFlatList(id);
  }
  
  const scrollIndexFlatList = (index:number)=>{
    setTimeout(() => {
      refFlatList.current?.scrollToIndex({index,animated:true})
    }, 1000);
  }



  return (
    <FlatList
      data={categories}
      ref={refFlatList}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => changeSelect(item.id,item.value) }
          style={[
            styles.containerButton,
            selectedIndex === index && styles.selectedButton,
          ]}>
          <Text
            style={[
              styles.titleText,
              {color: selectedIndex === index ? '#000' : '#999'},
            ]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
      style={{backgroundColor: 'white'}}
      horizontal
      ListHeaderComponent={<View style={{marginLeft: 20}}></View>}
      ListFooterComponent={<View style={{paddingBottom: 20,marginRight:20}}></View>}
      ItemSeparatorComponent={() => <View style={{width: 5}}></View>}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.name}
    />
  );
};

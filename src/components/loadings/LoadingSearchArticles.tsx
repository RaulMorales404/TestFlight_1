import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ContentLoader from 'react-native-easy-content-loader';

export const LoadingSearchArticles = () => {

  const renderItem = () => {
    return (
      <View style={styles.innerContainer}>
        <ContentLoader
          avatar
          active
          containerStyles={{paddingTop: 5}} 
          tHeight={0}
          avatarStyles={styles.avatarStyles}
          pRows = { 2 } 
          pHeight = { [ 30 , 80   ] } 
          pWidth={"100%"} 
        />
        
      </View>
    );
  };


  return (
    <FlatList
      data={[1,2,3,4]} 
      renderItem={renderItem}
      ItemSeparatorComponent={()=><View style={{ marginBottom:20}}/>}
      style={{backgroundColor: 'white'}} 
      keyExtractor={(item: any) => item}
      scrollEventThrottle={16}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  innerContainer: { 
    paddingHorizontal: 5,
    marginBottom:-50,
    paddingBottom:30
  },
  avatarStyles: {
    width: 130,
    height: 130,
    top:10,
    borderRadius:10
  
  },
});

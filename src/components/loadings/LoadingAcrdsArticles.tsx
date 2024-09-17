import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ContentLoader from 'react-native-easy-content-loader';

export const LoadingCardArticles = () => {
  const renderItem = () => {
    return (
      <View style={styles.innerContainer}>
        <ContentLoader
          pRows={2}
          tWidth={0}
          active
          pWidth={['100%', '100%']}
          pHeight={[170, 15]}
        />
        <ContentLoader
          avatar
          active
          containerStyles={{paddingTop: 5}}
          tHeight={15}
          tWidth={'30%'}
          avatarStyles={styles.avatarStyles}
          pRows={0}
          pHeight={[100, 30, 20]}
          pWidth={[100, 70, 100]}
        />
        <ContentLoader
          containerStyles={{top: -28, margin: 0}}
          pRows={1}
          tWidth={0}
          active
          pWidth={['100%']}
          pHeight={[50]}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={[1,2,3]} 
      renderItem={renderItem}
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
    width: 15,
    height: 15,
  },
});

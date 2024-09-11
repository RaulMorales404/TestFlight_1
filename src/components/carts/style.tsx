import { StyleSheet } from "react-native";

export const  styles = StyleSheet.create({
    container: {
      marginHorizontal: 10,
      backgroundColor: '#ededed',
      borderRadius: 11,
      paddingBottom: 10,
    },
    containerInfo: {
      paddingHorizontal: 10,
    },
    img: {
      width: '100%',
      height: 210,
      borderTopLeftRadius: 11,
      borderTopRightRadius:11,
      marginBottom: 11,
    },
    titleText: {
      fontWeight: '700',
      paddingBottom: 7,
      fontSize: 16,
      color: '#231414',
    },
    containerAuthor: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 8,
    },
    imgAuthor: {
      width: 25,
      height: 25,
      borderRadius: 100,
      marginRight: 10,
    },
    authorText: {
      fontSize: 13,
      color: '#818181',
      fontWeight: '500',
    },
    circle: {
      backgroundColor: '#2CB3FC',
      width: 12,
      height: 12,
      borderRadius: 100,
      marginLeft: 8,
    },
    containerDesc: {},
    descText: {
      fontSize: 13,
      color: '#5f5c5c',
    },
    readMore: {
      color: '#2CB3FC',
      fontWeight: '500',
      marginTop: 4,
    },
    continerPublished:{
      alignItems:'flex-end',
      marginVertical:5
  
    },
    publishedAtText:{
      fontSize:10
  
    }
  });
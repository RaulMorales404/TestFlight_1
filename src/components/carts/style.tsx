import { StyleSheet } from "react-native";

export const  styles = StyleSheet.create({
    container: {
      paddingVertical:5,
      backgroundColor: '#f3f3f3',
      paddingBottom: 10,
      marginBottom:5,
    },
    containerInfo: {
      paddingHorizontal: 10,
    },
    img: {
      width: '100%',
      height: 230,
      marginBottom: 11,
    },
    titleText: {
      fontWeight: '700',
      paddingBottom: 5,
      fontSize: 15,
      color: '#231414',
    },
    containerAuthor: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 0,
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
    
    continerPublished:{
      alignItems:'flex-end',
      marginVertical:0
    },
    publishedAtText:{
      fontSize:10
  
    }
  });
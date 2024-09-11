import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 11,
    paddingBottom: 10,
  },
  containerInfo: {
    paddingHorizontal: 10,
  },
  img: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  containerIconBack: { 
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 100,
    position: 'absolute',
    margin: 10,
  },
  buttonGoBack:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 100,

  },
  containerIconSave: {
    backgroundColor: 'rgba(164, 0, 0, 1)',
    margin: 0,
    bottom: 0,
    borderRadius: 0,
    right: 5,
  },
  titleText: {
    fontWeight: '700',
    paddingBottom: 20,
    fontSize: 16,
    color: '#231414',
  },
  containerAuthor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  imgAuthor: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  authorText: {
    fontSize: 13,
    color: '#818181',
    fontWeight: '500',
  },
  descText: {
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'justify',
    color:'#000'
  },

  continerPublished: {
    alignItems: 'flex-end',
    marginVertical: 5,
  },
  publishedAtText: {
    fontSize: 10,
    color: '#5f5c5c',
  },
  
});

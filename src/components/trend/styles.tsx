import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerRecents: {
    marginTop: 20,
    marginLeft: 5,
    marginBottom: 50,
    height: 250,
  },
  containerCard: {
    backgroundColor: '#ededed',
    height: 90,
    borderRadius: 10,
    width: 300,
    flexDirection: 'row',
    marginBottom:10,
  },
  titleRecents: {
    color: 'white',
    backgroundColor: 'rgba(164, 0, 0, 1)',
    marginBottom: 20,
    fontWeight: '600',
    width: '90%',
    marginRight: 5,
    padding: 8,
  },
  imgCartRecents: {
    width: 120,
    height: 90,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
  },
  textTitleRecent: {
    width: 170,
    top: 5,
    fontSize: 13,
    color: '#231414',
    fontWeight: '600',
  },
  titleDesc: {
    color: '#5f5c5c',
    fontSize:12,
    fontWeight: '500',
  },
  containerInfoText: {
    width: 190,
    paddingHorizontal: 3,
  },
});

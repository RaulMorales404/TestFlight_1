import {IconSearch} from '@assets/icons-svgs';
import useDebounserSearch from '@components/hooks/useDebounserSearch';
import React from 'react';
import {StyleSheet, TextInput, View, Platform} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  onDebounce: (value: string) => void;
  action: (text: string) => void;
  textInput: string;
}

const SearchInput = ({onDebounce, action, textInput}: Props) => {
  useDebounserSearch(textInput, 500, onDebounce);

  const topScreen = useSafeAreaInsets().top;
  const os = () => Platform.OS === 'android';

  return (
    <View
      style={{
        ...styles.containerSearch,
        top: os() ? 30 : topScreen + 20,
      }}>
      <View
        style={{
          ...styles.textBagkroun,
          height: os() ? 50 : 42,
          elevation: os() ? 9 : 5,
        }}>
        <View style={{paddingRight: 10}}>
          <IconSearch color={'#000000'} width={20} />
        </View>

        <TextInput
          style={{
            ...styles.textInput,
            top: os() ? -1 : 0,
            fontSize: os() ? 17 : 15,
            fontWeight: '500',
          }}
          placeholder="Search by Articles"
          placeholderTextColor="#171717"
          autoCapitalize="none"
          autoCorrect={false}
          value={textInput}
          onChangeText={action}
        />
      </View>
    </View>
  );
};

export default SearchInput;
const styles = StyleSheet.create({
  containerSearch: {
    position: 'absolute',
    zIndex: 9999,
    width: '100%',
  },
  textBagkroun: {
    width: '95%',
    backgroundColor: '#fefffe',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#2CB3FC',
    height: 60,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  textInput: {
    flex: 1,
    fontSize: 20,
  },
});

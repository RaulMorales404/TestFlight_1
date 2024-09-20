import {IconClose, IconSearch} from '@assets/icons-svgs';
import useDebounserSearch from '@components/hooks/useDebounserSearch';
import React, {useState} from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';

interface Props {
  dataHistory: Array<string>;
  action: (text: string) => void;
  deleteSearch: (text: string) => void;
}

export const HistoryList = ({dataHistory, action, deleteSearch}: Props) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const renderItem = (item: {item: string}) => {
    const isSelected = item.item === selectedItem;

    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedItem(item.item);
          action(item.item);
        }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: isSelected ? '#2CB3FC' : 'transparent',
          padding: 13,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconSearch color={isSelected ? '#ffffff' : '#272727'} width={15} />
          <Text
            style={{
              color: isSelected ? '#ffffff' : '#434343',
              fontSize: 16,
              fontWeight: '500',
              marginLeft: 10,
            }}>
            {item.item.charAt(0).toUpperCase() + item.item.slice(1)}
          </Text>
        </View>
        <TouchableOpacity
          style={{paddingRight: 10, alignItems: 'center'}}
          onPress={() => deleteSearch(item.item)}>
          <IconClose color={isSelected ? '#ffffff' : '#9f9f9f'} width={12} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={dataHistory}
        renderItem={renderItem}
        ListHeaderComponent={
          <View
            style={{
              borderWidth: 0.3,
              borderColor: '#c2c2c2',
              marginTop: 10,
              marginBottom: 20,
            }}
          />
        }
        ListFooterComponent={<View style={{paddingBottom: 50}} />}
        ItemSeparatorComponent={() => <View style={{marginBottom: 10}} />}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

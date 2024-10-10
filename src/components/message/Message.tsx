import {Text, View} from 'react-native';

interface Props{
    message:string;
}
export const Message = ({message="Message"}:Props) => {
  return (
    <View
      style={{
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 33,
          fontWeight: '200',
          paddingHorizontal: 10,
          color: '#2CB3FC',
          textAlign: 'center',
        }}>
        {message}
      </Text>
    </View>
  );
};

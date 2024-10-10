import { Text, View, StyleProp, StyleSheet, TextStyle } from 'react-native';

interface Props{
    message:string;
    stylesText?:StyleProp<TextStyle>;
}
export const Message = ({message="Message",stylesText={}}:Props) => {
  return (
    <View
      style={{
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={[{
          fontSize: 33,
          fontWeight: '200',
          paddingHorizontal: 10,
          color: '#2CB3FC',
          textAlign: 'center',
        },stylesText]}>
        {message}
      </Text>
    </View>
  );
};

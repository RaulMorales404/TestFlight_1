import {Text, TouchableOpacity} from 'react-native';

export const Button = () => {
  return (
    <TouchableOpacity style={{backgroundColor: 'red', borderRadius: 10}}>
      <Text>Comprar</Text>
    </TouchableOpacity>
  );
};

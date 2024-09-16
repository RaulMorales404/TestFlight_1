import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '@screens/search/Search';
import { Article } from '@services/interfaces/articlesInterface';
import Details from '@screens/details/Details';

export type RootStackParamList = {
  Search: undefined;
  Details: {
    dataDetails:Article
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const SearchStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Ocultar el encabezado por defecto en todas las pantallas
      }}>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false, // Mostrar el encabezado solo en la pantalla de búsqueda
          
          cardStyle: {
            backgroundColor: 'white',
          },
         
        }}
      />
       <Stack.Screen name="Details" 
      options={{ headerShown: false}}
      component={Details} 
      
      
      />
    </Stack.Navigator>
  );
};

export default SearchStackNavigation;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Details from '@screens/details/Details';
import Home from '@screens/home/Home';
import { DataNews } from 'interfaces/dataNews';
import { RouteProp } from '@react-navigation/native';
import { Article } from '@services/interfaces/articlesInterface';


export type RootStackParamList = {
  Home: undefined;
  Details: {
    dataDetails:Article
  };
};

export type ScreenRouteStackProp = RouteProp<RootStackParamList, 'Details'>;

const Stack = createStackNavigator<RootStackParamList>();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}
       options={{ headerShown: false}} />
      <Stack.Screen name="Details" 
      options={{ headerShown: false}}
      component={Details} 
      
      
      />
    </Stack.Navigator>
  );
}

export default HomeStackNavigation;

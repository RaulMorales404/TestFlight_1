import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SearchFlight } from '../views/searchFlight';
import { ResultFlight } from '../views/resultFlight';
import { DetailsFlight } from '../views/details';
import { RootStackParamList } from '@models/navigationModel';



const Stack = createStackNavigator<RootStackParamList>();

export const NavigationStack = () => {
  const defaultNavigationOptions = {
    headerShown: false, 
    cardStyle: {
      backgroundColor: 'white', 
    },
  };
  return(<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SearchFlight"
          component={SearchFlight}
          options={defaultNavigationOptions}
        />
        <Stack.Screen
          name="ResultSearchFlight"
          component={ResultFlight}
          options={defaultNavigationOptions}
        />
         <Stack.Screen
          name="DetailsFlight"
          component={DetailsFlight}
          options={defaultNavigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>)
}



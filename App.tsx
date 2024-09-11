import './gesture-handler';
import 'react-native-reanimated';

import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigation/TabNavigation';
import React from 'react'; 

 

const App = () => {
   

  return (
       <NavigationContainer>
      <TabNavigation></TabNavigation>
    </NavigationContainer>
     
  );
};

export default App;

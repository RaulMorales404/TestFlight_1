import './gesture-handler';
import 'react-native-reanimated';

import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigation/TabNavigation';
import React, {useEffect} from 'react';
import {useStore} from '@store/useStore';

const App = () => {
  const {getArticles} = useStore();
  
  useEffect(() => {
    getArticles();
    return () => {};
  }, []);

  return (
    <NavigationContainer>
      <TabNavigation></TabNavigation>
    </NavigationContainer>
  );
};

export default App;

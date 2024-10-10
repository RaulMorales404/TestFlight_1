import './gesture-handler';
import 'react-native-reanimated';

import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigation/TabNavigation';
import React, {useEffect} from 'react';
import {useStore} from '@store/useStore';
import Toast from 'react-native-toast-message';

const App = () => {
  const {getArticles,error} = useStore();
  
  const showErrorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Algo salió mal 😔',
    });
  };
  useEffect(() => {
    getArticles();
    return () => {};
  }, []);

  useEffect(()=>{
    if(error){
      showErrorToast();
    }
   
  },[error])
  return (
    <NavigationContainer>
      
      <TabNavigation></TabNavigation>
      <Toast />
    </NavigationContainer>
  );
};

export default App;

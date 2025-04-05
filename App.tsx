import './gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import { NavigationStack } from '@navigation/NavigationStack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

  const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationStack/>
    </QueryClientProvider>
    
  );
};

export default App;

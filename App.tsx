import './gesture-handler';
import 'react-native-reanimated';
import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationStack } from '@navigation/NavigationStack';

  const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationStack/>
    </QueryClientProvider>
    
  );
};

export default App;

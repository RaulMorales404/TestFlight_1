import {useNavigation} from '@react-navigation/native';
import {useRef, useState} from 'react';
import {useFlightStore} from '@store/storeFlight';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useDestinationFlightViewModel} from './useDestinationFlightViewModel';
import {DestinationState, RootStackParamList} from '@models/navigationModel';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ResultSearchFlight'
>;

export const useSearchFlightViewModel = () => {
  const navigation = useNavigation<NavigationProp>();

  const {
    flightData,
    isLoading: storeLoading,
    isError: storeError,
    error: storeErrorMessage,
  } = useFlightStore();
  const serhRef = useRef('');
  const [hasErrorSearching, setHasErrorSearching] = useState(false);
  const [activeTab, setActiveTab] = useState<'flight' | 'destination'>(
    'flight',
  );
  const [stateDestination, setStateDestination] = useState<DestinationState>({
    origin: 'Mexico City',
    destination: 'Cancún',
    flightNumber: '500',
    dateDestine: 'Tuesday, Nov 21',
    dateflightNumber: 'Tuesday, Nov 21',
  });
  const updateStateSelecyed = {
    ...stateDestination,
    flightNumber:
      activeTab === 'destination' ? '' : stateDestination.flightNumber,
  };

  const {fetchData} = useDestinationFlightViewModel(
    serhRef.current === 'destination' ? '' : stateDestination.flightNumber,
  );

  const goToProfile = async () => {
    try {
      await fetchData();

      setTimeout(() => {
        navigation.navigate('ResultSearchFlight', {
          stateDestination: {...updateStateSelecyed},
        });
      }, 15);
    } catch (error) {
      console.error('Error al ejecutar fetchData:', error);
    }
  };

  const updateState = (key: string, value: string | boolean) => {
    setStateDestination(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  return {
    updateState,
    goToProfile,
    setActiveTab,
    serhRef,
    stateDestination,
    activeTab,
    hasErrorSearching,
    storeLoading,
    flightData,
  };
};

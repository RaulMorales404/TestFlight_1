import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

// Definir tipos para el estado de destino
interface DestinationState {
  origin: string;
  destination: string;
  flightNumber: string;
  dateDestine: string;
  dateflightNumber: string;
}

export const useSearchFlightViewModel = () => {
  const navigation = useNavigation();

  // Estados
  const [isSearching, setIsSearching] = useState(false);
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

  const goToProfile = () => {
    setIsSearching(false);
    navigation.navigate('ResultSearchFlight');
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
    stateDestination,
    setActiveTab,
    isSearching,
    activeTab,
    hasErrorSearching,
  };
};

import {FlightStatusCollection} from '@models/destinationFlight';
import {RootStackParamList} from '@navigation/NavigationStack';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useFlightStore} from '@store/storeFlight';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DetailsFlight'
>;

export const useResultFlightViewModel = route => {
  const navigation = useNavigation<NavigationProp>();
  const {
    flightData,
    isLoading: storeLoading,
    isError: storeError,
    error: storeErrorMessage,
  } = useFlightStore();

  const {stateDestination} = route.params;

  const dataSearch = {
    numberTicket: stateDestination.flightNumber,
    origin: stateDestination.origin,
    destinate: stateDestination.destination,
    date: stateDestination.dateflightNumber,
  };

  const showDetails = (data: FlightStatusCollection) => {
    const dataDetails = {
      boardingTerminal: data.boardingTerminal,
      boardingGate: data.boardingGate,
      boardingTime: data.boardingTime,
      arrivalDateTime: data.segment.arrivalDateTime,
      arrivalTerminal: data.arrivalTerminal,
      marketingCarrier: data.segment.marketingCarrier,
      operatingFlightCode: data.segment.operatingFlightCode,
      flightStatus: data.segment.flightStatus,
      departureAirport: data.segment.departureAirport,
      arrivalAirport: data.segment.arrivalAirport,
      departureDateTime: data.segment.departureDateTime,
      flightDurationInMinutes: data.segment.flightDurationInMinutes,
      origin: stateDestination.origin,
      destination: stateDestination.destinate,
    };
    navigation.navigate('DetailsFlight', {dataDetails});
  };

  return {
    showDetails,
    navigation,
    dataSearch,
    flightData,
  };
};

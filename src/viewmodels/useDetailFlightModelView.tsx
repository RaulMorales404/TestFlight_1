import {
  getStatusFlight,
  getTypeFlight,
  getTypeFlightName,
} from '@helpers/TypeFlight/TypeFlight';
import {RootStackParamList} from '@models/navigationModel';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {format} from 'date-fns';

type FlightStatus = 'DELAYED' | 'ON_TIME' | 'ARRIVED';
interface DepartureItem {
  title: string;
  data: string;
}

type DetailsFlightRouteProp = RouteProp<RootStackParamList, 'DetailsFlight'>;

export const useDetailFlightModelView = () => {
  const navigation = useNavigation();
  const route = useRoute<DetailsFlightRouteProp>();
  const {dataDetails} = route.params;

  const departure: DepartureItem[] = [
    {title: 'Terminal', data: dataDetails.boardingTerminal},
    {title: 'Gate', data: dataDetails.boardingGate},
    {title: 'Boarding', data: dataDetails.boardingTime.slice(0, 5)},
  ];
  const arrive: DepartureItem[] = [
    {title: 'Terminal', data: dataDetails.arrivalTerminal},
    {
      title: 'Est. Landing',
      data: format(new Date(dataDetails.arrivalDateTime), 'HH:mm'),
    },
  ];

  const status: FlightStatus = dataDetails.flightStatus;

  return {
    arrive,
    status,
    navigation,
    dataDetails,
    departure,
    getStatusFlight,
    getTypeFlightName,
    getTypeFlight,
  };
};

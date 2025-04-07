import axios from 'axios';
import {Endpint} from '@api/endPoints';
import {FlightStatusCollection} from '@models/destinationFlight';
import {DestinationState} from '@models/navigationModel';
import {abbreviateName} from '@helpers/TypeFlight/TypeFlight';

export const getFlightDestinateService = async (
  dataSearch: DestinationState,
): Promise<FlightStatusCollection[]> => {
  try {
    const response = await axios.get(Endpint.DESTINATE_API_URL_GET);
    const flightData = require('./../assets/data/OrigenDestinoResponse.json');

    const origin = abbreviateName(dataSearch.origin);
    const destination = abbreviateName(dataSearch.destination);

    if (dataSearch.flightNumber) {
      const filterData = flightData.flightStatusCollection.filter(
        ({segment}: FlightStatusCollection) =>
          segment.operatingFlightCode === dataSearch.flightNumber,
      );
      return filterData;
    } else {
      const filterData = flightData.flightStatusCollection.filter(
        ({segment}: FlightStatusCollection) =>
          segment.departureAirport === origin &&
          segment.arrivalAirport === destination,
      );
      return filterData;
    }
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw new Error('Error al obtener los datos');
  }
};

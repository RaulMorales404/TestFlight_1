import axios from 'axios';
import {Endpint} from '@api/endPoints';
import {FlightStatusCollection} from '@models/destinationFlight';

export const getFlightDestinateService = async (
  numberFlight: string,
): Promise<FlightStatusCollection[]> => {
  try {
   
    const response = await axios.get(Endpint.DESTINATE_API_URL_GET);
    const flightData = require('./../assets/data/OrigenDestinoResponse.json');
    if (numberFlight) {
      const filterData = flightData.flightStatusCollection.filter(
        ({segment}: FlightStatusCollection) =>
          segment.operatingFlightCode === numberFlight,
      );
      return filterData;
    } else {
      return flightData.flightStatusCollection;
    }
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw new Error('Error al obtener los datos');
  }
};

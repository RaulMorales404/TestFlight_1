import {IconAire, IconArrived, IconDelayed} from '@assets/icons';
import {colors} from '@assets/themes/colors';
import { abreviaciones } from '@models/cityLookupDict';
import {Platform} from 'react-native';

export const getTypeFlight = {
  DELAYED: colors.yellow,
  ON_TIME: colors.blue,
  ARRIVED: colors.black,
};

export const getStatusFlight = {
  DELAYED: {
    icon: IconDelayed,
    size: {
      width: Platform.OS == 'ios' ? 165 : 200,
      height: Platform.OS == 'ios' ? 20 : 24,
      top: -5,
    },
  },
  ON_TIME: {
    icon: IconAire,
    size: {
      width: Platform.OS == 'ios' ? 165 : 210,
      height: Platform.OS == 'ios' ? 12 : 16,
    },
  },
  ARRIVED: {
    icon: IconArrived,
    size: {
      width: Platform.OS == 'ios' ? 165 : 200,
      height: Platform.OS == 'ios' ? 11 : 15,
    },
  },
};

export const getTypeFlightName = {
  DELAYED: 'Delayed',
  ON_TIME: 'In the air',
  ARRIVED: 'Arrived',
};

export const  abbreviateName=(input: string): string | null =>{
  
  const textClean = input.normalize("NFD") 
  .toLowerCase()                     
  .replace(/[\u0300-\u036f]/g, "")      
  .replace(/[^a-zA-Z0-9\s]/g, "")         
  .trim();
  
  if (abreviaciones[textClean]) {
    return abreviaciones[textClean];
  }else {
   return input.substring(0, 3).toUpperCase();
  }
 
}

import {IconAire, IconArrived, IconDelayed} from '@assets/icons';
import {colors} from '@assets/themes/colors';

export const getTypeFlight = {
  DELAYED: colors.yellow,
  ON_TIME: colors.blue,
  ARRIVED: colors.black,
};

export const getStatusFlight = {
  DELAYED: {
    icon: IconDelayed,
    size: {width: 165, height: 20, top: -5},
  },
  ON_TIME: {
    icon: IconAire,
    size: {width: 165, height: 12},
  },
  ARRIVED: {
    icon: IconArrived,
    size: {width: 160, height: 10},
  },
};

export const getTypeFlightName = {
  DELAYED: 'Delayed',
  ON_TIME: 'In the air',
  ARRIVED: 'Arrived',
};

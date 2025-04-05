import { IconAire, IconArrived, IconDelayed } from "@assets/icons";
import { colors } from "@assets/themes/colors";

 export  const getTypeFlight={
    "Delayed":colors.yellow,
    "In the air":colors.blue,
    "Arrived":colors.black,
  };

  export const getStatusFlight ={
    "Delayed":{
      icon:IconDelayed,
      size:{ width:165 , height: 20,top:-5 }
    },
    "In the air":{
      icon:IconAire,
      size:{ width:165 , height: 12 }
    },
    "Arrived":{
      icon:IconArrived,
      size:{ width:160 , height: 10 }
    },

  };
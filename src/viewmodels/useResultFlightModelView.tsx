import { getFlightNumberService } from '@services/getNumberFlightService';
import { useQuery } from '@tanstack/react-query';

export const useFlightViewModel = (numberFlight: string) => {
  
     // Configurar queryKey de manera correcta
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['flightDestinate', numberFlight], 
    queryFn: () => getFlightNumberService(numberFlight),
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
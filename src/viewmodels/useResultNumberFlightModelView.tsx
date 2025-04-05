// src/viewModels/useFlightViewModel.ts
import { getFlightDestinateService } from '@services/getFlightDestinateService';
import { useQuery } from '@tanstack/react-query';

export const useNumberFlightViewModel = (origin: string, destination: string) => {
  
     // Configurar queryKey de manera correcta
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['flightDestinate', origin, destination], // La clave de la consulta
    queryFn: () => getFlightDestinateService(origin, destination), // Función que realiza la consulta
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
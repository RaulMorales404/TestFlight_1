import { FlightStatusCollection } from '@models/destinationFlight';
import { create } from 'zustand'; // Solo importar la función 'create'

interface FlightStore {
  flightData: FlightStatusCollection[];  
  isLoading: boolean;
  isError: boolean;
  error: any;
  setFlightData: (data: any) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: any) => void;
  reset: () => void;
}

export const useFlightStore = create<FlightStore>((set) => ({
  flightData: [],
  isLoading: false,
  isError: false,
  error: null,
  setFlightData: (data:FlightStatusCollection[]) => set({ flightData: data}),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ isError: true, error }),
  reset: () => set({ flightData:[], isLoading: false, isError: false, error: null }),
}));

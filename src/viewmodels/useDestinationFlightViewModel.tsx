import {useQuery} from '@tanstack/react-query';
import {getFlightDestinateService} from '@services/getFlightDestinateService';
import {useFlightStore} from '@store/storeFlight';
import {useEffect} from 'react';

export const useDestinationFlightViewModel = (numberFlight: string) => {
  const {setFlightData, setLoading, setError} = useFlightStore();

  const {data, isLoading, isFetching, isError, error, refetch} = useQuery({
    queryKey: ['flightDestinate', numberFlight],
    queryFn: () => getFlightDestinateService(numberFlight),
    enabled: false,
  });

  useEffect(() => {
    if (isFetching == false) {
      setTimeout(() => {
        setLoading(isFetching);
      }, 50);
    } else {
      setLoading(isFetching);
    }
  }, [isFetching]);

  useEffect(() => {
    if (data) {
      setFlightData(data);
    }
  }, [data]);

  const fetchData = () => {
    refetch();
  };

  return {
    fetchData,
    data,
    isLoading,
    isFetching,
    isError,
    error,
  };
};

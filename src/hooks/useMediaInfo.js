import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useMediaInfo(appId) {
  const fetchInfo = async () => {
    try {
      const { data } = await axios.get(`/game?appId=${appId}`);
      return data;
    } catch (error) {
      console.error('Error occurred: ', error);
      return { error };
    }
  };

  const { data: mediaInfo, isError } = useQuery({
    queryKey: [`${appId}-data`],
    queryFn: fetchInfo,
    staleTime: Infinity,
    enabled: !!appId && !!appId !== ''
  });

  return [mediaInfo, isError];
}

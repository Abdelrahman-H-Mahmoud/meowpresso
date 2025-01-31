import { useQuery } from '@tanstack/react-query';
import { ReviewsResponseDto } from '@/types/dtos/store.dto';

async function getStoreReviews(storeId: string, page: number) {
  const response = await fetch(`/api/stores/${storeId}/reviews?page=${page}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data as ReviewsResponseDto;
}

export function useStoreReviews(storeId: string, page: number) {
  return useQuery({
    queryKey: ['storeReviews', storeId, page],
    queryFn: () => getStoreReviews(storeId, page),
    placeholderData: (previousData) => previousData
  });
} 
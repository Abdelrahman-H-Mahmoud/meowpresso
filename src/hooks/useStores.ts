import { useQuery } from '@tanstack/react-query';
import { StoreDto } from '@/types/dtos/store.dto';

async function getStores(page: number, limit: number) {
  const response = await fetch(`/api/stores?page=${page}&limit=${limit}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return {stores: data.stores as StoreDto[], total: data.total};
}

async function getStore(id: string) {
  const response = await fetch(`/api/stores/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.store as StoreDto;
}

export function useStores(page = 1, limit = 9) {
  return useQuery({
    queryKey: ['stores', page, limit],
    queryFn: () => getStores(page, limit),
    placeholderData: (previousData) => previousData
  });
}

export function useStore(id: string) {
  return useQuery<StoreDto>({
    queryKey: ['store', id],
    queryFn: () => getStore(id),
  });
} 
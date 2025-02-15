import { useQuery } from '@tanstack/react-query';
import { Product } from '@/types/product';

async function fetchProduct(id: string): Promise<Product> {
  const response = await fetch(`/api/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  });
} 
import { Recipe } from '@/data/recipes';
import { getBaseUrl } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';

async function fetchRecipes(categories?: string) {
  const url = `${getBaseUrl()}/api/recipes${categories ? `?categories=${categories}` : ''}`;
  const res = await fetch(url);
  
  if (!res.ok) {
    throw new Error('Failed to fetch recipes');
  }
  
  const data = await res.json();
  return data.recipes as Recipe[];
}

export function useRecipes(categories?: string[]) {
  return useQuery({
    queryKey: ['recipes', categories],
    queryFn: () => fetchRecipes(categories?.join(',')),
    initialData: [],
  });
} 
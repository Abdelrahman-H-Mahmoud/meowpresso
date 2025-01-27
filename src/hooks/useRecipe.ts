import { Recipe } from '@/data/recipes';
import { getBaseUrl } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';

async function getRecipe(id: string) {
  const res = await fetch(`${getBaseUrl()}/api/recipes/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch recipe');
  }
  const data = await res.json();
  return data.recipe as Recipe;
}

export function useRecipe(id: string) {
  return useQuery({
    queryKey: ['recipe', id],
    queryFn: () => getRecipe(id),
  });
} 
import { Recipe, RecipeCategory } from '@/data/recipes';
import { getBaseUrl } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';

async function getRecipes(categories?: RecipeCategory[]) {
  const queryString = categories?.length ? `?categories=${categories.join(',')}` : '';
  const response = await fetch(`${getBaseUrl()}/api/recipes${queryString}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.recipes as Recipe[];
}

export function useRecipes(categories?: RecipeCategory[]) {
  return useQuery({
    queryKey: ['recipes', categories],
    queryFn: () => getRecipes(categories),
  });
} 
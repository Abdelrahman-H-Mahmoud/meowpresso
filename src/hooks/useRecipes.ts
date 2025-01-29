import { Recipe, RecipeCategory } from '@prisma/client';
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
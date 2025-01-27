"use client";

import { Recipe, RecipeCategory } from '@/data/recipes';
import { getBaseUrl } from '@/lib/utils';
import { useState } from 'react';
import RecipeList from './_components/RecipeList';
import { CategoryFilter } from './_components/CategoryFilter';
import { useRecipes } from '@/hooks/useRecipes';
async function getRecipes(categories?: RecipeCategory[]) {
  const categoriesParam = categories?.join(',');
  const url = `${getBaseUrl()}/api/recipes${categoriesParam ? `?categories=${categoriesParam}` : ''}`;
  
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch recipes');
  }
  
  const data = await res.json();
  return data.recipes as Recipe[];
}

export default function RecipesPage() {
  const [selectedCategories, setSelectedCategories] = useState<Set<RecipeCategory>>(new Set());

  const { data: recipes = [], isLoading } = useRecipes(
    selectedCategories.size ? Array.from(selectedCategories) : undefined
  );

  const handleToggleCategory = (category: RecipeCategory) => {
    setSelectedCategories(prev => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-coffee-dark mb-8">Coffee Recipes</h1>
      <CategoryFilter
        selectedCategories={selectedCategories}
        onToggleCategory={handleToggleCategory}
        isLoading={isLoading}
      />
      <RecipeList recipes={recipes} isLoading={isLoading} />
    </div>
  );
}

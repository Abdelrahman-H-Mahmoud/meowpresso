"use client";

import { RecipeCategory } from '@/data/recipes';
import { useState } from 'react';
import RecipeList from './_components/RecipeList';
import { CategoryFilter } from './_components/CategoryFilter';
import { useRecipes } from '@/hooks/useRecipes';

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

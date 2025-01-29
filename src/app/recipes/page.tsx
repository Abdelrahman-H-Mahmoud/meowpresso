"use client";

import { RecipeCategory } from '@/data/recipes';
import { useState } from 'react';
import RecipeList from './_components/RecipeList';
import  CategoryFilter  from './_components/CategoryFilter';
import { useRecipes } from '@/hooks/useRecipes';
import Link from 'next/link';

export default function RecipesPage() {
  const [selectedCategories, setSelectedCategories] = useState<RecipeCategory[]>([]);

  const { data: recipes = [], isLoading } = useRecipes(
    selectedCategories.length ? selectedCategories : undefined
  );

  const handleToggleCategory = (categories: RecipeCategory[]) => {
    setSelectedCategories(categories);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-coffee-dark dark:text-accent-400 mb-8">Coffee Recipes</h1>
      <CategoryFilter
        selectedCategories={selectedCategories}
        onCategoriesChange={handleToggleCategory}
      />
      <RecipeList recipes={recipes} isLoading={isLoading} />
    </div>
  );
}

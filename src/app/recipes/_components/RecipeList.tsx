"use client";

import { Recipe } from '@/data/recipes';
import { Card } from '@/components/Card';

interface RecipeListProps {
  recipes: Recipe[];
  isLoading?: boolean;
}

export default function RecipeList({ recipes, isLoading = false }: RecipeListProps) {
  if (isLoading) {
    return (
      <div className="col-span-full text-center py-8 text-gray-500">
        Loading recipes...
      </div>
    );
  }

  if (recipes.length === 0) {
    return (
      <div className="col-span-full text-center py-8 text-gray-500">
        No recipes found for selected categories
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
          imageUrl={recipe.imageUrl}
          categories={recipe.categories}
          metadata={[
            { label: 'Difficulty', value: recipe.difficulty },
            { label: 'Time', value: recipe.prepTime }
          ]}
        />
      ))}
    </div>
  );
} 
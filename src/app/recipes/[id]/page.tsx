"use client";

import { use } from 'react';
import Image from 'next/image';
import { useRecipe } from '@/hooks/useRecipe';

export default function RecipeDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data: recipe, isLoading } = useRecipe(id);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        Loading recipe...
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        Recipe not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-96">
          <Image
            src={recipe.imageUrl || '/images/default-recipe.jpg'}
            alt={recipe.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {recipe.categories.map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium text-white bg-brown-600/90 dark:bg-accent-500/90 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-coffee-dark dark:text-white mb-4">{recipe.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">{recipe.description}</p>

          <div className="flex gap-8 mb-8 text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Difficulty:</span>
              <span>{recipe.difficulty}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Prep Time:</span>
              <span>{recipe.prepTime}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-coffee-dark dark:text-white mb-4">Ingredients</h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brown-600 dark:bg-accent-500 rounded-full" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-coffee-dark dark:text-white mb-4">Instructions</h2>
              <ol className="space-y-4 text-gray-600 dark:text-gray-300">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="font-semibold text-brown-600 dark:text-accent-400">{index + 1}.</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
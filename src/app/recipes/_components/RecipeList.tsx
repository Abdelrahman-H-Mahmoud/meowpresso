"use client";

import { Recipe } from '@/data/recipes';
import { Card } from '@/components/Card';
import { motion } from 'framer-motion';

interface RecipeListProps {
  recipes: Recipe[];
  isLoading?: boolean;
}

function RecipeSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-200 dark:bg-gray-700" />
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          {[1, 2].map((i) => (
            <div key={i} className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full" />
          ))}
        </div>
        <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4" />
        <div className="flex justify-between">
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
      </div>
    </div>
  );
}

export default function RecipeList({ recipes, isLoading = false }: RecipeListProps) {
  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <RecipeSkeleton key={i} />
        ))}
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
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {recipes.map((recipe) => (
        <motion.div
          key={recipe.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 }
          }}
        >
          <Card
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            imageUrl={recipe.imageUrl}
            categories={recipe.categories}
            metadata={[
              { label: 'Difficulty', value: recipe.difficulty },
              { label: 'Time', value: recipe.prepTime }
            ]}
          />
        </motion.div>
      ))}
    </motion.div>
  );
} 
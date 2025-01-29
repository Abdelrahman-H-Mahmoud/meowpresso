"use client";

import Image from 'next/image';
import { useRecipe } from '@/hooks/useRecipe';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Clock, BarChart2 } from 'lucide-react';

export default function RecipeDetailPage() {
  const { id } = useParams();
  const { data: recipe, isLoading, error } = useRecipe(id as string);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-500 mb-4">Error loading recipe</p>
        <Link href="/recipes" className="text-primary hover:underline">
          Back to Recipes
        </Link>
      </div>
    );
  }

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 max-w-4xl"
    >
      <div className="mb-8">
        <Link 
          href="/recipes" 
          className="inline-flex items-center text-brown-600 dark:text-accent-400 hover:underline mb-6 group"
        >
          <span className="transform transition-transform group-hover:-translate-x-1">←</span>
          <span className="ml-2">Back to Recipes</span>
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-[400px] sm:h-[500px]">
          <Image
            src={recipe.imageUrl || '/images/default-recipe.jpg'}
            alt={recipe.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              {recipe.categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 text-sm font-medium bg-brown-600/90 dark:bg-accent-500/90 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {recipe.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-200">
              <span className="flex items-center gap-2">
                <BarChart2 size={16} className="opacity-75" />
                Difficulty: {recipe.difficulty}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="opacity-75" />
                Prep Time: {recipe.prepTime}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 md:p-10">
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-10">
            {recipe.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-coffee-dark dark:text-white mb-6">
                Ingredients
              </h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-brown-600 dark:bg-accent-500 rounded-full" />
                    {ingredient}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-coffee-dark dark:text-white mb-6">
                Instructions
              </h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="flex gap-4 text-gray-600 dark:text-gray-300"
                  >
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brown-600/10 dark:bg-accent-500/10 text-brown-600 dark:text-accent-400 font-semibold">
                      {index + 1}
                    </span>
                    <span>{instruction}</span>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link 
          href="/recipes" 
          className="inline-flex items-center text-brown-600 dark:text-accent-400 hover:underline group"
        >
          <span className="transform transition-transform group-hover:-translate-x-1">←</span>
          <span className="ml-2">Back to Recipes</span>
        </Link>
      </div>
    </motion.article>
  );
} 
"use client";

import { RecipeCategory } from '@/data/recipes';

interface CategoryFilterProps {
  selectedCategories: Set<RecipeCategory>;
  onToggleCategory: (category: RecipeCategory) => void;
  onClearFilters: () => void;
  isLoading?: boolean;
}

export function CategoryFilter({ 
  selectedCategories, 
  onToggleCategory,
  onClearFilters,
  isLoading = false 
}: CategoryFilterProps) {
  return (
    <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-colors duration-200">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-coffee-dark dark:text-accent-400">Filter by Category</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {selectedCategories.size 
              ? `${selectedCategories.size} ${selectedCategories.size === 1 ? 'filter' : 'filters'} applied`
              : 'Select categories to filter recipes'
            }
          </p>
        </div>
        {selectedCategories.size > 0 && (
          <button
            onClick={onClearFilters}
            disabled={isLoading}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 
                     hover:text-brown-600 dark:hover:text-accent-400 disabled:opacity-50 
                     transition-colors duration-200 rounded-md hover:bg-brown-50 dark:hover:bg-accent-400/10"
          >
            Clear all
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-3">
        {Object.values(RecipeCategory).map((category) => (
          <button
            key={category}
            onClick={() => onToggleCategory(category)}
            disabled={isLoading}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200
              ${selectedCategories.has(category)
                ? 'bg-brown-600 dark:bg-accent-500 text-white shadow-md transform scale-105'
                : 'text-coffee-dark dark:text-gray-200 border border-brown-600 dark:border-accent-400 hover:bg-brown-600 dark:hover:bg-accent-500 hover:text-white hover:shadow'
              }
              ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
            `}
          >
            {category}
            {selectedCategories.has(category) && (
              <span className="ml-2 inline-block" aria-hidden="true">×</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
} 
"use client";

import { RecipeCategory } from '@/data/recipes';

interface CategoryFilterProps {
  selectedCategories: Set<RecipeCategory>;
  onToggleCategory: (category: RecipeCategory) => void;
  isLoading?: boolean;
}

export function CategoryFilter({ 
  selectedCategories, 
  onToggleCategory, 
  isLoading = false 
}: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-coffee-dark mb-4">Filter by Category</h2>
      <div className="flex flex-wrap gap-2">
        {Object.values(RecipeCategory).map((category) => (
          <button
            key={category}
            onClick={() => onToggleCategory(category)}
            disabled={isLoading}
            className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-200
              ${selectedCategories.has(category)
                ? 'bg-brown-600 text-white'
                : 'text-coffee-dark border border-brown-600 hover:bg-brown-600 hover:text-white'
              }
              ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
} 
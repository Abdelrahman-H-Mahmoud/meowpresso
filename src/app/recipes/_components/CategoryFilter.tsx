"use client";

import { FilterTags } from '@/components/FilterTags';
import { RecipeCategory } from '@prisma/client';

interface CategoryFilterProps {
  selectedCategories: RecipeCategory[];
  onCategoriesChange: (categories: RecipeCategory[]) => void;
}

export default function CategoryFilter({ 
  selectedCategories, 
  onCategoriesChange 
}: CategoryFilterProps) {
  return (
    <FilterTags
      title="Filter by Category"
      options={Object.values(RecipeCategory)}
      selectedOptions={selectedCategories}
      onOptionsChange={onCategoriesChange as (options: string[]) => void}
    />
  );
} 
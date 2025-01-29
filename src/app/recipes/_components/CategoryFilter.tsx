"use client";

import { FilterTags } from '@/components/FilterTags';
import { RecipeCategory } from '@prisma/client';
import { categoryMap } from '../categoryMap';

interface CategoryFilterProps {
  selectedCategories: RecipeCategory[];
  onCategoriesChange: (categories: RecipeCategory[]) => void;
}


export default function CategoryFilter({ 
  selectedCategories, 
  onCategoriesChange 
}: CategoryFilterProps) {
  const categories = Object.keys(categoryMap) as RecipeCategory[];
  return (
    <FilterTags
      title="Filter by Category"
      options={categories.map(category => categoryMap[category])}
      selectedOptions={selectedCategories.map(category => categoryMap[category])}
      onOptionsChange={(options: string[]) => {
        const selected = options.map(option => 
          categories.find(category => categoryMap[category] === option) as RecipeCategory
        );
        onCategoriesChange(selected);
      }}
    />
  );
}
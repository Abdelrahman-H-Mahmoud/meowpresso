import { Recipe } from '@prisma/client';
import { Card } from '@/components/Card';
import { createSeoUrl } from '@/utils/url';
import { categoryMap } from '../categoryMap';
interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card
      href={`/recipes/${createSeoUrl(recipe.id, recipe.title)}`}
      imageUrl={recipe.imageUrl || ''}
      imageAlt={recipe.title}
      title={recipe.title}
      description={recipe.description}
      tags={recipe.categories.map(category => ({ label: categoryMap[category] }))}
      meta={{
        left: recipe.difficulty,
        right: recipe.prepTime,
        icon: 'difficulty'
      }}
    />
  );
}
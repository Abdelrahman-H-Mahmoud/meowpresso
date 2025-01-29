import { Recipe } from '@/data/recipes';
import { Card } from '@/components/Card';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card
      href={`/recipes/${recipe.id}`}
      imageUrl={recipe.imageUrl || ''}
      imageAlt={recipe.title}
      title={recipe.title}
      description={recipe.description}
      tags={recipe.categories.map(category => ({ label: category }))}
      meta={{
        left: recipe.difficulty,
        right: recipe.prepTime,
        icon: 'difficulty'
      }}
    />
  );
} 
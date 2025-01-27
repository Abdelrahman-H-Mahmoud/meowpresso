import { RecipeCategory } from '@/data/recipes';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  categories: RecipeCategory[];
  metadata?: {
    label: string;
    value: string;
  }[];
}

export function Card({ title, description, imageUrl, categories, metadata }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl || '/images/default-recipe.jpg'}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {categories.map((category, index) => (
            <span 
              key={index}
              className="inline-block px-2 py-1 text-xs font-semibold text-white bg-brown-600 rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-semibold text-coffee-dark mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        {metadata && (
          <div className="flex justify-between text-sm text-gray-500">
            {metadata.map((item, index) => (
              <span key={index}>
                {item.label}: {item.value}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 
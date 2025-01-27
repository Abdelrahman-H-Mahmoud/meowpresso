import { RecipeCategory } from '@/data/recipes';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  id?: string;
  title: string;
  description: string;
  imageUrl?: string;
  categories: RecipeCategory[];
  metadata?: {
    label: string;
    value: string;
  }[];
}

export function Card({ id, title, description, imageUrl, categories, metadata }: CardProps) {
  const Content = (
    <>
      <div className="relative h-48 w-full group-hover:h-52 transition-all duration-300 overflow-hidden">
        <Image
          src={imageUrl || '/images/default-recipe.jpg'}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <span 
                key={index}
                className="inline-block px-2 py-1 text-xs font-medium text-white bg-brown-600/90 dark:bg-accent-500/90 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6 bg-white dark:bg-gray-800 transition-colors duration-200">
        <h2 className="text-xl font-semibold text-coffee-dark dark:text-white mb-2 
                      group-hover:text-brown-600 dark:group-hover:text-accent-400 transition-colors">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{description}</p>
        {metadata && (
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            {metadata.map((item, index) => (
              <span key={index} className="flex items-center gap-1">
                <span className="font-medium">{item.label}:</span>
                <span>{item.value}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  if (id) {
    return (
      <Link 
        href={`/recipes/${id}`} 
        className="group block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl 
                 transform hover:-translate-y-1 transition-all duration-300"
      >
        {Content}
      </Link>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {Content}
    </div>
  );
} 
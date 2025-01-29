import Image from 'next/image';
import Link from 'next/link';
import { Clock, Calendar, BarChart2 } from 'lucide-react';

interface Tag {
  label: string;
  href?: string;
}

interface CardProps {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: Tag[];
  meta: {
    left: string;
    right: string;
    icon: 'calendar' | 'difficulty';
  };
}

export function Card({ 
  href, 
  imageUrl, 
  imageAlt, 
  title, 
  description, 
  tags, 
  meta 
}: CardProps) {
  return (
    <Link href={href} className="group block transform hover:-translate-y-2 transition-all duration-300">
      <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-brown-500 to-brown-600 dark:from-accent-500 dark:to-accent-600 rounded-full"
              >
                {tag.label}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-bold text-coffee-dark dark:text-white mb-2 line-clamp-2">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
            {description}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mt-auto">
            <span className="flex items-center gap-2">
              {meta.icon === 'calendar' && <Calendar size={14} className="opacity-75" />}
              {meta.icon === 'difficulty' && <BarChart2 size={14} className="opacity-75" />}
              {meta.left}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="opacity-75" />
              {meta.right}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
} 
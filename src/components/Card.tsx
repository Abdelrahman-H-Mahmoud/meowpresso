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
    <Link href={href} className="block transform hover:-translate-y-1 transition-all duration-300">
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-[26rem]">
        <div className="relative h-48 group">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4 flex flex-col h-[calc(26rem-12rem)]">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium text-white bg-brown-600/90 dark:bg-accent-500/90 rounded-full"
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
'use client';

import Link from 'next/link';
import { NavItem } from '@/config/navigation';

interface DesktopNavProps {
  items: NavItem[];
  isActive: (path: string) => boolean;
  onActionClick?: (item: NavItem) => void;
}

export function DesktopNav({ items, isActive, onActionClick }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex flex-1 items-center justify-center gap-2 mx-8">
      {items.map((item) => (
        item.type === 'action' ? (
          <button
            key={item.path}
            onClick={() => onActionClick?.(item)}
            className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
              text-white bg-brown-600 hover:bg-brown-700 dark:bg-accent-500 
              dark:hover:bg-accent-600"
          >
            {item.label}
          </button>
        ) : (
          <Link
            key={item.path}
            href={item.path}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              isActive(item.path)
                ? 'bg-brown-600 dark:bg-accent-500 text-white'
                : 'text-gray-600 hover:bg-brown-50 dark:hover:bg-accent-400/10 hover:text-brown-600 dark:hover:text-accent-400'
            }`}
          >
            {item.label}
          </Link>
        )
      ))}
    </nav>
  );
} 
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-2xl font-bold text-coffee-dark dark:text-white hover:text-brown-600 transition-colors"
          >
            Beanlyst
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[
                { path: '/', label: 'Home' },
                { path: '/recipes', label: 'Recipes' },
                { path: '/blogs', label: 'Blog' },
                { path: '/stores', label: 'Stores' },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                    ${isActive(path)
                      ? 'bg-brown-600 dark:bg-accent-500 text-white'
                      : 'text-gray-600 hover:bg-brown-50 dark:hover:bg-accent-400/10 hover:text-brown-600 dark:hover:text-accent-400'
                    }`}
                >
                  {label}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
} 
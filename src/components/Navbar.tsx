"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from '@/components/ThemeToggle';
import { useState } from 'react';
import { Logo } from '@/components/Logo';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Logo size="md" />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
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

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="py-3 space-y-1">
          {[
            { path: '/', label: 'Home' },
            { path: '/recipes', label: 'Recipes' },
            { path: '/blogs', label: 'Blog' },
            { path: '/stores', label: 'Stores' },
          ].map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                ${isActive(path)
                  ? 'bg-brown-600 dark:bg-accent-500 text-white'
                  : 'text-gray-600 hover:bg-brown-50 dark:hover:bg-accent-400/10 hover:text-brown-600 dark:hover:text-accent-400'
                }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
} 
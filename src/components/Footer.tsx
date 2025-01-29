'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Coffee } from 'lucide-react';
import { Logo } from '@/components/Logo';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Blog', href: '/blogs' },
    { name: 'About', href: '/about' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/Abdelrahman-H-Mahmoud', icon: Github },
    { name: 'Twitter', href: 'https://x.com/abdelrahman93_', icon: Twitter },
    { name: 'Instagram', href: 'https://www.instagram.com/abdelrahman_hussieeen', icon: Instagram },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-center gap-10">
          <Logo size="lg" />

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4" aria-label="Footer">
            {navigation.main.map((item) => (
              <motion.div 
                key={item.name}
                whileHover={{ y: -2 }}
                className="relative"
              >
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-brown-600 dark:text-gray-300 dark:hover:text-accent-400 transition-colors"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brown-600 dark:bg-accent-400 transition-all group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex justify-center gap-8">
            {navigation.social.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-brown-600 dark:hover:text-accent-400 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Coffee className="h-4 w-4" />
            <p>
              &copy; {new Date().getFullYear()} Meowpresso. Made with ☕️ and 😺
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 
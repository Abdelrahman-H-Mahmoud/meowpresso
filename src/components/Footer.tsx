'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Blog', href: '/blogs' },
    { name: 'About', href: '/about' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/yourusername', icon: Github },
    { name: 'Twitter', href: 'https://twitter.com/yourusername', icon: Twitter },
    { name: 'Instagram', href: 'https://instagram.com/yourusername', icon: Instagram },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Meowpresso"
              width={60}
              height={60}
              className="object-contain"
            />
            <span className="text-xl font-bold text-coffee-dark dark:text-white">
              Meowpresso
            </span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-8" aria-label="Footer">
            {navigation.main.map((item) => (
              <motion.div 
                key={item.name}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-brown-600 dark:text-gray-300 dark:hover:text-accent-400"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex justify-center gap-6">
            {navigation.social.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-brown-600 dark:hover:text-accent-400"
                  whileHover={{ scale: 1.1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Meowpresso. Made with ☕️ and 😺
          </p>
        </div>
      </div>
    </footer>
  );
} 
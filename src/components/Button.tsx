'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-brown-500 to-brown-600 dark:from-accent-500 dark:to-accent-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
} 
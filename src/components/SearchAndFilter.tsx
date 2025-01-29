'use client';

import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function SearchAndFilter({ onSearch, placeholder = 'Search...' }: SearchAndFilterProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brown-600 dark:focus:ring-accent-500"
        />
      </div>
    </motion.div>
  );
} 
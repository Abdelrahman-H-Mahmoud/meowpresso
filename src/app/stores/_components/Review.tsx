'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReviewProps {
  author: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export function Review({ author, rating, comment, createdAt }: ReviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800/50 rounded-lg p-4 shadow-sm"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-coffee-dark dark:text-white">
          {author}
        </span>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{comment}</p>
      <time className="text-xs text-gray-500 dark:text-gray-400">
        {new Date(createdAt).toLocaleDateString()}
      </time>
    </motion.div>
  );
} 
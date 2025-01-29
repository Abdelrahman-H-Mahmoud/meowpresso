'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ErrorBoundaryProps {
  error: Error;
  reset: () => void;
}

export function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-[50vh] p-4"
    >
      <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center max-w-md">
        {error.message}
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-brown-600 dark:bg-accent-500 text-white rounded-lg hover:opacity-90 transition-opacity"
      >
        Try again
      </button>
    </motion.div>
  );
} 
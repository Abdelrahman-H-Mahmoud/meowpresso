'use client';

import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

interface LogoutButtonProps {
  onClick: () => void;
}

export function LogoutButton({ onClick }: LogoutButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative group p-2 rounded-md hover:bg-brown-50 dark:hover:bg-accent-400/10 
        text-gray-600 dark:text-gray-300 hover:text-brown-600 dark:hover:text-accent-400 
        transition-all duration-300"
      title="Take a break"
    >
      <div className="relative">
        <Coffee className="w-4 h-4" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-px bg-current rotate-45 transform origin-center" />
        </div>
      </div>
      
      {/* Steam animation */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: -4,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="text-brown-600 dark:text-accent-400 text-sm"
        >
          ∿
        </motion.div>
      </div>
    </motion.button>
  );
} 
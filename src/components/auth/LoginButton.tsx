'use client';

import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

interface LoginButtonProps {
  onClick: () => void;
}

export function LoginButton({ onClick }: LoginButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative group flex items-center gap-2 px-3.5 py-2 rounded-md 
        bg-gradient-to-r from-brown-600 to-brown-700 dark:from-accent-400 dark:to-accent-500
        hover:from-brown-700 hover:to-brown-800 dark:hover:from-accent-500 dark:hover:to-accent-600
        text-white shadow-md transition-all duration-300 text-sm"
    >
      {/* Steam animation */}
      <div className="absolute -top-2 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: -6,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="text-white text-opacity-50 text-lg"
        >
          ∿
        </motion.div>
      </div>

      {/* Coffee cup with "filling" animation */}
      <div className="relative">
        <Coffee className="w-4 h-4 relative z-10" />
        <motion.div
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 right-0 bg-white/30 rounded-b-sm z-0"
        />
      </div>

      {/* Text with gradient */}
      <span className="font-medium bg-gradient-to-r from-white to-brown-50 dark:to-accent-100 bg-clip-text">
        Brew
      </span>

      {/* Background glow effect */}
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-brown-400 to-brown-500 dark:from-accent-300 dark:to-accent-400 
        opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
    </motion.button>
  );
} 
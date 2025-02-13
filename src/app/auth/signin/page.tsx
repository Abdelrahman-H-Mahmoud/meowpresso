'use client';

import { SignInContent } from '@/components/auth/SignInContent';
import { Logo } from '@/components/Logo';
import { motion } from 'framer-motion';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="flex justify-center mb-8">
          <Logo size="lg" />
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <SignInContent />
        </div>
      </motion.div>
    </div>
  );
} 
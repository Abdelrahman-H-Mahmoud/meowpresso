'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: { width: 48, height: 48, text: 'text-xl' },
  md: { width: 56, height: 56, text: 'text-2xl' },
  lg: { width: 72, height: 72, text: 'text-2xl' },
};

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const dimensions = sizes[size];
  
  return (
    <motion.div
      whileHover={{ scale: size === 'lg' ? 1.15 : 1.05 }}
      className={`group ${className}`}
    >
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/logo.png"
          alt="Meowpresso"
          width={dimensions.width}
          height={dimensions.height}
          className="transform transition-transform group-hover:rotate-12"
        />
        <span className={`${dimensions.text} font-bold bg-gradient-to-r from-[#4A2C2A] via-[#8B4513] to-[#D4A574] dark:from-[#8B4513] dark:via-[#D4A574] dark:to-[#DEB887] bg-clip-text text-transparent`}>
          Meowpresso
        </span>
      </Link>
    </motion.div>
  );
} 
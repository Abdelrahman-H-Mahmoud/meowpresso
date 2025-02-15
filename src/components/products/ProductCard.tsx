'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Product, ProductVariant } from '@/types/product';
import Link from 'next/link';
import { createSeoUrl } from '@/utils/url';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product, variant: ProductVariant) => void;
}

export function ProductCard({ product }: ProductCardProps) {
  const lowestPrice = Math.min(...product.variants.map(v => v.price));

  return (
    <Link href={`/products/${createSeoUrl(product.id, product.name)}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="group bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm h-full"
      >
        <div className="relative h-[240px] overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Roast Level Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-brown-600/90 text-white text-sm rounded-full backdrop-blur-sm">
              {product.roastLevel}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white/90 mb-2">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2 mb-4">
            <p className="text-brown-600 dark:text-accent-400/90 text-sm">
              Origins:
            </p>
            <div className="flex flex-wrap gap-1">
              {product.origins.map((origin, index) => (
                <span
                  key={origin}
                  className="text-sm text-gray-600 dark:text-gray-300/80"
                >
                  {origin}
                  {index < product.origins.length - 1 && ", "}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300/80 text-sm line-clamp-2 mb-6">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-brown-600 dark:text-accent-400">
              From ${lowestPrice}
            </p>
            <span className="text-brown-600 dark:text-accent-400 group-hover:translate-x-1 transition-transform">
              <ArrowRight size={20} />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
} 
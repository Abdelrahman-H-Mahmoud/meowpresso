'use client';

import { StoreDto } from '@/types/dtos/store.dto';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { createSeoUrl } from '@/utils/url';

interface StoreCardProps {
  store: StoreDto;
  index: number;
}

export function StoreCard({ store, index }: StoreCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
    >
      <Link href={`/stores/${createSeoUrl(store.id, store.name)}`}>
        <div className="relative h-48">
          <Image
            src={store.imageUrl}
            alt={store.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-coffee-dark dark:text-white mb-2">
                {store.name}
              </h2>
              <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 mb-3">
                <MapPin className="w-4 h-4" />
                <p className="text-sm line-clamp-1">{store.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-brown-50 dark:bg-accent-400/10 rounded-lg">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-medium">
                {store.averageRating?.toFixed(1) || 'N/A'}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {store.reviewCount} {store.reviewCount === 1 ? 'review' : 'reviews'}
            </div>
            <div className="flex items-center gap-2 text-brown-600 dark:text-accent-400 group-hover:gap-3 transition-all">
              <span className="text-sm font-medium">View Details</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 
'use client';

import { Star } from 'lucide-react';

interface StoreReviewsProps {
  storeName: string;
  reviewCount: number;
  averageRating: number | null;
  onOpenReviews: () => void;
}

export function StoreReviews({ 
  storeName, 
  reviewCount, 
  averageRating, 
  onOpenReviews 
}: StoreReviewsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-coffee-dark dark:text-white mb-2">
            Customer Reviews
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <span className="ml-2 text-2xl font-bold">
                {averageRating?.toFixed(1) || 'N/A'}
              </span>
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Based on {reviewCount} {reviewCount === 1 ? 'review' : 'reviews'}
            </div>
          </div>
        </div>
        <button
          onClick={onOpenReviews}
          className="px-4 py-2 bg-brown-600 dark:bg-accent-400 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Write a Review
        </button>
      </div>

      {reviewCount > 0 && (
        <div className="space-y-4">

          <button
            onClick={onOpenReviews}
            className="w-full py-3 text-brown-600 dark:text-accent-400 hover:underline"
          >
            View all {reviewCount} reviews
          </button>
        </div>
      )}

      {reviewCount === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            No reviews yet. Be the first to review {storeName}!
          </p>
          <button
            onClick={onOpenReviews}
            className="text-brown-600 dark:text-accent-400 hover:underline"
          >
            Write a Review
          </button>
        </div>
      )}
    </div>
  );
} 
'use client';

import { useStoreReviews } from '@/hooks/useStoreReviews';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Review } from './Review';
import { X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface ReviewsModalProps {
  storeId: string;
  storeName: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ReviewsModal({ storeId, storeName, isOpen, onClose }: ReviewsModalProps) {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching } = useStoreReviews(storeId, page);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div ref={modalRef} className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-bold">{storeName} Reviews</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-4 space-y-4">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              {data?.reviews.map(review => (
                <Review key={review.id} {...review} />
              ))}
              {data?.total && data?.total > data?.reviews?.length && (
                <button
                  onClick={() => setPage(p => p + 1)}
                  disabled={isFetching}
                  className="w-full py-2 text-brown-600 dark:text-accent-400 hover:underline disabled:opacity-50"
                >
                  {isFetching ? 'Loading...' : 'Load more reviews'}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
} 
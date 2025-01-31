'use client';

import { useStores } from '@/hooks/useStores';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { StoreCard } from './_components/StoreCard';
import { Pagination } from './_components/Pagination';
import { StoreStats } from './_components/StoreStats';
import { Coffee } from 'lucide-react';
import { useState } from 'react';

const ITEMS_PER_PAGE = 9;

export default function StoresPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useStores(page, ITEMS_PER_PAGE);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">Error loading stores</p>
      </div>
    );
  }

  const totalPages = Math.ceil((data?.total || 0) / ITEMS_PER_PAGE);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Coffee className="w-8 h-8 text-brown-600 dark:text-accent-400" />
          <h1 className="text-3xl font-bold text-coffee-dark dark:text-accent-400">
            Our Coffee Stores
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover our handpicked collection of coffee stores, each offering a unique blend 
          of ambiance and exceptional coffee experiences.
        </p>
      </div>

      <StoreStats totalStores={data?.total || 0} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.stores.map((store, index) => (
          <StoreCard key={store.id} store={store} index={index} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
} 
'use client';

import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useStore } from '@/hooks/useStores';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { extractIdFromSeoUrl } from '@/utils/url';
import { ReviewsModal } from '@/app/stores/_components/ReviewsModal';
import { StoreReviews } from '@/app/stores/_components/StoreReviews';
import { useState } from 'react';
import { OpeningHours } from '@/app/stores/_components/OpeningHours';
import { LocationContact } from '@/app/stores/_components/LocationContact';

export default function StoreDetailsPage() {
  const { id } = useParams();
  const actualId = extractIdFromSeoUrl(id as string);
  const { data: store, isLoading, error } = useStore(actualId);
  const [showReviews, setShowReviews] = useState(false);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !store) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-500 mb-4">Error loading store</p>
        <Link href="/stores" className="text-brown-600 dark:text-accent-400 hover:underline">
          Back to Stores
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        href="/stores" 
        className="inline-flex items-center text-brown-600 dark:text-accent-400 hover:underline mb-8 group"
      >
        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Stores
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
      >
        <div className="relative h-64 md:h-96">
          <Image
            src={store.imageUrl}
            alt={store.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {store.name}
            </h1>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <LocationContact
                address={store.address}
                phone={store.phone}
                website={store.website}
              />
            </div>

            <div>
              <OpeningHours hours={store.hours} />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-12">
        <StoreReviews
          storeName={store.name}
          reviewCount={store.reviewCount}
          averageRating={store.averageRating}
          onOpenReviews={() => setShowReviews(true)}
        />
      </div>

      <ReviewsModal
        storeId={store.id}
        storeName={store.name}
        isOpen={showReviews}
        onClose={() => setShowReviews(false)}
      />
    </div>
  );
} 
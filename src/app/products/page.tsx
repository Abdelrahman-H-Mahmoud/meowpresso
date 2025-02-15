'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/products/ProductCard';
import { useProducts } from '@/app/hooks/useProducts';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { AlertCircle } from 'lucide-react';

const categories = ['All', 'Beans', 'Ground', 'Capsules'];
const roastLevels = ['All', 'Light', 'Medium', 'Dark', 'Medium-Dark'];

export default function ProductsPage() {
  const { data: products, isLoading, error } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRoast, setSelectedRoast] = useState('All');

  const filteredProducts = products?.filter(product => {
    const categoryMatch = selectedCategory === 'All' || 
      product.category === selectedCategory.toLowerCase();
    const roastMatch = selectedRoast === 'All' || 
      product.roastLevel === selectedRoast;
    return categoryMatch && roastMatch;
  }) ?? [];

  if (isLoading) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Failed to load products</h2>
          <p className="text-gray-600 dark:text-gray-400">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Coffee Shop
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our carefully selected coffee beans from around the world.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Roast Level
            </label>
            <select
              value={selectedRoast}
              onChange={(e) => setSelectedRoast(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              {roastLevels.map(roast => (
                <option key={roast} value={roast}>{roast}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 
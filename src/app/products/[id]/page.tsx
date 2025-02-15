'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  ArrowLeft, 
  AlertCircle, 
  Globe, 
  Droplets,
  ChefHat
} from 'lucide-react';
import { ProductVariant } from '@/types/product';
import Link from 'next/link';
import { useProduct } from '@/app/hooks/useProduct';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { use } from 'react';
import { extractIdFromSeoUrl } from '@/utils/url';
import { useCartStore } from '@/store/useCartStore';
import { cn } from '@/lib/utils';
import toast from 'react-hot-toast';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: seoUrl } = use(params);
  const actualId = extractIdFromSeoUrl(seoUrl);
  const { data: product, isLoading, error } = useProduct(actualId);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    if (product?.variants?.[0]) {
      const variant = product.variants[0];
      setSelectedVariant(variant);
      setIsDisabled(!variant.inStock);
    }
  }, [product]);

  const handleVariantSelect = (variant: ProductVariant) => {
    setSelectedVariant(variant);
    setIsDisabled(!variant.inStock);
  };

  const handleAddToCart = () => {
    if (product && selectedVariant) {
      addItem(product, selectedVariant);
      toast.success(
        <div className="flex items-center gap-2">
          <span className="font-medium">Added to cart!</span>
          <span className="text-sm text-gray-500">
            {product.name} - {selectedVariant.weight}g
          </span>
        </div>,
        {
          duration: 2000,
          style: {
            background: '#F9FAFB',
            color: '#111827',
            border: '1px solid #E5E7EB',
          },
          icon: '🛍️',
        }
      );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Failed to load product</h2>
          <p className="text-gray-600 dark:text-gray-400">{error?.message}</p>
          <Link 
            href="/products"
            className="mt-6 inline-flex items-center text-brown-600 dark:text-accent-400 hover:underline"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link 
          href="/products"
          className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-brown-600 dark:hover:text-accent-400 mb-8 group"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div {...fadeIn} className="space-y-4">
            <div 
              className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden cursor-zoom-in"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                src={product.images[activeImage]}
                alt={`${product.name} - Image ${activeImage + 1}`}
                fill
                className={`object-cover transition-transform duration-300 ${
                  isZoomed ? 'scale-110' : 'scale-100'
                }`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                    activeImage === index 
                      ? 'ring-2 ring-brown-600 dark:ring-accent-400' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div {...fadeIn} className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-brown-600/90 text-white text-sm rounded-full">
                  {product.roastLevel}
                </span>
                <span className="px-3 py-1 bg-brown-500/90 text-white text-sm rounded-full">
                  {product.process}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {product.description}
              </p>
            </div>

            {/* Product Details Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Origins */}
              <div className="col-span-2 bg-brown-50 dark:bg-accent-900/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-brown-600 dark:text-accent-400" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Origins
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.origins.map(origin => (
                    <span
                      key={origin}
                      className="px-3 py-1 bg-white dark:bg-gray-800 rounded-lg text-gray-800 dark:text-gray-200 shadow-sm"
                    >
                      {origin}
                    </span>
                  ))}
                </div>
              </div>

              {/* Flavor Notes */}
              <div className="col-span-2 md:col-span-1 bg-brown-50 dark:bg-accent-900/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Droplets className="w-5 h-5 text-brown-600 dark:text-accent-400" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Flavor Notes
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.flavor.map(flavor => (
                    <span
                      key={flavor}
                      className="px-3 py-1 bg-brown-100/90 dark:bg-accent-900/20 text-brown-600 dark:text-accent-400/90 rounded-full"
                    >
                      {flavor}
                    </span>
                  ))}
                </div>
              </div>

              {/* Brewing Methods */}
              <div className="col-span-2 md:col-span-1 bg-brown-50 dark:bg-accent-900/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ChefHat className="w-5 h-5 text-brown-600 dark:text-accent-400" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Brewing Methods
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.brewingMethods.map(method => (
                    <span
                      key={method}
                      className="px-3 py-1 bg-brown-100/90 dark:bg-accent-900/20 text-brown-600 dark:text-accent-400/90 rounded-full"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Purchase Section */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Select Size
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {product.variants.map(variant => (
                  <motion.button
                    key={variant.id}
                    onClick={() => handleVariantSelect(variant)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-xl border transition-all ${
                      selectedVariant?.id === variant.id
                        ? 'border-brown-600 dark:border-accent-500/70 bg-brown-50 dark:bg-accent-900/30 shadow-md'
                        : 'border-gray-200 dark:border-gray-700/50 hover:border-brown-400 dark:hover:border-accent-400/50'
                    }`}
                  >
                    <p className="font-medium text-gray-900 dark:text-white/90">
                      {variant.weight}g
                    </p>
                    <p className="text-2xl font-bold text-brown-600 dark:text-accent-400/90">
                      ${variant.price}
                    </p>
                    <p className={`text-sm ${variant.inStock ? 'text-green-600' : 'text-red-500'}`}>
                      {variant.inStock ? 'In Stock' : 'Out of Stock'}
                    </p>
                  </motion.button>
                ))}
              </div>

              <button
                onClick={handleAddToCart}
                disabled={isDisabled}
                className={cn(
                  "relative w-full py-3 px-6 rounded-xl",
                  "flex items-center justify-center gap-3",
                  "text-white font-medium transition-all duration-200",
                  isDisabled
                    ? "bg-gray-400 dark:bg-gray-700 cursor-not-allowed opacity-60"
                    : "bg-gradient-to-r from-brown-600 to-brown-700 hover:from-brown-700 hover:to-brown-800"
                )}
              >
                <span>
                  {isDisabled ? 'Out of Stock' : `Add to Cart • $${selectedVariant?.price || 0}`}
                </span>
                <ShoppingCart 
                  className={cn(
                    "w-5 h-5",
                    !isDisabled && "animate-bounce-gentle"
                  )} 
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 
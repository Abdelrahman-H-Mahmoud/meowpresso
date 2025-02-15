'use client';

import { motion } from 'framer-motion';
import { useCartStore } from '@/store/useCartStore';
import { Minus, Plus, ShoppingBag, Trash2, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { createSeoUrl } from '@/utils/url';
import toast from 'react-hot-toast';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();

  const handleUpdateQuantity = (productId: string, variantId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, variantId, newQuantity);
  };

  const handleRemoveItem = (productId: string, variantId: string) => {
    removeItem(productId, variantId);
    toast.success('Item removed from cart');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <Image 
              src="/icons/cat.svg"
              alt="Empty cart"
              width={200}
              height={200}
              className="mx-auto mb-8 text-gray-400 dark:text-gray-600"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {`Looks like you haven't added any coffee to your cart yet.`}
            </p>
            <Link href="/products">
              <Button variant="primary" size="md" className="px-8 gap-2">
                <ShoppingBag size={20} />
                Browse Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Shopping Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
          </h1>
          <Link href="/products">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft size={18} />
              Continue Shopping
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map(({ product, variant, quantity }) => (
              <motion.div
                key={`${product.id}-${variant.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-6">
                  <Link 
                    href={`/products/${createSeoUrl(product.id, product.name)}`}
                    className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 
                      transition-transform hover:scale-105 bg-gray-100 dark:bg-gray-700"
                  >
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <Link 
                          href={`/products/${createSeoUrl(product.id, product.name)}`}
                          className="text-lg font-medium text-gray-900 dark:text-white 
                            hover:text-brown-600 dark:hover:text-accent-400 line-clamp-2"
                        >
                          {product.name}
                        </Link>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Size: {variant.weight}g
                        </p>
                      </div>
                      <p className="text-lg font-bold text-brown-600 dark:text-accent-400">
                        ${(variant.price * quantity).toFixed(2)}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 rounded-full p-1">
                        <button
                          onClick={() => handleUpdateQuantity(product.id, variant.id, quantity - 1)}
                          className="p-2 rounded-full hover:bg-white dark:hover:bg-gray-600
                            disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          disabled={quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-medium">{quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(product.id, variant.id, quantity + 1)}
                          className="p-2 rounded-full hover:bg-white dark:hover:bg-gray-600 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(product.id, variant.id)}
                        className="text-red-500 hover:text-red-600 p-2 rounded-full
                          hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm sticky top-24"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>${totalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span className="text-green-500 dark:text-green-400">Free</span>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-brown-600 dark:text-accent-400">
                    ${totalPrice().toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Tax included and shipping calculated at checkout
                </p>
              </div>
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => console.log('Checkout clicked')}
              >
                Proceed to Checkout
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 
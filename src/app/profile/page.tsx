'use client';

import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { Coffee, Star, Edit } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfilePage() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center gap-6">
              <Image
                src={session.user?.image || '/default-avatar.png'}
                alt={session.user?.name || 'User'}
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold text-coffee-dark dark:text-white">
                  {session.user?.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-300">{session.user?.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-5 h-5 text-brown-600 dark:text-accent-400" />
              <h2 className="text-xl font-bold text-coffee-dark dark:text-white">
                Your Reviews
              </h2>
            </div>
            {/* Add reviews list here */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-5 h-5 text-brown-600 dark:text-accent-400" />
              <h2 className="text-xl font-bold text-coffee-dark dark:text-white">
                Your Blog Posts
              </h2>
            </div>
            <Link
              href="/blog/new"
              className="inline-flex items-center gap-2 text-brown-600 dark:text-accent-400 hover:underline"
            >
              <Edit className="w-4 h-4" />
              Write a new post
            </Link>
            {/* Add blog posts list here */}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 
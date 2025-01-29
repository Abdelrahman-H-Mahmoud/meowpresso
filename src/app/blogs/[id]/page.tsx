'use client';

import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useBlog } from '@/hooks/useBlogs';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ContentRenderer } from '@/components/ContentRenderer';
import { motion } from 'framer-motion';
import { Clock, Calendar } from 'lucide-react';
import { extractIdFromSeoUrl } from '@/utils/url';

export default function BlogPage() {
  const { id } = useParams();
  const actualId = extractIdFromSeoUrl(id as string);

  const { data: blog, isLoading, error } = useBlog(actualId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-500 mb-4">Error loading blog post</p>
        <Link href="/blogs" className="text-primary hover:underline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 max-w-4xl"
    >
      <div className="mb-8">
        <Link 
          href="/blogs" 
          className="inline-flex items-center text-brown-600 dark:text-accent-400 hover:underline mb-6 group"
        >
          <span className="transform transition-transform group-hover:-translate-x-1">←</span>
          <span className="ml-2">Back to Blogs</span>
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-[400px] sm:h-[500px]">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium bg-brown-600/90 dark:bg-accent-500/90 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-200">
              <span>{blog.author}</span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Calendar size={16} className="opacity-75" />
                {(new Date(blog.publishDate).toDateString())}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="opacity-75" />
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 md:p-10">
          <div className="text-gray-600 dark:text-gray-300">
            <ContentRenderer content={blog.content} />
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link 
          href="/blogs" 
          className="inline-flex items-center text-brown-600 dark:text-accent-400 hover:underline group"
        >
          <span className="transform transition-transform group-hover:-translate-x-1">←</span>
          <span className="ml-2">Back to Blogs</span>
        </Link>
      </div>
    </motion.article>
  );
} 
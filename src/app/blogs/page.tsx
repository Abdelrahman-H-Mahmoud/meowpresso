'use client';

import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useBlogs } from '@/hooks/useBlogs';
import { useState } from 'react';
import BlogCard from './_components/BlogCard';
import TagFilter from './_components/TagFilter';
import { Blog, User } from '@prisma/client';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

export default function BlogsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { data: blogs, isLoading, error } = useBlogs(selectedTags);

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">Error loading blogs</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-coffee-dark dark:text-accent-400 mb-8">Coffee Blog</h1>
      <TagFilter 
        selectedTags={selectedTags} 
        onTagsChange={setSelectedTags} 
      />
      {isLoading ? (
        <div className="flex justify-center">
          <LoadingSpinner />
        </div>
      ) : blogs?.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <Coffee className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300 mb-2">
            No coffee stories brewing yet
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Check back later for fresh coffee insights and stories
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs?.map((blog) => (
            <BlogCard key={blog.id} blog={blog as Blog & { author: Partial<User> | null }} />
          ))}
        </div>
      )}
    </div>
  );
}

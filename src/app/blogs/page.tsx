'use client';

import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useBlogs } from '@/hooks/useBlogs';
import { useState } from 'react';
import BlogCard from './_components/BlogCard';
import TagFilter from './_components/TagFilter';

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
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}

import { Card } from '@/components/Card';
import { createSeoUrl } from '@/utils/url';
import { Blog, User } from '@prisma/client';

interface BlogCardProps {
  blog: Blog & {
    author: User | null;
  };
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Card
      href={`/blogs/${createSeoUrl(blog.id, blog.title)}`}
      imageUrl={blog.imageUrl}
      imageAlt={blog.title}
      title={blog.title}
      description={blog.description}
      tags={blog.tags.map(tag => ({ label: tag }))}
      meta={{
        left: blog.author?.name || 'Anonymous',
        right: blog.readTime,
        icon: 'calendar'
      }}
    />
  );
} 
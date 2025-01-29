import { Blog } from '@/data/blogs';
import { Card } from '@/components/Card';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Card
      href={`/blogs/${blog.id}`}
      imageUrl={blog.imageUrl}
      imageAlt={blog.title}
      title={blog.title}
      description={blog.description}
      tags={blog.tags.map(tag => ({ label: tag }))}
      meta={{
        left: blog.author,
        right: blog.readTime,
        icon: 'calendar'
      }}
    />
  );
} 
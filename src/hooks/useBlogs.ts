import { Blog, User } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

type BlogWithAuthor = Blog & {
  author: User | null;
};

async function getBlogs(tags?: string[]) {
  const queryString = tags && tags.length > 0 ? `?tags=${tags.join(',')}` : '';
  const response = await fetch(`/api/blogs${queryString}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.blogs as Blog[];
}

export function useBlogs(tags?: string[]) {
  return useQuery({
    queryKey: ['blogs', tags],
    queryFn: () => getBlogs(tags),
  });
}

export function useBlog(id: string) {
  return useQuery<BlogWithAuthor>({
    queryKey: ['blog', id],
    queryFn: async () => {
      const response = await fetch(`/api/blogs/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.blog as BlogWithAuthor;
    },
  });
} 
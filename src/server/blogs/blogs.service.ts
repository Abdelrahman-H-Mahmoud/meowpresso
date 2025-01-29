import { blogs } from '@/data/blogs';

export class BlogsService {
  getBlogs(tags?: string[]) {
    try {
      let filteredBlogs = blogs;
      
      if (tags && tags.length > 0) {
        filteredBlogs = blogs.filter(blog =>
          blog.tags.some(tag => tags.includes(tag))
        );
      }

      return filteredBlogs;
    } catch (error) {
      console.error('Error in BlogsService.getBlogs:', error);
      throw error;
    }
  }

  getBlogById(id: string) {
    try {
      const blog = blogs.find(blog => blog.id === id);
      
      if (!blog) {
        throw new Error('Blog not found');
      }

      return blog;
    } catch (error) {
      console.error('Error in BlogsService.getBlogById:', error);
      throw error;
    }
  }
}

export const blogsService = new BlogsService(); 
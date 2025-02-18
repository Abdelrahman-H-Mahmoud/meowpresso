import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class BlogsService {
  async getBlogs(tags?: string[]) {
    try {
      let filteredBlogs;
      if (tags && tags.length > 0) {
        filteredBlogs = await prisma.blog.findMany({
          where: {
            tags: {
              hasSome: tags,
            },
          },
          include: {
            author: {
              select: {
                name: true,
                image: true
              }
            },
          },
        });
      } else {
        filteredBlogs = await prisma.blog.findMany({
          include: {
            author: {
              select: {
                name: true,
                image: true
              }
            },
          }
        });
      }
      return filteredBlogs;
    } catch (error) {
      console.error('Error in BlogsService.getBlogs:', error);
      throw error;
    }
  }

  async getBlogById(id: string) {
    try {
      const blog = await prisma.blog.findUnique({
        where: { id },
        include: {
          author: {
            select: {
              name: true,
              image: true
            }
          },
        }
      });

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
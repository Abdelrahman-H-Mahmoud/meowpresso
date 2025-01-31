import { PrismaClient } from '@prisma/client';
import { StoreDto, ReviewsResponseDto } from '@/types/dtos/store.dto';

const prisma = new PrismaClient();

export class StoresService {
  async getStores(page = 1, limit = 10): Promise<{ stores: StoreDto[]; total: number }> {
    try {
      const [stores, total] = await prisma.$transaction([
        prisma.store.findMany({
          skip: (page - 1) * limit,
          take: limit,
          include: {
            _count: {
              select: { reviews: true }
            },
            reviews: {
              select: {
                rating: true
              }
            }
          },
          orderBy: {
            name: 'asc'
          }
        }),
        prisma.store.count()
      ]);


      return {
        stores: stores.map(store => {
          return {
            id: store.id,
            name: store.name,
            address: store.address,
            phone: store.phone,
            hours: store.hours as string,
            website: store.website,
            imageUrl: store.imageUrl,
            reviewCount: store._count.reviews || 0,
            averageRating: store.reviews.reduce((sum, review) => sum + review.rating, 0) / store.reviews.length || null
          };
        }),
        total
      };
    } catch (error) {
      console.error('Error in StoresService.getStores:', error);
      throw error;
    }
  }

  async getStoreById(id: string): Promise<StoreDto | null> {
    try {
      const [store, reviewsCount, avgRating] = await prisma.$transaction([
        prisma.store.findUnique({
          where: { id },
        }),
        prisma.review.count({
          where: { storeId: id }
        }),
        prisma.review.aggregate({
          where: { storeId: id },
          _avg: {
            rating: true
          }
        })
      ]);

      if (!store) {
        throw new Error('Store not found');
      }

      return {
        id: store.id,
        name: store.name,
        address: store.address,
        phone: store.phone,
        hours: store.hours as string,
        website: store.website,
        imageUrl: store.imageUrl,
        reviewCount: reviewsCount,
        averageRating: avgRating._avg.rating || null
      };
    } catch (error) {
      console.error('Error in StoresService.getStoreById:', error);
      throw error;
    }
  }

  async getStoreReviews(storeId: string, page = 1, limit = 10): Promise<ReviewsResponseDto> {
    try {
      const reviews = await prisma.review.findMany({
        where: { storeId },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      });
      
      const total = await prisma.review.count({
        where: { storeId }
      });

      return {
        reviews: reviews.map(review => ({
          id: review.id,
          author: review.author,
          rating: review.rating,
          comment: review.comment,
          createdAt: review.createdAt.toISOString()
        })),
        total
      };
    } catch (error) {
      console.error('Error in StoresService.getStoreReviews:', error);
      throw error;
    }
  }
}

export const storesService = new StoresService(); 
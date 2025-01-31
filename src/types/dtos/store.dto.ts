export interface StoreDto {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string; // JSON string
  website: string | null;
  imageUrl: string;
  reviewCount: number;
  averageRating: number | null;
}

export interface ReviewDto {
  id: string;
  author: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface ReviewsResponseDto {
  reviews: ReviewDto[];
  total: number;
} 
export interface BusinessHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface Review {
  id: string;
  storeId: string;
  rating: number;
  comment: string;
  author: string;
  createdAt: string;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: BusinessHours;
  website: string | null;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  _count: {
    reviews: number;
  };
  averageRating: number | null;
} 
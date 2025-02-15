export type CoffeeProcess = 'Washed' | 'Natural' | 'Honey' | 'Anaerobic' | 'Wet-Hulled';
export type BrewingMethod = 'Espresso' | 'Filter' | 'French Press' | 'Pour Over' | 'Cold Brew' | 'Moka Pot' | 'AeroPress';

export interface ProductVariant {
  id: string;
  weight: number; // in grams
  price: number;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  images: string[];
  roastLevel: 'Light' | 'Medium' | 'Dark' | 'Medium-Dark';
  origins: string[]; // Multiple origins
  process: CoffeeProcess;
  flavor: string[];
  category: 'beans' | 'ground' | 'capsules';
  variants: ProductVariant[]; // Different weight/price combinations
  brewingMethods: BrewingMethod[]; // Added brewing methods
} 
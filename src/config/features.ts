import { Coffee, Book, ChefHat } from 'lucide-react';

export const features = [
  {
    icon: Coffee,
    title: "Coffee Recipes",
    description: "Discover a variety of coffee brewing methods and recipes.",
    href: "/recipes",
    color: "bg-brown-600/10 text-brown-600 dark:bg-accent-500/10 dark:text-accent-400"
  },
  {
    icon: Book,
    title: "Coffee Blog",
    description: "Learn about coffee culture, beans, and brewing techniques.",
    href: "/blogs",
    color: "bg-brown-600/10 text-brown-600 dark:bg-accent-500/10 dark:text-accent-400"
  },
  {
    icon: ChefHat,
    title: "Brewing Guides",
    description: "Step-by-step guides for brewing the perfect cup.",
    href: "/recipes",
    color: "bg-brown-600/10 text-brown-600 dark:bg-accent-500/10 dark:text-accent-400"
  }
];

export type Feature = typeof features[0]; 
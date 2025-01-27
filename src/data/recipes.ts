export enum RecipeCategory {
  HOT_COFFEE = 'Hot Coffee',
  COLD_COFFEE = 'Cold Coffee',
  ESPRESSO = 'Espresso',
  SPECIALTY = 'Specialty',
  BEGINNER = 'Beginner',
  ADVANCED = 'Advanced',
  QUICK = 'Quick',
  TRADITIONAL = 'Traditional'
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  prepTime: string;
  categories: RecipeCategory[];
  imageUrl?: string;
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Pour Over',
    description: 'A clean and crisp cup of coffee made using the pour-over method.',
    ingredients: [
      '30g medium-ground coffee',
      '500ml hot water (95°C)',
      'Filter paper'
    ],
    instructions: [
      'Rinse filter paper with hot water',
      'Add ground coffee to filter',
      'Pour 60g water for blooming',
      'Wait 30 seconds',
      'Gradually pour remaining water in circular motion'
    ],
    difficulty: 'Medium',
    prepTime: '5 minutes',
    categories: [RecipeCategory.HOT_COFFEE, RecipeCategory.TRADITIONAL],
    imageUrl: '/images/image1.jpeg'
  },
  {
    id: '2',
    title: 'Creamy Cold Brew',
    description: 'Smooth and refreshing cold brew coffee perfect for hot days.',
    ingredients: [
      '100g coarse-ground coffee',
      '1L cold water',
      'Optional: milk and sweetener'
    ],
    instructions: [
      'Combine coffee and water in container',
      'Steep in refrigerator for 12-24 hours',
      'Strain through filter',
      'Dilute with water to taste',
      'Add milk and sweetener if desired'
    ],
    difficulty: 'Easy',
    prepTime: '12-24 hours',
    categories: [RecipeCategory.COLD_COFFEE, RecipeCategory.BEGINNER],
    imageUrl: '/images/image2.jpeg'
  },
  {
    id: '3',
    title: 'Espresso Martini',
    description: 'A sophisticated cocktail that combines freshly brewed espresso with vodka for the perfect pick-me-up.',
    ingredients: [
      '60ml vodka',
      '30ml fresh espresso',
      '30ml coffee liqueur',
      'Coffee beans for garnish'
    ],
    instructions: [
      'Brew fresh espresso and let it cool',
      'Fill shaker with ice',
      'Add vodka, espresso, and coffee liqueur',
      'Shake vigorously for 20 seconds',
      'Strain into chilled martini glass',
      'Garnish with coffee beans'
    ],
    difficulty: 'Medium',
    prepTime: '10 minutes',
    categories: [RecipeCategory.SPECIALTY, RecipeCategory.ESPRESSO],
    imageUrl: '/images/image3.jpeg'
  },
  {
    id: '4',
    title: 'Vietnamese Coffee',
    description: 'Strong drip coffee served with sweetened condensed milk, perfect for a hot day.',
    ingredients: [
      '2 tbsp dark roast coffee',
      '2 tbsp sweetened condensed milk',
      'Hot water',
      'Ice cubes'
    ],
    instructions: [
      'Add condensed milk to glass',
      'Place coffee grounds in phin filter',
      'Pour hot water and let drip',
      'Stir well to combine',
      'Add ice and serve'
    ],
    difficulty: 'Easy',
    prepTime: '15 minutes',
    categories: [RecipeCategory.COLD_COFFEE, RecipeCategory.TRADITIONAL],
    imageUrl: '/images/image4.jpeg'
  },
  {
    id: '5',
    title: 'Aeropress Coffee',
    description: 'A quick and clean brewing method that produces a smooth, rich cup of coffee.',
    ingredients: [
      '17g fine ground coffee',
      '250ml hot water (80°C)',
      'Paper filter',
      'Aeropress equipment'
    ],
    instructions: [
      'Place filter in cap and rinse',
      'Add coffee to chamber',
      'Add hot water and stir',
      'Attach cap with filter',
      'Press gently until complete',
      'Dilute with hot water if desired'
    ],
    difficulty: 'Easy',
    prepTime: '2 minutes',
    categories: [RecipeCategory.HOT_COFFEE, RecipeCategory.QUICK],
    imageUrl: '/images/image1.jpeg'
  },
  {
    id: '6',
    title: 'Caramel Macchiato',
    description: 'A sweet and creamy espresso drink layered with vanilla syrup, steamed milk, and caramel drizzle.',
    ingredients: [
      '2 shots espresso',
      '150ml steamed milk',
      '30ml vanilla syrup',
      'Caramel sauce for drizzle',
      'Milk foam'
    ],
    instructions: [
      'Add vanilla syrup to glass',
      'Pour steamed milk over syrup',
      'Add milk foam',
      'Slowly pour espresso shots through foam',
      'Finish with caramel drizzle in a crosshatch pattern'
    ],
    difficulty: 'Medium',
    prepTime: '5 minutes',
    categories: [RecipeCategory.ESPRESSO, RecipeCategory.SPECIALTY],
    imageUrl: '/images/image3.jpeg'
  },
  {
    id: '7',
    title: 'Affogato',
    description: 'Classic Italian dessert combining hot espresso and cold vanilla ice cream.',
    ingredients: [
      '1 shot espresso',
      '1 scoop vanilla ice cream',
      'Optional: chocolate shavings'
    ],
    instructions: [
      'Place scoop of ice cream in serving glass',
      'Brew fresh espresso shot',
      'Pour hot espresso over ice cream',
      'Garnish with chocolate shavings if desired',
      'Serve immediately'
    ],
    difficulty: 'Easy',
    prepTime: '3 minutes',
    categories: [RecipeCategory.ESPRESSO, RecipeCategory.QUICK],
    imageUrl: '/images/image2.jpeg'
  },
  {
    id: '8',
    title: 'Mocha Latte',
    description: 'Rich espresso combined with chocolate and steamed milk for a decadent coffee experience.',
    ingredients: [
      '2 shots espresso',
      '30ml chocolate sauce',
      '200ml steamed milk',
      'Whipped cream',
      'Cocoa powder for dusting'
    ],
    instructions: [
      'Add chocolate sauce to cup',
      'Pour hot espresso shots and stir',
      'Steam and froth milk',
      'Pour steamed milk over mixture',
      'Top with whipped cream',
      'Dust with cocoa powder'
    ],
    difficulty: 'Medium',
    prepTime: '7 minutes',
    categories: [RecipeCategory.ESPRESSO, RecipeCategory.SPECIALTY],
    imageUrl: '/images/image4.jpeg'
  }
]; 
import { PrismaClient, RecipeCategory } from '@prisma/client';

const prisma = new PrismaClient();

const blogs = [
  {
    title: "The Art of Pour Over Coffee",
    description: "Master the technique of pour-over brewing for the perfect cup",
    content: `
# The Art of Pour Over Coffee

Pour-over coffee is a manual brewing method that involves pouring hot water over ground coffee in a filter. Here's why it's special:

## Key Benefits
- **Complete control** over brewing variables
- *Better extraction* of coffee flavors
- Enhanced aroma and clarity

### Essential Equipment
1. Coffee dripper
2. Paper filters
3. Gooseneck kettle
4. Fresh coffee beans

> "The pour-over method is like meditation - it requires patience, precision, and presence."

For detailed instructions, visit our [brewing guide](/recipes).

\`\`\`
Water temperature: 195-205°F
Coffee-to-water ratio: 1:16
Total brew time: 3-4 minutes
\`\`\`
    `,
    author: "Coffee Master",
    publishDate: new Date("2024-03-15"),
    readTime: "5 min",
    imageUrl: "/images/image1.jpeg",
    tags: ["brewing", "technique", "pour-over"]
  },
  {
    title: "Understanding Coffee Roast Levels",
    description: "From light to dark: exploring different coffee roast profiles",
    content: `<article>
  <h2>Coffee Roast Levels Explained</h2>
  <p>Coffee roasting is an art that transforms green coffee beans into the aromatic beans we know and love.</p>
  
  <div class="roast-levels">
    <h3>Light Roast</h3>
    <ul>
      <li>Light brown color</li>
      <li>No oil on surface</li>
      <li>Higher acidity</li>
      <li>Origin flavors preserved</li>
    </ul>

    <h3>Medium Roast</h3>
    <ul>
      <li>Medium brown color</li>
      <li>Balanced flavor</li>
      <li>More body than light roast</li>
      <li>Popular choice for most</li>
    </ul>

    <h3>Dark Roast</h3>
    <ul>
      <li>Dark brown color</li>
      <li>Oily surface</li>
      <li>Bold, rich flavor</li>
      <li>Less acidity</li>
    </ul>
  </div>

  <p><strong>Pro Tip:</strong> The perfect roast is a personal choice that's influenced by your taste preferences.</p>
</article>`,
    author: "Roast Expert",
    publishDate: new Date("2024-03-10"),
    readTime: "7 min",
    imageUrl: "/images/image2.jpeg",
    tags: ["roasting", "coffee-beans", "education"]
  },
  {
    title: "Coffee Bean Storage Guide",
    description: "Learn how to properly store your coffee beans to maintain freshness",
    content: `
## The Science of Coffee Storage

Proper coffee storage is crucial for maintaining flavor and freshness. Here's what you need to know:

### Key Factors Affecting Coffee Freshness

1. **Temperature**
   - Store at room temperature
   - Avoid refrigeration
   - Keep away from heat sources

2. **Light Exposure**
   - Store in opaque containers
   - Avoid clear glass jars
   - Keep away from direct sunlight

3. **Air Contact**
   - Use airtight containers
   - Consider one-way valve bags
   - Avoid paper bags for long-term storage

### Best Practices

| Storage Method | Pros | Cons |
|----------------|------|------|
| Airtight container | Excellent seal, reusable | Initial cost |
| Valve bag | Releases CO2, blocks oxygen | Single-use |
| Mason jar | Readily available | Light exposure |

*Remember: Buy fresh beans in small quantities and use within 30 days of roasting.*

![Coffee Storage Tips](/images/image3.jpeg)

For more brewing tips, check out our [brewing guides](/guides).
    `,
    author: "Storage Specialist",
    publishDate: new Date("2024-03-20"),
    readTime: "6 min",
    imageUrl: "/images/image1.jpeg",
    tags: ["storage", "freshness", "education"]
  }
];

const recipes = [
  {
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

async function main() {
  for (const blog of blogs) {
    await prisma.blog.create({
      data: blog,
    });
  }

  for (const recipe of recipes) {
    await prisma.recipe.create({
      data: recipe,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
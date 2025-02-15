import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  {
    name: 'Ethiopian Yirgacheffe',
    description: 'A light roasted coffee with floral and citrus notes, perfect for pour-over brewing.',
    images: [
      'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe',
      'https://images.unsplash.com/photo-1587080413959-06b859fb107d',
      'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085'
    ],
    roastLevel: 'Light',
    origins: ['Yirgacheffe', 'Ethiopia'],
    process: 'Washed',
    flavor: ['Floral', 'Citrus', 'Bergamot'],
    category: 'beans',
    brewingMethods: ['PourOver', 'Filter', 'AeroPress', 'ColdBrew'],
    variants: [
      { weight: 250, price: 18.99, inStock: true },
      { weight: 500, price: 34.99, inStock: true },
      { weight: 1000, price: 64.99, inStock: false }
    ]
  },
  {
    name: 'Colombian Supremo',
    description: 'Medium roasted with rich chocolate and caramel notes, balanced acidity.',
    images: [
      'https://images.unsplash.com/photo-1559525839-b184a4d698c7',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd',
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf'
    ],
    roastLevel: 'Medium',
    origins: ['Huila', 'Colombia'],
    process: 'Natural',
    flavor: ['Chocolate', 'Caramel', 'Nutty'],
    category: 'beans',
    brewingMethods: ['Espresso', 'MokaPot', 'FrenchPress', 'PourOver'],
    variants: [
      { weight: 250, price: 16.99, inStock: true },
      { weight: 500, price: 31.99, inStock: true }
    ]
  },
  {
    name: 'Sumatra Mandheling',
    description: 'Dark roasted with earthy, spicy notes and full body. Perfect for espresso.',
    images: [
      'https://images.unsplash.com/photo-1559525839-b184a4d698c7',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd',
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085'
    ],
    roastLevel: 'Dark',
    origins: ['Mandheling', 'Sumatra'],
    process: 'WetHulled',
    flavor: ['Earthy', 'Spicy', 'Dark Chocolate'],
    category: 'beans',
    brewingMethods: ['Espresso', 'MokaPot', 'FrenchPress'],
    variants: [
      { weight: 250, price: 17.99, inStock: true },
      { weight: 500, price: 32.99, inStock: true }
    ]
  }
];

async function main() {
  console.log('Start seeding...');

  // Delete existing data
  await prisma.productVariant.deleteMany();
  await prisma.product.deleteMany();

  for (const product of products) {
    const { variants, ...productData } = product;
    
    const createdProduct = await prisma.product.create({
      data: productData
    });

    for (const variant of variants) {
      await prisma.productVariant.create({
        data: {
          ...variant,
          productId: createdProduct.id
        }
      });
    }
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 
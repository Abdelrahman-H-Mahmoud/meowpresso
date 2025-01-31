import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const stores = [
  {
    name: 'Downtown Coffee Hub',
    address: '123 Main Street, Downtown',
    phone: '(555) 123-4567',
    hours: JSON.stringify({
      monday: '7:00 AM - 8:00 PM',
      tuesday: '7:00 AM - 8:00 PM',
      wednesday: '7:00 AM - 8:00 PM',
      thursday: '7:00 AM - 8:00 PM',
      friday: '7:00 AM - 10:00 PM',
      saturday: '8:00 AM - 10:00 PM',
      sunday: '8:00 AM - 6:00 PM'
    }),
    website: 'https://downtownhub.coffee',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800',
    reviews: {
      create: [
        {
          rating: 5,
          comment: 'Best coffee in town! Love the atmosphere.',
          author: 'John Smith'
        },
        {
          rating: 4,
          comment: 'Great place to work from, fast wifi.',
          author: 'Sarah Wilson'
        }
      ]
    }
  },
  {
    name: 'Artisan Coffee Co.',
    address: '456 Oak Avenue, Westside',
    phone: '(555) 987-6543',
    hours: JSON.stringify({
      monday: '6:30 AM - 7:00 PM',
      tuesday: '6:30 AM - 7:00 PM',
      wednesday: '6:30 AM - 7:00 PM',
      thursday: '6:30 AM - 7:00 PM',
      friday: '6:30 AM - 9:00 PM',
      saturday: '7:00 AM - 9:00 PM',
      sunday: '7:00 AM - 5:00 PM'
    }),
    website: 'https://artisancoffee.co',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    reviews: {
      create: [
        {
          rating: 5,
          comment: 'Amazing artisan coffee and pastries!',
          author: 'Emma Davis'
        },
        {
          rating: 5,
          comment: 'The latte art is incredible here.',
          author: 'Michael Brown'
        },
        {
          rating: 4,
          comment: 'Cozy spot with great service.',
          author: 'Lisa Chen'
        }
      ]
    }
  },
  {
    name: 'The Coffee Lab',
    address: '789 Science Park, Innovation District',
    phone: '(555) 234-5678',
    hours: JSON.stringify({
      monday: '7:30 AM - 6:00 PM',
      tuesday: '7:30 AM - 6:00 PM',
      wednesday: '7:30 AM - 6:00 PM',
      thursday: '7:30 AM - 6:00 PM',
      friday: '7:30 AM - 7:00 PM',
      saturday: '8:00 AM - 7:00 PM',
      sunday: '8:00 AM - 5:00 PM'
    }),
    website: 'https://coffeelab.science',
    imageUrl: 'https://images.unsplash.com/photo-1497935586351-b7833e8f5576?w=800',
    reviews: {
      create: [
        { rating: 5, comment: 'Innovative coffee brewing methods!', author: 'Coffee Scientist' },
        { rating: 4, comment: 'Love their experimental blends', author: 'Lab Technician' }
      ]
    }
  },
  {
    name: 'Rustic Roasters',
    address: '321 Farmhouse Lane, Countryside',
    phone: '(555) 345-6789',
    hours: JSON.stringify({
      monday: '6:00 AM - 4:00 PM',
      tuesday: '6:00 AM - 4:00 PM',
      wednesday: '6:00 AM - 4:00 PM',
      thursday: '6:00 AM - 4:00 PM',
      friday: '6:00 AM - 6:00 PM',
      saturday: '7:00 AM - 6:00 PM',
      sunday: '7:00 AM - 3:00 PM'
    }),
    website: 'https://rusticroasters.com',
    imageUrl: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065?w=800',
    reviews: {
      create: [
        { rating: 5, comment: 'Best farm-to-cup coffee around!', author: 'Local Farmer' },
        { rating: 5, comment: 'Authentic rustic atmosphere', author: 'Country Living' }
      ]
    }
  },
  {
    name: 'Bytes & Beans',
    address: '456 Tech Avenue, Digital District',
    phone: '(555) 456-7890',
    hours: JSON.stringify({
      monday: '24 hours',
      tuesday: '24 hours',
      wednesday: '24 hours',
      thursday: '24 hours',
      friday: '24 hours',
      saturday: '24 hours',
      sunday: '24 hours'
    }),
    website: 'https://bytesandbeans.tech',
    imageUrl: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=800',
    reviews: {
      create: [
        { rating: 5, comment: 'Perfect for late night coding!', author: 'Tech Ninja' },
        { rating: 4, comment: 'Great WiFi and coffee combo', author: 'Digital Nomad' }
      ]
    }
  },
  {
    name: 'Coastal Coffee Co.',
    address: '789 Beach Road, Seaside',
    phone: '(555) 567-8901',
    hours: JSON.stringify({
      monday: '7:00 AM - 7:00 PM',
      tuesday: '7:00 AM - 7:00 PM',
      wednesday: '7:00 AM - 7:00 PM',
      thursday: '7:00 AM - 7:00 PM',
      friday: '7:00 AM - 9:00 PM',
      saturday: '6:00 AM - 9:00 PM',
      sunday: '6:00 AM - 8:00 PM'
    }),
    website: 'https://coastalcoffee.co',
    imageUrl: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=800',
    reviews: {
      create: [
        { rating: 5, comment: 'Amazing ocean view with great coffee!', author: 'Beach Lover' },
        { rating: 4, comment: 'Perfect sunset coffee spot', author: 'Surfer Dude' }
      ]
    }
  },
  {
    name: 'Mountain Brew',
    address: '234 Summit Ridge, Highland District',
    phone: '(555) 678-9012',
    hours: JSON.stringify({
      monday: '6:30 AM - 5:00 PM',
      tuesday: '6:30 AM - 5:00 PM',
      wednesday: '6:30 AM - 5:00 PM',
      thursday: '6:30 AM - 5:00 PM',
      friday: '6:30 AM - 6:00 PM',
      saturday: '6:00 AM - 6:00 PM',
      sunday: '6:00 AM - 4:00 PM'
    }),
    website: 'https://mountainbrew.coffee',
    imageUrl: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800',
    reviews: {
      create: [
        { rating: 5, comment: 'Best high-altitude coffee!', author: 'Mountain Climber' },
        { rating: 5, comment: 'Cozy spot with a view', author: 'Nature Enthusiast' }
      ]
    }
  },
  {
    name: 'The Book & Bean',
    address: '567 Library Lane, Cultural District',
    phone: '(555) 789-0123',
    hours: JSON.stringify({
      monday: '8:00 AM - 8:00 PM',
      tuesday: '8:00 AM - 8:00 PM',
      wednesday: '8:00 AM - 8:00 PM',
      thursday: '8:00 AM - 8:00 PM',
      friday: '8:00 AM - 10:00 PM',
      saturday: '9:00 AM - 10:00 PM',
      sunday: '9:00 AM - 6:00 PM'
    }),
    website: 'https://booknbean.read',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
    reviews: {
      create: [
        { rating: 5, comment: 'Perfect reading atmosphere!', author: 'Bookworm' },
        { rating: 4, comment: 'Great selection of books and coffee', author: 'Literature Lover' }
      ]
    }
  },
  {
    name: 'Zen Coffee Garden',
    address: '890 Peaceful Path, Meditation District',
    phone: '(555) 890-1234',
    hours: JSON.stringify({
      monday: '7:00 AM - 6:00 PM',
      tuesday: '7:00 AM - 6:00 PM',
      wednesday: '7:00 AM - 6:00 PM',
      thursday: '7:00 AM - 6:00 PM',
      friday: '7:00 AM - 6:00 PM',
      saturday: '8:00 AM - 5:00 PM',
      sunday: '8:00 AM - 5:00 PM'
    }),
    website: 'https://zencoffee.garden',
    imageUrl: 'https://images.unsplash.com/photo-1550048192-f5416a1f132a?w=800',
    reviews: {
      create: [
        { rating: 5, comment: 'Most peaceful coffee experience!', author: 'Zen Master' },
        { rating: 5, comment: 'Beautiful garden setting', author: 'Mindful Sipper' }
      ]
    }
  },
  {
    name: 'The Coffee Gallery',
    address: '123 Art Street, Museum Quarter',
    phone: '(555) 901-2345',
    hours: JSON.stringify({
      monday: 'Closed',
      tuesday: '10:00 AM - 6:00 PM',
      wednesday: '10:00 AM - 6:00 PM',
      thursday: '10:00 AM - 6:00 PM',
      friday: '10:00 AM - 8:00 PM',
      saturday: '9:00 AM - 8:00 PM',
      sunday: '9:00 AM - 5:00 PM'
    }),
    website: 'https://coffeegallery.art',
    imageUrl: 'https://images.unsplash.com/photo-1507915135761-41a0a222c709?w=800',
    reviews: {
      create: [
        { rating: 5, comment: 'Beautiful art and coffee!', author: 'Art Curator' },
        { rating: 4, comment: 'Inspiring atmosphere', author: 'Creative Soul' }
      ]
    }
  },
  {
    name: 'Sports & Sips',
    address: '456 Stadium Way, Athletic District',
    phone: '(555) 012-3456',
    hours: JSON.stringify({
      monday: '6:00 AM - 9:00 PM',
      tuesday: '6:00 AM - 9:00 PM',
      wednesday: '6:00 AM - 9:00 PM',
      thursday: '6:00 AM - 9:00 PM',
      friday: '6:00 AM - 10:00 PM',
      saturday: '7:00 AM - 10:00 PM',
      sunday: '7:00 AM - 8:00 PM'
    }),
    website: 'https://sportsandsips.fit',
    imageUrl: 'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?w=800',
    reviews: {
      create: [
        { rating: 5, comment: 'Great pre-workout coffee!', author: 'Fitness Freak' },
        { rating: 4, comment: 'Perfect post-game hangout', author: 'Team Captain' }
      ]
    }
  },
  {
    name: 'Jazz & Java',
    address: '789 Music Row, Entertainment District',
    phone: '(555) 123-4567',
    hours: JSON.stringify({
      monday: '10:00 AM - 12:00 AM',
      tuesday: '10:00 AM - 12:00 AM',
      wednesday: '10:00 AM - 12:00 AM',
      thursday: '10:00 AM - 2:00 AM',
      friday: '10:00 AM - 3:00 AM',
      saturday: '10:00 AM - 3:00 AM',
      sunday: '10:00 AM - 10:00 PM'
    }),
    website: 'https://jazzjava.music',
    imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800',
    reviews: {
      create: [
        { rating: 5, comment: 'Amazing live music and coffee!', author: 'Jazz Cat' },
        { rating: 5, comment: 'Best late-night coffee spot', author: 'Night Owl' }
      ]
    }
  }
];

async function main() {
  console.log('Start seeding...');
  
  for (const store of stores) {
    const result = await prisma.store.create({
      data: store,
      include: {
        reviews: true
      }
    });
    console.log(`Created store: ${result.name} with ${result.reviews.length} reviews`);
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
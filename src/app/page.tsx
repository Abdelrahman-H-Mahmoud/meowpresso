'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Coffee, Book, ChefHat, Cat } from 'lucide-react';

const features = [
  {
    icon: <Coffee className="w-full h-full" />,
    title: "Coffee Recipes",
    description: "Discover a variety of coffee brewing methods and recipes.",
    href: "/recipes",
    color: "bg-brown-600/10 text-brown-600 dark:bg-accent-500/10 dark:text-accent-400"
  },
  {
    icon: <Book className="w-full h-full" />,
    title: "Coffee Blog",
    description: "Learn about coffee culture, beans, and brewing techniques.",
    href: "/blogs",
    color: "bg-brown-600/10 text-brown-600 dark:bg-accent-500/10 dark:text-accent-400"
  },
  {
    icon: <ChefHat className="w-full h-full" />,
    title: "Brewing Guides",
    description: "Step-by-step guides for brewing the perfect cup.",
    href: "/recipes",
    color: "bg-brown-600/10 text-brown-600 dark:bg-accent-500/10 dark:text-accent-400"
  }
];

export default function Home() {
  return (
    <div className="relative -mt-20">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80"
            alt="Coffee Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <Cat className="w-12 h-12 text-white" />
                <h2 className="text-2xl font-bold text-white">Meowpresso</h2>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Purrfect Your Coffee Making Skills
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Join our feline baristas in exploring the art of coffee making. From whisker-licking good recipes to tail-raising brewing techniques.
              </p>
              <Link 
                href="/recipes"
                className="inline-flex items-center px-6 py-3 bg-brown-600 hover:bg-brown-700 dark:bg-accent-500 dark:hover:bg-accent-600 text-white rounded-lg transition-colors group"
              >
                Start Brewing
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-72 h-72 md:w-96 md:h-96 relative"
            >
              <Image
                src="/images/logo.png"
                alt="Meowpresso Cat Mascot"
                width={400}
                height={400}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-coffee-dark dark:text-white mb-4">
              Everything You Need to Brew Perfect Coffee
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From beginner-friendly guides to advanced techniques, we've got everything you need to elevate your coffee game.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="h-full"
              >
                <Link href={feature.href} className="h-full block">
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className={`w-14 h-14 rounded-lg ${feature.color} flex items-center justify-center mb-4 mx-auto`}>
                      <div className="w-7 h-7">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-coffee-dark dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brown-600/5 dark:bg-accent-500/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-coffee-dark dark:text-white mb-4">
              Ready to Start Your Coffee Journey?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community of coffee enthusiasts and discover the perfect brew for every moment.
            </p>
            <Link 
              href="/recipes"
              className="inline-flex items-center px-6 py-3 bg-brown-600 hover:bg-brown-700 dark:bg-accent-500 dark:hover:bg-accent-600 text-white rounded-lg transition-colors group"
            >
              Explore Recipes
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


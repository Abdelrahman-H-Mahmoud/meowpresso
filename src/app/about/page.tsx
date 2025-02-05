'use client';

import { Coffee, Cat, Code, Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Abdelrahman-H-Mahmoud', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/abdelrahman93_', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/abdelrahman-hussien-88779b94/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:abdelrahman.h.mahmoued@gmail.com', label: 'Email' },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200"
              alt="Coffee and Coding"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Coffee, Cats & Code
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <Coffee className="w-5 h-5" />
                  <span>Coffee Enthusiast</span>
                </motion.span>
                <span className="text-white/60">•</span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <Cat className="w-5 h-5" />
                  <span>Cat Parent</span>
                </motion.span>
                <span className="text-white/60">•</span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <Code className="w-5 h-5" />
                  <span>Developer</span>
                </motion.span>
              </div>
            </motion.div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="prose dark:prose-invert max-w-none"
            >
              <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                {`Hey there! I'm a software developer with a deep passion for two things: 
                crafting elegant code and discovering exceptional coffee experiences. 
                When I'm not debugging code, you'll find me exploring local coffee shops 
                with my trusty laptop, accompanied by thoughts of my beloved cat Blue waiting at home.`
                }
              </p>
            </motion.div>

            {/* Journey Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-brown-50 dark:bg-accent-400/10 rounded-xl p-6"
              >
                <h2 className="text-2xl font-bold text-coffee-dark dark:text-white mb-4">
                  Why Coffee Store Explorer?
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {`This project was born from my journey of discovering unique coffee spots
                  and wanting to share these gems with fellow coffee enthusiasts. Each store
                  featured here has been personally visited, each cup carefully savored.`}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-brown-50 dark:bg-accent-400/10 rounded-xl p-6"
              >
                <h2 className="text-2xl font-bold text-coffee-dark dark:text-white mb-4">
                  My Coffee Journey
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {`From simple espressos to my favorite cortados, my coffee adventure has led me
                  through countless cafes. I believe that great coffee isn't just about the beans—it's
                  about the atmosphere and community.`}
                </p>
              </motion.div>
            </div>

            {/* Fun Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-inner"
            >
              <h3 className="text-xl font-bold text-coffee-dark dark:text-white mb-6">
                Fun Facts About Me
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brown-50 dark:bg-accent-400/10 rounded-lg">
                    <Coffee className="w-6 h-6 text-brown-600 dark:text-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-coffee-dark dark:text-white">Favorite Coffee</h4>
                    <p className="text-gray-600 dark:text-gray-300">Cortado - the perfect balance of espresso and silky milk</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brown-50 dark:bg-accent-400/10 rounded-lg">
                    <Cat className="w-6 h-6 text-brown-600 dark:text-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-coffee-dark dark:text-white">Feline Friend</h4>
                    <p className="text-gray-600 dark:text-gray-300">Blue - The most purr-fect coding companion</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brown-50 dark:bg-accent-400/10 rounded-lg">
                    <Code className="w-6 h-6 text-brown-600 dark:text-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-coffee-dark dark:text-white">Tech Stack</h4>
                    <p className="text-gray-600 dark:text-gray-300">Next.js, TypeScript, and a shot of espresso</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex justify-center gap-6 pt-6"
            >
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-brown-50 dark:bg-accent-400/10 rounded-lg hover:bg-brown-100 dark:hover:bg-accent-400/20 transition-colors"
                >
                  <social.icon className="w-6 h-6 text-brown-600 dark:text-accent-400" />
                </Link>
              ))}
            </motion.div>

            <div className="flex justify-center pt-8">
              <p className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                Made with <Heart className="w-5 h-5 text-red-500" /> and ☕
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 
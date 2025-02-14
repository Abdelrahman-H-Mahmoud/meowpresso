'use client';

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { Github, Twitter, Linkedin, Coffee } from 'lucide-react';
import { Steam } from '@/components/icons/Steam';
import Link from 'next/link';
import { useEffect } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  index: number;
  socials?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const COFFEE_BEAN_POSITIONS = [
  { top: '10%', left: '10%', rotate: '45deg' },
  { top: '20%', left: '80%', rotate: '120deg' },
  { top: '40%', left: '15%', rotate: '90deg' },
  { top: '60%', left: '85%', rotate: '180deg' },
  { top: '80%', left: '20%', rotate: '135deg' },
  { top: '85%', left: '75%', rotate: '60deg' },
  { top: '30%', left: '45%', rotate: '30deg' },
  { top: '70%', left: '35%', rotate: '150deg' },
  { top: '15%', left: '65%', rotate: '75deg' },
  { top: '45%', left: '90%', rotate: '105deg' },
  { top: '90%', left: '45%', rotate: '15deg' },
  { top: '50%', left: '70%', rotate: '165deg' },
];

export function TeamMember({ name, role, image, bio, socials, index }: TeamMemberProps) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.5 }
    });
  }, [controls, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      {/* Coffee bean background pattern */}
      <div className="absolute inset-0 -z-10">
        {COFFEE_BEAN_POSITIONS.map((position, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute"
            style={{
              top: position.top,
              left: position.left,
            }}
          >
            <Coffee
              size={24}
              className="text-brown-600 dark:text-accent-500"
              style={{
                transform: `rotate(${position.rotate})`,
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-xl border border-white/20 dark:border-gray-700/30">
        {/* Steam animation */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [-10, -20, -10],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
              className="absolute left-1/2"
              style={{ transform: `translateX(${(i - 1) * 15}px)` }}
            >
              <Steam className="w-6 h-6 text-brown-600/50 dark:text-accent-400/50" />
            </motion.div>
          ))}
        </div>

        {/* Main content */}
        <div className="relative">
          {/* Image container */}
          <div className="relative h-80 overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center object-top transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-75"
              priority
            />
            <motion.div
              initial={false}
              animate={{ height: "100%" }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100"
            />

            {/* Hover content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white/90 text-sm leading-relaxed mb-6"
              >
                {bio}
              </motion.p>

              {/* Social links */}
              {socials && (
                <div className="flex gap-4">
                  {Object.entries(socials).map(([platform, url]) => (
                    <motion.div
                      key={platform}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
                      >
                        {platform === 'github' && <Github size={20} className="text-white" />}
                        {platform === 'twitter' && <Twitter size={20} className="text-white" />}
                        {platform === 'linkedin' && <Linkedin size={20} className="text-white" />}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Name and role */}
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-gradient-to-b from-brown-500 to-brown-600 dark:from-accent-400 dark:to-accent-500 rounded-full" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {name}
                </h3>
                <p className="text-brown-600 dark:text-accent-400 font-medium">
                  {role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 
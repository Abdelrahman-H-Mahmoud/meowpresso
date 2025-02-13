'use client';

import { signIn } from 'next-auth/react';
import { Coffee } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Provider = {
  id: string;
  name: string;
  icon: string | React.ComponentType<{ className: string }>;
  color: string;
  textColor: string;
  borderColor: string;
}
const providers: Provider[] = [
  {
    id: 'google',
    name: 'Google',
    icon: '/icons/google.svg',
    color: 'bg-white hover:bg-gray-50',
    textColor: 'text-gray-800',
    borderColor: 'border-gray-300',
  },
  // {
  //   id: 'github',
  //   name: 'GitHub',
  //   icon: Github,
  //   color: 'bg-[#24292F] hover:bg-[#24292F]/90',
  //   textColor: 'text-white',
  //   borderColor: 'border-transparent',
  // },
];

interface SignInContentProps {
  onSignIn?: () => void;
}

export function SignInContent({ onSignIn }: SignInContentProps) {
  const handleSignIn = async (providerId: string) => {
    await signIn(providerId, { callbackUrl: '/' });
    onSignIn?.();
  };

  return (
    <div className="p-8 space-y-8">
      {/* Logo and Title */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="mx-auto w-fit"
        >
          <Coffee className="mx-auto h-12 w-12 text-brown-600 dark:text-accent-400" />
        </motion.div>
        <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Sign in to share your coffee experiences
        </p>
      </div>

      {/* Providers */}
      <div className="space-y-4">
        {providers.map((provider, index) => (
          <motion.button
            key={provider.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => handleSignIn(provider.id)}
            className={`w-full flex items-center justify-center gap-3 px-4 py-3 border ${provider.borderColor} 
              rounded-lg text-sm font-medium ${provider.color} ${provider.textColor}
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500 dark:focus:ring-accent-400
              transition-all duration-200`}
          >
            {typeof provider.icon === 'string' ? (
              <Image
                src={provider.icon}
                alt={provider.name}
                width={20}
                height={20}
              />
            ) : (
              <provider.icon className="w-5 h-5" />
            )}
            Continue with {provider.name}
          </motion.button>
        ))}
      </div>

      {/* Terms and Privacy */}
      <p className="text-center text-xs text-gray-600 dark:text-gray-400">
        By signing in, you agree to our{' '}
        <Link href="/terms" className="underline hover:text-brown-600 dark:hover:text-accent-400">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="/privacy" className="underline hover:text-brown-600 dark:hover:text-accent-400">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
} 
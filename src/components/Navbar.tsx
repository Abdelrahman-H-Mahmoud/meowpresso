"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from '@/components/ThemeToggle';
import { useState } from 'react';
import { Logo } from '@/components/Logo';
import { useSession, signOut } from 'next-auth/react';
import { Menu, X, User } from 'lucide-react';
import Image from 'next/image';
import { Modal } from '@/components/ui/Modal';
import { SignInContent } from '@/components/auth/SignInContent';
import { LoginButton } from '@/components/auth/LoginButton';
import { LogoutButton } from '@/components/auth/LogoutButton';
import { CartButton } from '@/components/CartButton';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const getFirstName = (name: string | null | undefined) => {
    if (!name) return '';
    return name.split(' ')[0];
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Logo size="sm" />

            {/* Desktop navigation */}
            <nav className="hidden md:flex flex-1 items-center justify-center gap-2 mx-8">
              {[
                { path: '/recipes', label: 'Recipes' },
                { path: '/products', label: 'Shop' },
                { path: '/blogs', label: 'Blog' },
                { path: '/stores', label: 'Stores' },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                    ${isActive(path)
                      ? 'bg-brown-600 dark:bg-accent-500 text-white'
                      : 'text-gray-600 hover:bg-brown-50 dark:hover:bg-accent-400/10 hover:text-brown-600 dark:hover:text-accent-400'
                    }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <CartButton />
                <ThemeToggle />
                {status === 'authenticated' && session?.user ? (
                  <div className="flex items-center gap-3">
                    <Link href="/profile" className="flex items-center gap-2 hover:opacity-80">
                      {session.user.image ? (
                        <Image
                          src={session.user.image}
                          alt={session.user.name || 'Profile'}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      ) : (
                        <User className="w-8 h-8 p-1.5 rounded-full bg-gray-100 dark:bg-gray-800" />
                      )}
                    </Link>
                    <LogoutButton onClick={() => signOut()} />
                  </div>
                ) : (
                  <LoginButton onClick={() => setIsLoginModalOpen(true)} />
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <CartButton />
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden ${
              isMenuOpen ? 'block' : 'hidden'
            } py-4 space-y-4`}
          >
            {status === 'authenticated' && session?.user && (
              <div className="px-4 py-2 flex items-center gap-3 border-b border-gray-200 dark:border-gray-700">
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || 'Profile'}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <User className="w-8 h-8 p-1 rounded-full bg-gray-100 dark:bg-gray-800" />
                )}
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {getFirstName(session.user.name)}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {session.user.email}
                  </p>
                </div>
              </div>
            )}

            {[
              { path: '/recipes', label: 'Recipes' },
              { path: '/products', label: 'Shop' },
              { path: '/blogs', label: 'Blog' },
              { path: '/stores', label: 'Stores' },
              ...(status === 'authenticated' ? [{ path: '/profile', label: 'Profile' }] : []),
            ].map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${isActive(path)
                    ? 'bg-brown-600 dark:bg-accent-500 text-white'
                    : 'text-gray-600 hover:bg-brown-50 dark:hover:bg-accent-400/10 hover:text-brown-600 dark:hover:text-accent-400'
                  }`}
              >
                {label}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              {status === 'authenticated' && session?.user ? (
                <LogoutButton onClick={() => signOut()} />
              ) : (
                <LoginButton onClick={() => setIsLoginModalOpen(true)} />
              )}
            </div>
          </div>
        </div>
      </header>

      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      >
        <SignInContent onSignIn={() => setIsLoginModalOpen(false)} />
      </Modal>
    </>
  );
} 
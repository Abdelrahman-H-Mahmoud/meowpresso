'use client';

import Link from 'next/link';
import { User } from 'lucide-react';
import Image from 'next/image';
import { Session } from 'next-auth';
import { NavItem } from '@/config/navigation';
import { LoginButton } from '@/components/auth/LoginButton';
import { LogoutButton } from '@/components/auth/LogoutButton';

interface MobileMenuProps {
  isOpen: boolean;
  items: NavItem[];
  session: Session | null;
  status: string;
  isActive: (path: string) => boolean;
  onItemClick: () => void;
  onLoginClick: () => void;
  onLogoutClick: () => void;
}

export function MobileMenu({
  isOpen,
  items,
  session,
  status,
  isActive,
  onItemClick,
  onLoginClick,
  onLogoutClick,
}: MobileMenuProps) {
  const getFirstName = (name: string | null | undefined) => {
    if (!name) return '';
    return name.split(' ')[0];
  };

  return (
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} py-4 space-y-4`}>
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

      {items.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          onClick={onItemClick}
          className={`block px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            isActive(item.path)
              ? 'bg-brown-600 dark:bg-accent-500 text-white'
              : 'text-gray-600 hover:bg-brown-50 dark:hover:bg-accent-400/10 hover:text-brown-600 dark:hover:text-accent-400'
          }`}
        >
          {item.label}
        </Link>
      ))}

      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        {status === 'authenticated' && session?.user ? (
          <LogoutButton onClick={onLogoutClick} />
        ) : (
          <LoginButton onClick={onLoginClick} />
        )}
      </div>
    </div>
  );
} 
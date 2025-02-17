'use client';

import { User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Session } from 'next-auth';
import { LoginButton } from '@/components/auth/LoginButton';
import { LogoutButton } from '@/components/auth/LogoutButton';

interface UserMenuProps {
  session: Session | null;
  status: string;
  onLoginClick: () => void;
  onLogoutClick: () => void;
}

export function UserMenu({ session, status, onLoginClick, onLogoutClick }: UserMenuProps) {
  if (status === 'authenticated' && session?.user) {
    return (
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
        <LogoutButton onClick={onLogoutClick} />
      </div>
    );
  }

  return <LoginButton onClick={onLoginClick} />;
} 
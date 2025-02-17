'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { CartButton } from '@/components/CartButton';
import { WaitlistCounter } from '@/components/WaitlistCounter';
import { Modal } from '@/components/ui/Modal';
import { SignInContent } from '@/components/auth/SignInContent';
import { navigationItems, NavItem } from '@/config/navigation';
import { DesktopNav } from './DesktopNav';
import { UserMenu } from './UserMenu';
import { MobileMenu } from './MobileMenu';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const visibleNavItems = navigationItems.filter(item => {
    if (!item.isVisible) return false;
    if (item.requireAuth && status !== 'authenticated') return false;
    if (item.hideIfAuth && status === 'authenticated') return false;
    return true;
  });

  const handleNavAction = (item: NavItem) => {
    if (item.type === 'action') {
      switch (item.path) {
        case '/brew':
          // Handle brew action
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Logo size="sm" />

            <DesktopNav
              items={visibleNavItems}
              isActive={isActive}
              onActionClick={handleNavAction}
            />

            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-4">
              <WaitlistCounter />
              <div className="flex items-center gap-2">
                <CartButton />
                <ThemeToggle />
                <UserMenu
                  session={session}
                  status={status}
                  onLoginClick={() => setIsLoginModalOpen(true)}
                  onLogoutClick={() => signOut()}
                />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-3">
              <WaitlistCounter />
              <CartButton />
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          <MobileMenu
            isOpen={isMenuOpen}
            items={visibleNavItems}
            session={session}
            status={status}
            isActive={isActive}
            onItemClick={() => setIsMenuOpen(false)}
            onLoginClick={() => setIsLoginModalOpen(true)}
            onLogoutClick={() => signOut()}
          />
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
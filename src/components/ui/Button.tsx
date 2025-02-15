import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(
          'px-4 py-2 rounded-lg font-medium transition-all duration-200',
          {
            'bg-brown-600 hover:bg-brown-700 dark:bg-accent-500 dark:hover:bg-accent-600 text-white disabled:opacity-50 disabled:cursor-not-allowed': variant === 'primary',
            'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white': variant === 'secondary',
            'border border-gray-200 dark:border-gray-700 hover:border-brown-600 dark:hover:border-accent-500 text-gray-900 dark:text-white': variant === 'outline',
          },
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button'; 
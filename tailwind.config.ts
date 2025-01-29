import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        accent: {
          50: '#FFF5E9',
          100: '#FFE4C4',
          200: '#FFD09B',
          300: '#FFBC72',
          400: '#FFA849',
          500: '#FF9420',
          600: '#FF8000',
          700: '#CC6600',
          800: '#994D00',
          900: '#663300',
        },
        mocha: {
          50: '#F9F5F2',
          100: '#E8D6CC',
          200: '#D4B4A5',
          300: '#C19280',
          400: '#AD7059',
          500: '#995C45',
          600: '#804D3B',
          700: '#663D2F',
          800: '#4D2E23',
          900: '#331F18',
        },
        'coffee-dark': '#1A0F0A',
        'coffee-light': '#B87A4B',
      },
      typography: ({ theme }: { theme: any }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray.700'),
            '--tw-prose-headings': theme('colors.gray.900'),
            '--tw-prose-links': theme('colors.brown.600'),
            '--tw-prose-bold': theme('colors.gray.900'),
            color: 'var(--tw-prose-body)',
            maxWidth: 'none',
            'h1, h2, h3': {
              color: 'var(--tw-prose-headings)',
              fontWeight: '700',
            },
            a: {
              color: 'var(--tw-prose-links)',
              '&:hover': {
                color: theme('colors.brown.700'),
              },
            },
            'ul > li::marker': {
              color: theme('colors.brown.500'),
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': theme('colors.gray.300'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-links': theme('colors.accent.400'),
            '--tw-prose-bold': theme('colors.white'),
            a: {
              color: theme('colors.accent.400'),
              '&:hover': {
                color: theme('colors.accent.300'),
              },
            },
            'ul > li::marker': {
              color: theme('colors.accent.500'),
            },
          },
        },
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;

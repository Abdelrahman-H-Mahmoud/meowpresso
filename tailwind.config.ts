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
          50: '#FFF8F3',
          100: '#FFE6D5',
          200: '#FFD4B8',
          300: '#FFC29A',
          400: '#FFB07D',
          500: '#FF9E5F',
          600: '#FF8C42',
          700: '#E67A35',
          800: '#CC6828',
          900: '#B3561B',
        },
        accent: {
          50: '#FFF3E0',
          100: '#FFE0B2',
          200: '#FFCC80',
          300: '#FFB74D',
          400: '#FFA726',
          500: '#FF9800',
          600: '#FB8C00',
          700: '#F57C00',
          800: '#EF6C00',
          900: '#E65100',
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
        'coffee-dark': '#2A1810',
        'coffee-light': '#D4A574',
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

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
      },
      typography: ({ theme }) => ({
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
            '--tw-prose-links': theme('colors.brown.400'),
            '--tw-prose-bold': theme('colors.white'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;

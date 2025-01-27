/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#FAF6F1',
          600: '#4A2C2A',
          700: '#664B32',
        },
        coffee: {
          light: '#6B4F4F',
          dark: '#4A2C2A',
        },
        accent: {
          400: '#818CF8',  // indigo-400
          500: '#6366F1',  // indigo-500
          600: '#4F46E5',  // indigo-600
        }
      }
    }
  }
} 
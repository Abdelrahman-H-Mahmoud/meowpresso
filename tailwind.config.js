module.exports = {
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
        }
      }
    }
  }
} 
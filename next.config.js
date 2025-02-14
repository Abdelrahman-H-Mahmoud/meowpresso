/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    domains: [
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'github.com',
      'avatars.githubusercontent.com'
    ],
  },
};

module.exports = nextConfig; 
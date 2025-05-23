/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optional: turn this off if you're no longer using TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },

  // Optional: turn this off if you're no longer using ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
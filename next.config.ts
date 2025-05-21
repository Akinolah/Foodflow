
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // It's recommended to address TypeScript errors rather than ignoring them.
    ignoreBuildErrors: false,
  },
  eslint: {
    // It's recommended to address ESLint issues rather than ignoring them.
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

export default nextConfig;
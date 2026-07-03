/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/static-assets/:path*',
        destination: 'http://localhost:3000/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost', port: '3000' },
    ],
  },
};

export default nextConfig;

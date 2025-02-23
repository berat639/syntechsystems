/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  output: 'export',

  // Eğer images kullanıyorsanız
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages için standalone output
  output: 'standalone',

  // Node.js API'larını kullanabilmek için
  experimental: {
    serverActions: true,
  },

  // Yönlendirmeler için (404 sayfası dahil)
  async redirects() {
    return [];
  },

  // Webpack yapılandırması
  webpack: (config, { isServer }) => {
    // Client-side Node.js modülleri için fallback
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        child_process: false,
        crypto: false,
        stream: false,
        util: false,
        https: false,
        http: false,
        zlib: false,
        buffer: false
      };
    }
    return config;
  },

  // CORS ayarları
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,POST' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
    ];
  },

  // Statik sayfa optimizasyonu
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
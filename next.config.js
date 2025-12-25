// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  
  // ADD THIS SECTION:
  headers: async () => {
    return [
      {
        source: '/:path*.html',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/html; charset=utf-8',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

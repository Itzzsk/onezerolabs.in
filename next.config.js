// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // REMOVE THIS LINE: output: 'export',  ❌ DELETE THIS
  
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  
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

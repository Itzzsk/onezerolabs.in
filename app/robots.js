// app/robots.js

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Example of blocking a private folder
    },
    sitemap: 'https://onezerolabs.in/sitemap.xml',
  }
}
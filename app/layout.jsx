import '../styles/globals.css'
import Navbar from '../components/Navbar'
import SmoothScroll from '../components/SmoothScroll'

export const metadata = {
  metadataBase: new URL('https://onezerolabs.in'),
  title: {
    default: 'OneZeroLabs | A Digital Product Studio',
    template: '%s | OneZeroLabs'
  },
  description: 'OneZeroLabs builds modern web and mobile apps with a focus on AI, brand-driven design, and custom software solutions.',
  keywords: [
    'web development india', 
    'mobile app development', 
    'full-stack development', 
    'OneZeroLabs', 
    'AI platforms', 
    'UI/UX design', 
    'Next.js developers'
  ],
  authors: [{ name: 'OneZeroLabs Team', url: 'https://onezerolabs.in' }],
  creator: 'OneZeroLabs',
  publisher: 'OneZeroLabs',
  
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en-IN': '/en-IN',
    },
  },

  // 1. ICONS & MANIFEST
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png', // Matches your file
  },
  manifest: '/site.webmanifest', // Matches your file

  // 2. SOCIAL MEDIA CARDS
  openGraph: {
    title: 'OneZeroLabs | A Digital Product Studio',
    description: 'OneZeroLabs builds modern web and mobile apps with a focus on AI, brand-driven design, and custom software solutions.',
    url: 'https://onezerolabs.in',
    siteName: 'OneZeroLabs',
    type: 'website',
    locale: 'en_IN', 
    images: [
      {
        url: '/og-image.jpg', // Make sure this file exists in public/
        width: 1200,
        height: 630,
        alt: 'OneZeroLabs Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneZeroLabs | Full-Stack Development Solutions',
    description: 'Professional web and mobile app development services.',
    images: ['/og-image.jpg'], 
  },

  // 3. ROBOTS (Google Settings)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // 4. GEO TAGS (Local SEO)
  other: {
    "geo.region": "IN-KA", 
    "geo.placename": "Bengaluru",
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  colorScheme: 'dark',
}

export default function RootLayout({ children }) {
  // JSON-LD for LinkedIn
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'OneZeroLabs',
    url: 'https://onezerolabs.in',
    logo: 'https://onezerolabs.in/logo.png', 
    image: 'https://onezerolabs.in/og-image.jpg',
    description: 'Professional web and mobile app development services specializing in AI and UI/UX.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka'
    },
    sameAs: [
      'https://www.linkedin.com/posts/onezerolabs_onezerolabs-aryavarh-techathon2025-activity-7392221582292676609-SlUw?utm_source=share&utm_medium=member_android&rcm=ACoAAFMjgesBc61s3MsKWqbxXT1uxtVdCHCuTWc',
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro"
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased bg-black text-white">
        <SmoothScroll>
          <Navbar />
          <main id="main-content" role="main">
            {children}
          </main>
        </SmoothScroll>
        {/* 2. GOOGLE ANALYTICS CODE ADDED HERE */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0ZBFRVQH9Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0ZBFRVQH9Z');
          `}
        </Script>
      </body>
    </html>
  )
}

import '../styles/globals.css'
import Navbar from '../components/Navbar'
import SmoothScroll from '../components/SmoothScroll'
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL('https://onezerolabs.in'),
  title: {
    default: 'OneZeroLabs | EdTech Platform Development | LMS Solutions India',
    template: '%s | OneZeroLabs'
  },
  description: 'OneZeroLabs - Award-winning EdTech developer specializing in LMS platforms, learning management systems, and AI-powered educational software. Custom web and mobile apps with modern design. Based in Bangalore, India.',
  keywords: [
    'edtech development india',
    'LMS development',
    'learning management system',
    'educational platform development',
    'edtech software solutions',
    'college attendance system',
    'student management software',
    'online learning platform',
    'virtual classroom software',
    'education technology',
    'web development india', 
    'mobile app development', 
    'full-stack development', 
    'OneZeroLabs', 
    'AI platforms', 
    'UI/UX design', 
    'Next.js developers',
    'custom software development',
    'startup development india',
    'AI integration services',
    'web development bangalore',
    'app development near me',
    'digital agency india',
    'react developers',
    'node.js development'
  ],
  authors: [{ name: 'OneZeroLabs Team', url: 'https://onezerolabs.in' }],
  creator: 'OneZeroLabs',
  publisher: 'OneZeroLabs',
  
  alternates: {
    canonical: 'https://onezerolabs.in',
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',

  openGraph: {
    title: 'OneZeroLabs | EdTech Platform & LMS Development',
    description: 'Expert EdTech developers building learning management systems and educational software solutions for colleges and institutions.',
    url: 'https://onezerolabs.in',
    siteName: 'OneZeroLabs',
    type: 'website',
    locale: 'en_IN', 
    images: [
      {
        url: 'https://onezerolabs.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OneZeroLabs - EdTech & LMS Platform Development',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@onezerolabs',
    creator: '@onezerolabs',
    title: 'OneZeroLabs | LMS & EdTech Solutions',
    description: 'Expert EdTech development - LMS platforms, learning management systems, and educational software.',
    images: ['https://onezerolabs.in/og-image.jpg'], 
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'noodp': false,
    },
  },
  
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bangalore, Karnataka',
    'og:type': 'business.business',
    'business:contact_data:street_address': 'Bangalore, Karnataka',
    'business:contact_data:locality': 'Bangalore',
    'business:contact_data:country_name': 'India',
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
  // Local Business Schema - EdTech Focused
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://onezerolabs.in/#organization',
    name: 'OneZeroLabs',
    alternateName: 'OneZeroLabs EdTech',
    url: 'https://onezerolabs.in',
    logo: {
      '@type': 'ImageObject',
      url: 'https://onezerolabs.in/logo.png',
      width: 250,
      height: 60,
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://onezerolabs.in/og-image.jpg',
      width: 1200,
      height: 630,
    },
    description: 'OneZeroLabs is a leading EdTech development studio specializing in LMS platforms, learning management systems, and educational software. We have built attendance tracking systems, student management platforms, and AI-powered educational solutions for colleges and institutions across India.',
    telephone: '+91-7483729869',
    email: 'onezerolabs82@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bangalore',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
      postalCode: '560001',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'India',
      },
      {
        '@type': 'State',
        name: 'Karnataka',
      },
    ],
   
    
    sameAs: [
      'https://www.linkedin.com/company/onezerolabs',
    
    ],
    knowsAbout: [
      'EdTech Development',
      'LMS Platforms',
      'Learning Management Systems',
      'Educational Software',
      'Student Attendance Systems',
      'Mobile App Development',
      'Full-Stack Development',
      'Artificial Intelligence',
      'UI/UX Design',
      'React Development',
      'Node.js Development',
      'Next.js Development',
      'College Management Software',
      'Online Learning Platforms',
    ],
    contact: [
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        telephone: '+91-7483729869',
        email: 'onezerolabs82@gmail.com',
      },
    ],
  }

  // Organization Schema - EdTech Focused
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://onezerolabs.in/#org',
    name: 'OneZeroLabs',
    alternateName: 'OneZeroLabs EdTech',
    url: 'https://onezerolabs.in',
    logo: 'https://onezerolabs.in/logo.png',
    foundingDate: '2024',
    foundingLocation: 'Bangalore, Karnataka, India',
    description: 'Leading EdTech development studio specializing in LMS platforms and educational software solutions.',
    sameAs: [
      'https://www.linkedin.com/company/onezerolabs',
      'https://twitter.com/onezerolabs',
      'https://github.com/onezerolabs',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+91-7483729869',
      email: 'onezerolabs82@gmail.com',
    },
  }

  // Service Schema - EdTech Services
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'OneZeroLabs',
    hasOfferingDescription: [
      {
        '@type': 'Service',
        name: 'LMS Development',
        description: 'Custom Learning Management System (LMS) development with attendance tracking, course management, student progress monitoring, and admin dashboards for colleges and educational institutions.',
        serviceArea: {
          '@type': 'Country',
          name: 'India',
        },
        provider: {
          '@type': 'Organization',
          name: 'OneZeroLabs',
        },
      },
      {
        '@type': 'Service',
        name: 'EdTech Platform Development',
        description: 'End-to-end educational technology platform development including online learning platforms, virtual classrooms, student management systems, and course delivery platforms.',
        serviceArea: {
          '@type': 'Country',
          name: 'India',
        },
        provider: {
          '@type': 'Organization',
          name: 'OneZeroLabs',
        },
      },
      {
        '@type': 'Service',
        name: 'AI-Powered Educational Software',
        description: 'Integration of Artificial Intelligence and machine learning into educational platforms for personalized learning, predictive analytics, and intelligent tutoring systems.',
        serviceArea: {
          '@type': 'Country',
          name: 'India',
        },
        provider: {
          '@type': 'Organization',
          name: 'OneZeroLabs',
        },
      },
      {
        '@type': 'Service',
        name: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications for education including student apps, teacher portals, and institutional management tools.',
        serviceArea: {
          '@type': 'Country',
          name: 'India',
        },
        provider: {
          '@type': 'Organization',
          name: 'OneZeroLabs',
        },
      },
      {
        '@type': 'Service',
        name: 'UI/UX Design',
        description: 'Modern, user-centric interface and experience design for educational platforms, ensuring accessibility and engagement for students and educators.',
        serviceArea: {
          '@type': 'Country',
          name: 'India',
        },
        provider: {
          '@type': 'Organization',
          name: 'OneZeroLabs',
        },
      },
    ],
  }

  // FAQSchema for EdTech - Helps with featured snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an LMS platform?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An LMS (Learning Management System) is a software platform that helps educational institutions manage courses, students, and learning content. OneZeroLabs builds custom LMS solutions with attendance tracking, grade management, and interactive learning features.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does OneZeroLabs develop EdTech platforms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, OneZeroLabs specializes in EdTech development. We have successfully built multiple LMS platforms, attendance systems, student management solutions, and online learning platforms for colleges and educational institutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you integrate AI into educational software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we integrate AI and machine learning into educational platforms for features like personalized learning paths, intelligent tutoring, predictive analytics, and automated grading systems.',
        },
      },
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Essential Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="OneZeroLabs" />
        <meta name="application-name" content="OneZeroLabs" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        
        {/* Preconnect & DNS Prefetch for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Font Stylesheet */}
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro"
        />
        
        {/* Structured Data - JSON-LD Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          suppressHydrationWarning
        />
      </head>
      <body suppressHydrationWarning className="antialiased bg-black text-white">
        <SmoothScroll>
          <Navbar />
          <main id="main-content" role="main">
            {children}
          </main>
        </SmoothScroll>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0ZBFRVQH9Z"
          strategy="afterInteractive"
        />
        <Script 
          id="google-analytics" 
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0ZBFRVQH9Z', {
                'page_path': window.location.pathname,
                'page_title': document.title,
                'anonymize_ip': true,
              });
            `,
          }}
        />

        {/* Breadcrumb Schema (Optional - uncomment when needed) */}
        {/* 
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://onezerolabs.in'
              }
            ]
          })}}
          suppressHydrationWarning
        />
        */}
      </body>
    </html>
  )
}

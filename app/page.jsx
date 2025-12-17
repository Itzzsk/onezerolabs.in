'use client'

import React from 'react'
import { Hero } from '@/components/ui/hero-1'
import { Syne } from 'next/font/google'

// 1. FIXED: Capitalize the import name


import VisionSection from '@/components/VisionSection'
import ContactSection from '@/components/ContactSection'
import LuminaShowcase from '@/components/LuminaShowcase' 
import ScrollBlurTextAppearSection from '@/components/ScrollBlurTextAppearSection' 

// Configure the font
const syne = Syne({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen flex flex-col">
      
      {/* 1. Hero Section */}
      <div className={`relative z-10 ${syne.className}`}>
        <Hero 
          eyebrow="A Modern Digital Atelier"
          title="Your partner in crafted design and intelligent development."
          subtitle="Thoughtfully designed systems built for speed, clarity, and scale."
          ctaLabel="Get Started"
          ctaHref="/contact"
        />
      </div>

      {/* 2. Text Reveal & Position Section */}
      <div className="relative z-10">
        <VisionSection />
        
        {/* 2. FIXED: Capitalize the component tag */}
    
      </div>
      
      {/* 3. Service Showcase */}
      <div id="showcase" className="relative z-30 bg-black">
        <LuminaShowcase />
        <ScrollBlurTextAppearSection/>
      </div>

      {/* 4. Contact Section */}
      <div className="relative z-20 bg-white">
        <div className="w-full h-[1px] bg-gray-200" />
        <ContactSection />
      </div>

    </main>
  )
}

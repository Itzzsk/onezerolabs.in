'use client'

import Hero from '@/components/Hero'
import ScrollBlurTextAppearSection from '@/components/ScrollBlurTextAppearSection'
import ContactSection from '@/components/ContactSection'

// 🛑 FIX: Changed from { LuminaShowcase } to the default import LuminaShowcase.
// This resolves the error because the component file likely uses 'export default'.
import LuminaShowcase from '@/components/LuminaShowcase' 

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen flex flex-col">
      
      {/* 1. Hero Section (z-10) */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* 2. Text Reveal (z-10) */}
      <div className="relative z-10">
        <ScrollBlurTextAppearSection />
      </div>
      
      {/* 3. Service Showcase (z-30) */}
      <div className="relative z-30 bg-black">
        <LuminaShowcase/>
      </div>

      {/* 4. Contact Section (z-20) */}
      <div className="relative z-20 bg-white">
        <div className="w-full h-[1px] bg-gray-200" />
        <ContactSection />
      </div>

    </main>
  )
}
'use client'


import LuminaShowcase from '@/components/LuminaShowcase'

import ContactSection from '@/components/ContactSection'
export default function ServicesPage() {
  return (
    <main className="relative bg-black overflow-x-hidden">
      {/* Services Grid */}

      {/* Contact Section - Half Screen */}


      {/* Service Sections Flow */}
      <div className="relative z-10">
        <LuminaShowcase />

        <ContactSection />
      </div>
  
    </main>
  )
}
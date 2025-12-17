'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Layers, Cpu, Globe, Zap, Search, Fingerprint } from 'lucide-react'

// --- 1. DATA: UPDATED SERVICES (Now with 6 items) ---
const services = [
  {
    id: "01",
    title: "Web Development",
    description: "Full-stack architecture using Next.js, React, and Edge Computing.",
    icon: Globe,
  },
  {
    id: "02",
    title: "Gen AI & LLM",
    description: "Custom RAG pipelines, fine-tuning, and autonomous agent workflows.",
    icon: Cpu,
  },
  {
    id: "03",
    title: "SaaS Development",
    description: "Scalable multi-tenant infrastructure and secure cloud orchestration.",
    icon: Zap,
  },
  {
    id: "04",
    title: "Next-Gen Interface",
    description: "Immersive spatial design, WebGL interactions, and motion graphics.",
    icon: Layers,
  },
  {
    id: "05",
    title: "Search Branding",
    description: "Technical optimization, programmatic content, and organic growth.",
    icon: Search,
  },
  {
    id: "06",
    title: "Graphic Design",
    description: "Visual identity, brand systems, and high-fidelity digital assets.",
    icon: Fingerprint,
  }
]

// --- 2. ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Creates the sequential 'cascade' effect
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

// --- 3. PILLAR CARD COMPONENT ---
const PillarCard = ({ service }) => {
  return (
    <motion.div 
      variants={cardVariants}
      // --- HOVER EFFECT: WHITE SHADOW ---
      whileHover={{ 
        y: -8,
        boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.1)",
        borderColor: "rgba(255, 255, 255, 0.3)",
      }}
      className="relative flex flex-col justify-between border border-white/10 bg-white/[0.03] p-6 md:p-8 min-h-[200px] lg:min-h-[350px] overflow-hidden rounded-3xl md:rounded-[2rem] transition-colors duration-300 group cursor-pointer"
    >
        {/* --- Top Accent Line --- */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        
        {/* Top: Header */}
        <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono text-neutral-500 group-hover:text-white/80 transition-colors">
                   {service.id}
                </span>
                <ArrowUpRight className="text-white/40 group-hover:text-white transition-colors" size={20} />
            </div>
            
            <div className="w-8 h-8 md:w-10 md:h-10 mb-6 text-white group-hover:scale-110 transition-transform duration-500">
                <service.icon size={32} strokeWidth={1} />
            </div>

            <h3 
                className="text-xl md:text-2xl lg:text-3xl font-bold text-white uppercase tracking-tight lg:writing-vertical-rl"
                style={{ fontFamily: "'Syne', sans-serif" }}
            >
                {service.title}
            </h3>
        </div>

        {/* Bottom: Description */}
        <div className="relative z-10 mt-4 md:mt-0">
            <div className="hidden lg:block h-[1px] w-full bg-white/10 mb-4 group-hover:bg-white/20 transition-colors" />
            <p 
                className="text-neutral-400 text-sm font-light leading-relaxed group-hover:text-neutral-200 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
            >
                {service.description}
            </p>
        </div>
    </motion.div>
  )
}

// --- 4. MAIN LAYOUT ---
export default function VisionSection() {
  return (
    <section className="bg-black w-full min-h-screen py-16 md:py-24 relative flex flex-col justify-center overflow-hidden">
      {/* Font Injection */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Syne:wght@400;500;600;700;800&display=swap');
        
        @media (min-width: 1024px) {
          .lg\:writing-vertical-rl {
            writing-mode: vertical-rl;
          }
        }
      `}} />

      <div className="max-w-[1600px] mx-auto px-4 md:px-12 relative z-10 w-full">
        
        {/* Header Block */}
        <div className="mb-12 md:mb-20 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tighter"
                style={{ fontFamily: "'Syne', sans-serif" }}
            >
                Our Services
            </motion.h2>
    
        </div>

        {/* --- SCROLL-ANIMATED GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
            {services.map((service, index) => (
                <PillarCard key={index} service={service} />
            ))}
        </motion.div>

      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

    </section>
  )
}

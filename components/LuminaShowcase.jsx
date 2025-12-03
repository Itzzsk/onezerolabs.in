'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

// --- 1. FIXED & BRIGHT BRAND LOGOS ---

const ReactLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
    </g>
  </svg>
)

const NextJSLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4 14.243L8.68 8H7v8h1.333V9.757L15.32 16H17V8h-1.333v6.243z" fill="white"/>
  </svg>
)

const MongoDBLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <path d="M12.15 22c-.6 0-1.7-.5-1.7-1.3 0-.1 0-.3.1-.4l.1-.2c2.8-5.3 5-9.3 5.3-12.7.2-2.3-1.1-4.1-3.6-4.1-2.6 0-4.2 2-4.2 4.6 0 2.2 1.3 6.3 4.1 14.1z" fill="#00ED64"/>
    <path d="M11.65 22c.6 0 1.7-.5 1.7-1.3 0-.1 0-.3-.1-.4l-.1-.2C10.35 14.8 8.15 10.8 7.85 7.4c-.2-2.3 1.1-4.1 3.6-4.1 2.6 0 4.2 2 4.2 4.6 0 2.2-1.3 6.3-4.1 14.1z" fill="#00684A"/>
  </svg>
)

const FramerLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
     <path d="M4 0h16v8h-8l8 8h-8v8l-8-8h8v-8h-8z" fill="white"/>
  </svg>
)

const ChatGPTLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <path d="M22.3 9.8c.3-1.4.1-2.9-.6-4.2-1.3-2.6-4.4-3.7-7-2.4-.6-.4-1.2-.6-1.9-.7C12 2 11.1 2 10.2 2.2c-1.4-.4-2.8-.2-4.2.5C3.4 4 2.3 7.1 3.6 9.7c-1.1 1.9-.9 4.4.6 6.1 1.5 1.7 4 2.3 6.1 1.5.6.4 1.2.6 1.9.7.8.1 1.7.1 2.5-.1 1.4.4 2.8.2 4.2-.5 2.6-1.3 3.7-4.4 2.4-7 1.1-1.9.9-4.4-.6-6.1-.2-.2-.4-.4-.6-.6zM5.5 8c.7-1.3 2.3-1.8 3.7-1.1l.3.2V9l-3 1.7c-.5-1-.5-2.1-.1-3.2l-1.4.5zm5.3 10.9c-.8.1-1.6-.1-2.3-.5l-.3-.2v-1.9l3-1.7c.5 1 .5 2.1.1 3.2l-.5 1.1zm6-4.3l-3 1.7v-3.4l3-1.7v3.4zM9 13.7v-3.4l3-1.7v3.4l-3 1.7zm1.1-7.8l1.4-.8c.8-.1 1.6.1 2.3.5l.3.2v1.9l-3 1.7c-.5-1-.5-2.1-.1-3.2zm6.7 4.5l-1.4.8c-.8.1-1.6-.1-2.3-.5l-.3-.2V9.6l3-1.7c.5 1 .5 2.1.1 3.2z" fill="#10A37F"/>
  </svg>
)

const NodeJSLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <path d="M12 2l-9.5 5.5v11L12 24l9.5-5.5v-11L12 2zm1 16.5v-3.8l3.4-2v-2.3l-3.4 2v-2l5.3-3.1v5.1l-5.3 3.1zm-6-2v-5.1l5.3-3.1v2l-3.4 2v2.3l3.4 2v3.8l-5.3-3.1z" fill="#339933"/>
  </svg>
)

const PythonLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <path d="M12 0c-3.1 0-4.6 1.4-4.6 3v2.5h4.8v.8H5.9c-2.4 0-4.2 1.3-4.2 3.8 0 2.2 1.6 3.6 3.9 3.6h1.2v-1.6c0-1.8 1.1-2.6 2.7-2.6h5.8V3c0-1.7-1.4-3-3.3-3zm-1.8 1.8h.9v.9h-.9V1.8z" fill="#3776AB"/>
    <path d="M18.1 13.9c2.4 0 4.2-1.3 4.2-3.8 0-2.2-1.6-3.6-3.9-3.6h-1.2v1.6c0 1.8-1.1 2.6-2.7 2.6H8.7v6.5c0 1.7 1.4 3 3.3 3 3.1 0 4.6-1.4 4.6-3v-2.5h-4.8v-.8h6.3zm-3.4 7.5h.9v.9h-.9v-.9z" fill="#FFD43B"/>
  </svg>
)

const MySQLLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
     <path d="M12 1.5C6 1.5 1.5 6 1.5 12S6 22.5 12 22.5 22.5 18 22.5 12 18 1.5 12 1.5zm6.5 12.8c0 .8-.7 1.5-1.5 1.5h-10c-.8 0-1.5-.7-1.5-1.5v-3c0-.8.7-1.5 1.5-1.5h10c.8 0 1.5.7 1.5 1.5v3z" fill="#00758F"/>
     <path d="M8 15.8h1.5l1.2-3.8 1.2 3.8H13.5l1.5-5.2h-1.5l-.8 3.5-1.1-3.5H10.5L9.4 14l-.8-3.5H7l1 5.3z" fill="#F29111"/>
  </svg>
)

const GitHubLogo = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
     <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const FigmaLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <path d="M12 12c0 1.657 1.343 3 3 3v-6c-1.657 0-3 1.343-3 3z" fill="#1ABCFE"/>
    <path d="M6 12c0-1.657 1.343-3 3-3h3v6H9c-1.657 0-3-1.343-3-3z" fill="#A259FF"/>
    <path d="M6 6c0-1.657 1.343-3 3-3h6v6H9c-1.657 0-3-1.343-3-3z" fill="#F24E1E"/>
    <path d="M15 3h6c1.657 0 3 1.343 3 3s-1.343 3-3 3h-6V3z" transform="translate(-6)" fill="#FF7262"/>
    <path d="M9 15c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3v-3H9z" fill="#0ACF83"/>
  </svg>
)

// --- DATA ---
const services = [
  {
    id: "01",
    title: "Web Development",
    description: "Full-stack architecture using Next.js, React, and Edge Computing.",
  },
  {
    id: "02",
    title: "Gen AI & LLM",
    description: "Custom RAG pipelines, fine-tuning, and autonomous agent workflows.",
  },
  {
    id: "03",
    title: "SaaS Development",
    description: "Scalable multi-tenant infrastructure and secure cloud orchestration.",
  },
  {
    id: "04",
    title: "Next-Gen Interface",
    description: "Immersive spatial design, WebGL interactions, and motion graphics.",
  },
  {
    id: "05",
    title: "Search Branding",
    description: "Technical optimization, programmatic content, and organic growth.",
  }
]

// Updated Stack Items with Real Logos
const stackItems = [
  { name: "React", Component: ReactLogo },
  { name: "Next.js", Component: NextJSLogo },
  { name: "MongoDB", Component: MongoDBLogo },
  { name: "Framer", Component: FramerLogo },

  { name: "Node.js", Component: NodeJSLogo },
  { name: "Python", Component: PythonLogo },

  { name: "GitHub", Component: GitHubLogo },
  { name: "Figma", Component: FigmaLogo },
]

// 2. COMPONENT: Service Row
const ServiceRow = ({ service, isActive, onHover, onLeave }) => {
  return (
    <motion.div
      layout
      onClick={onHover} 
      onMouseEnter={onHover} 
      onMouseLeave={onLeave}
      className={`relative w-full border-t border-white/15 overflow-hidden cursor-pointer group transition-colors duration-500
        ${isActive ? 'bg-[#111]' : 'bg-black hover:bg-[#080808]'}
      `}
      initial={{ height: 100 }}
      animate={{ height: isActive ? "auto" : 140 }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
    >
      <div className="relative z-10 w-full p-6 md:p-10 flex flex-col">
        
        {/* --- HEADER ROW --- */}
        <div className="flex items-center justify-between mb-6 md:mb-0">
          <div className="flex items-center gap-4 md:gap-12">
             <h2 className={`text-3xl md:text-6xl font-['Syne'] font-bold uppercase tracking-tight transition-all duration-300 ${isActive ? 'text-white translate-x-2' : 'text-white/50'}`}>
                {service.title}
             </h2>
          </div>
          
          <motion.div 
            animate={{ rotate: isActive ? 45 : 0, opacity: isActive ? 1 : 0.5 }}
            className="text-white"
          >
             <ArrowUpRight size={24} className="md:w-8 md:h-8" />
          </motion.div>
        </div>

        {/* --- REVEAL CONTENT --- */}
        <AnimatePresence>
            {isActive && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="pt-4 md:pt-8 pb-4"
                >
                    <div className="max-w-2xl">
                        <p className="text-white/80 font-['Syne'] text-xl md:text-2xl font-medium leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      {isActive && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent pointer-events-none" />
      )}
    </motion.div>
  )
}

// 3. COMPONENT: Infinite Marquee with Real SVG Logos
const TechMarquee = () => {
  return (
    <div className="w-full overflow-hidden border-t border-white/15 bg-black py-8 relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      
      <motion.div 
        className="flex items-center gap-20 whitespace-nowrap"
        animate={{ x: "-50%" }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 40 
        }}
        style={{ width: "max-content" }}
      >
        {/* Tripled list for smooth loop */}
        {[...stackItems, ...stackItems, ...stackItems].map((item, i) => (
          <div key={i} className="flex items-center gap-4 group cursor-pointer">
            {/* Logo Component - Removed Grayscale, Added full visibility */}
            <div className="transition-transform duration-300 group-hover:scale-110">
                <item.Component />
            </div>
            {/* Label */}
            <span className="text-xl font-['Syne'] font-bold uppercase tracking-wide text-white/40 group-hover:text-white transition-colors duration-300">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// 4. MAIN PAGE
export default function BalancedKineticList() {
  const [activeId, setActiveId] = useState(null)

  return (
    <section className="bg-black w-full min-h-screen flex flex-col justify-between">
      
      <div className="py-20 md:py-32 px-4 md:px-16 flex-grow flex flex-col justify-center">
        {/* HEADER */}
        <div className="mb-16 md:mb-24 border-b border-white/20 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <h1 className="text-white text-5xl md:text-8xl font-['Syne'] font-extrabold uppercase tracking-tighter leading-[0.9]">
              Core <br /> Services
          </h1>
        </div>

        {/* THE LIST */}
        <div className="w-full">
          {services.map((service) => (
              <ServiceRow 
                  key={service.id}
                  service={service}
                  isActive={activeId === service.id}
                  onHover={() => setActiveId(service.id)}
                  onLeave={() => setActiveId(null)}
              />
          ))}
          <div className="w-full h-[1px] bg-white/15" />
        </div>
      </div>

      {/* FOOTER MARQUEE */}
      <TechMarquee />
      
    </section>
  )
}
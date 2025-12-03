'use client'

import React, { useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import { ArrowDown, GripHorizontal, Plus } from 'lucide-react'
const FontLoader = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
    .font-syne { font-family: 'Syne', sans-serif; }
  `}} />
)
// ----------------------------------------------------------------------
// 1. FOOTER MARQUEE (Half-Hidden)
// ----------------------------------------------------------------------
const FooterMarquee = () => {
    const images = [
        "graphic designs/Picsart_25-03-16_18-07-44-231.jpg", // Abstract Fluid
        "graphic designs/Picsart_24-12-15_18-01-42-142.jpg", // Space
        "graphic designs/Picsart_25-03-09_17-30-39-120.jpg", // Fashion
        "graphic designs/Picsart_25-01-04_14-20-24-939.jpg", // Portrait
        "graphic designs/Picsart_25-03-01_19-03-26-625.jpg", // Tech
    ]

    return (
        <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none overflow-hidden h-32 md:h-48 flex items-end">
            {/* Gradient Mask */}
            <div 
                className="w-full h-full flex items-end"
                style={{ 
                    maskImage: "linear-gradient(to top, black 20%, transparent 100%)", 
                    WebkitMaskImage: "linear-gradient(to top, black 20%, transparent 100%)" 
                }}
            >
                <motion.div 
                    className="flex gap-4 md:gap-8 px-4 md:px-8 pb-4 md:pb-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    {[...images, ...images].map((src, i) => (
                        <div 
                            key={i} 
                            className="relative w-40 md:w-64 h-24 md:h-40 shrink-0 overflow-hidden grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                        >
                            <img src={src} alt="Project" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

// ----------------------------------------------------------------------
// 2. MAIN COMPONENT
// ----------------------------------------------------------------------

export default function Hero() {
  const [isDragging, setIsDragging] = useState(false)

  // Vertical Mouse Position (0 to 1), initialized at center (0.5)
  const mouseY = useMotionValue(0.5)
  
  // Smooth spring for the split line
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 30 })

  // Clamp the split (15% - 85%) so text isn't crushed
  const clampedY = useTransform(smoothY, [0, 1], [15, 85])
  
  // Dynamic heights
  const heightTop = useMotionTemplate`${clampedY}%`
  const heightBottom = useTransform(clampedY, (val) => `${100 - val}%`)

  // Handle Mouse Move (Desktop - Follows Cursor)
  const handleMouseMove = (e) => {
    const y = e.clientY / window.innerHeight
    mouseY.set(y)
  }

  // Handle Touch Move (Mobile - Only when dragging)
  const handleTouchMove = (e) => {
    if (!isDragging) return
    // Prevent dragging from jumping if user scrolls page
    const y = e.touches[0].clientY / window.innerHeight
    mouseY.set(y)
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
      // Removed 'touch-none' from here so the page can scroll normally
      className="relative w-full h-[100dvh] overflow-hidden font-sans cursor-row-resize bg-black"
    >
      
      {/* =========================================
          TOP ZONE (WHITE / "ONE")
         ========================================= */}
      <motion.div 
        style={{ height: heightTop }}
        className="relative w-full bg-[#f2f2f2] text-black overflow-hidden flex flex-col items-center justify-end pb-2"
      >
          {/* Subtle Grid Texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />

          {/* Top Header */}
          

          {/* Main Text */}
          <div className="relative z-10 mb-2 md:mb-8 pointer-events-none select-none">
              <h1 className="text-[20vw] md:text-[13vw] leading-[0.75] font-black tracking-tighter text-neutral-900">
                  ONEZERO
              </h1>
          </div>
      </motion.div>


      {/* =========================================
          DIVIDER LINE (THE HANDLE)
         ========================================= */}
      <motion.div 
         className="absolute w-full h-px bg-transparent z-50 flex items-center justify-center pointer-events-none"
         style={{ top: heightTop }} 
      >
          {/* The Visual Line */}
          <div className="w-full h-[2px] bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.5)]" />

          {/* The Handle Icon - Touch Trigger */}
          <div 
            onTouchStart={() => setIsDragging(true)}
            // Added 'touch-none' here so dragging the handle doesn't scroll the page
            className="absolute px-3 py-1 md:px-4 md:py-1 bg-indigo-600 rounded-full flex items-center gap-2 text-white shadow-lg pointer-events-auto cursor-grab active:cursor-grabbing touch-none"
          >
              <GripHorizontal size={14} />
              <span className="text-[9px] font-bold uppercase tracking-widest hidden sm:block">
                  Drag
              </span>
          </div>
      </motion.div>


      {/* =========================================
          BOTTOM ZONE (BLACK / "ZERO")
         ========================================= */}
      <motion.div 
        style={{ height: heightBottom }}
        className="relative w-full bg-[#080808] text-white overflow-hidden flex flex-col items-center justify-start pt-2"
      >
          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

          {/* Main Text */}
          <div className="relative z-10 mt-2 md:mt-8 mix-blend-difference pointer-events-none select-none">
              <h1 className="text-[20vw] md:text-[13vw] leading-[0.75] font-black tracking-tighter text-white">
                  LABS
              </h1>
          </div>

          {/* Subtext */}
          <div className="mt-4 md:mt-12 flex items-center gap-4 text-neutral-500 z-10">
              <div className="h-px w-4 md:w-8 bg-neutral-700" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-['Syne']">
                  Innovate.Build.Grow
              </span>
              <div className="h-px w-4 md:w-8 bg-neutral-700" />
          </div>

          {/* Footer Marquee */}
          <FooterMarquee />

          {/* Bottom Corners */}
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-30 text-neutral-600">
              <Plus size={20} className="md:w-6 md:h-6" strokeWidth={1} />
          </div>
          
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-30 pointer-events-auto">
              <button className="flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors group">
                  <span className="text-[10px] uppercase tracking-widest writing-vertical-rl hidden sm:block">Scroll</span>
                  <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </button>
          </div>

      </motion.div>

    </section>
  )
}
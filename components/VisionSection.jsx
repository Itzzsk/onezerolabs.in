"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function VisionSection() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Gentle parallax effect for the whole block
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  // Staggered Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  }

  return (
    <section 
      ref={containerRef}
      // Reduced padding: py-12 md:py-24 (was py-24 md:py-36)
      className="relative w-full py-12 md:py-24 bg-black text-white px-6 md:px-24 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Font Injection */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Syne:wght@700;800&display=swap');
      `}} />

      <motion.div 
        style={{ y }} // Keep the parallax y-movement
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl relative z-10 text-center"
      >
        {/* Simple Minimalist Label - Centered with symmetrical lines */}
        <motion.div 
          variants={itemVariants} 
          className="mb-6 flex items-center justify-center gap-4"
        >
          <div className="h-[1px] w-12 bg-white/50" />
          <span 
            className="text-sm font-medium tracking-[0.2em] text-neutral-400 uppercase" 
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Philosophy
          </span>
          <div className="h-[1px] w-12 bg-white/50" />
        </motion.div>

        {/* Main Typography */}
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-8"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          We don't just build websites. <br />
          <span className="text-neutral-600 transition-colors duration-500 hover:text-white cursor-default">
            We architect digital dominance.
          </span>
        </motion.h2>

        {/* Clean Narrative - Centered */}
        <motion.div 
          variants={itemVariants}
          className="space-y-6 text-lg md:text-xl text-neutral-400 leading-relaxed font-light max-w-2xl mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <p>
            In a world saturated with noise, clarity is the ultimate competitive advantage. 
            <strong className="text-white font-medium"> OneZeroLabs</strong> bridges the gap between raw engineering and human emotion.
          </p>
          <p>
            We strip away the non-essential to reveal the powerful. Every pixel serves a purpose, 
            and every line of code drives performance.
          </p>
        </motion.div>

      </motion.div>
      
      {/* Very Subtle Background Texture */}
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-white/5 to-transparent opacity-20 pointer-events-none" />

    </section>
  )
}
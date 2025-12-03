'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const images = [
  "img1.jpeg",
  "img2.jpeg",
  "img3.jpeg",
  "img4.jpeg",
  "img5.jpeg",
  "img6.jpeg",
]

export default function TwoColumnLoom() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    damping: 20,
    stiffness: 100
  })

  // --- TRANSFORMS ---
  const yUp = useTransform(smoothProgress, [0, 1], ['0%', '-40%'])
  const yDown = useTransform(smoothProgress, [0, 1], ['-40%', '0%'])

  return (
    <section ref={containerRef} className="relative h-[350vh] bg-[#050505] text-white font-['Outfit']">
      
      {/* INJECT FONTS:
         1. Syne (for the big artistic headers)
         2. Outfit (for clean UI text)
      */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&family=Syne:wght@400;700;800&display=swap');
      `}</style>

      {/* STICKY VIEWPORT */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        
        {/* HEADER GAP */}
        <header className="w-full px-4 md:px-12 py-10 border-b border-white/10 bg-[#050505]/90 backdrop-blur-sm z-30 relative">
          
          <div className="max-w-4xl">
            <h1 className="text-2xl md:text-5xl font-medium leading-[1.1] tracking-tight text-white font-['Syne']">
              We craft modern Websites, <br className="hidden md:block"/> intuitive Designs
              <br />
              <span className="text-white/50 font-['Outfit'] font-light text-xl md:text-3xl mt-2 block leading-snug">
                and scalable Digital Solutions that help Businesses grow and stand out.
              </span>
            </h1>
          </div>

          <div className="mt-8">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-black hover:bg-white hover:border-white transition-all duration-300 cursor-pointer">
              <span className="text-lg md:text-xl">↓</span>
            </div>
          </div>

        </header>

        {/* CONTENT AREA */}
        <div className="flex-1 relative overflow-hidden">
            
            {/* --- CENTER TEXT OVERLAY --- */}
            <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none mix-blend-difference">
                <div className="flex flex-col items-center select-none">
                  {/* Using 'Syne' font for a unique, wide, artistic look */}
                  <h2 className="text-[7vw] md:text-[6vw] leading-[0.85] font-['Syne'] font-extrabold tracking-tighter text-white text-center">
                    REDESIGNING
                  </h2>
                  <h2 className="text-[7vw] md:text-[6vw] leading-[0.85] font-['Syne'] font-extrabold tracking-tighter text-white text-center italic opacity-80">
                    TOMORROW
                  </h2>
                </div>
            </div>

            {/* --- RESPONSIVE GRID --- */}
            <div className="w-full h-[150%] grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 px-3 md:px-6 -mt-20">
                <Column images={images} y={yUp} />
                <Column images={[...images].reverse()} y={yDown} />
                <div className="hidden md:block">
                    <Column images={images} y={yUp} />
                </div>
            </div>
            
            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent z-20" />
        </div>

      </div>
    </section>
  )
}

function Column({ images, y }) {
  return (
    <motion.div style={{ y }} className="flex flex-col gap-3 md:gap-6 relative">
      {[...images, ...images, ...images].map((src, i) => (
        <div key={i} className="relative group w-full aspect-[3/4] md:aspect-[2/3] overflow-hidden rounded-md md:rounded-xl bg-white/5">
            <img 
                src={src} 
                alt="Showcase"
                className="w-full h-full object-cover scale-110 saturate-[0] contrast-[1.1] group-hover:saturate-[1.1] group-hover:scale-100 transition-all duration-700 ease-out" 
            />
            {/* Subtle shiny overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-purple-500/0 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-hard-light" />
        </div>
      ))}
    </motion.div>
  )
}
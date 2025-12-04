'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion'
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react'

// ----------------------------------------------------------------------
// 0. FONT LOADER
// ----------------------------------------------------------------------
const FontLoader = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
    .font-syne { font-family: 'Syne', sans-serif; }
  `}} />
)

// ----------------------------------------------------------------------
// 1. UTILS
// ----------------------------------------------------------------------
const wrap = (min, max, v) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

const VelocityText = ({ children, baseVelocity = 5, className = "" }) => {
  const baseX = useMotionValue(0)
  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000)
    baseX.set(baseX.get() + moveBy)
  })
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap select-none w-full pointer-events-none">
      <motion.div className={`flex flex-nowrap ${className}`} style={{ x }}>
        {[...Array(8)].map((_, i) => (
            <span key={i} className="block mr-[10vw]">{children}</span>
        ))}
      </motion.div>
    </div>
  )
}

// ----------------------------------------------------------------------
// 2. MAIN COMPONENT
// ----------------------------------------------------------------------
export default function ContactSection() {
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section className="relative w-full bg-white overflow-hidden z-40 py-12 md:py-20">
      
      {/* Inject Font */}
      <FontLoader />

      {/* --- BACKGROUND MARQUEE --- */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-[0.03] pointer-events-none select-none">
         <VelocityText baseVelocity={1.5} className="text-[20vw] md:text-[10vw] font-black font-syne leading-none text-black">
            GET IN TOUCH — SAY HELLO — 
         </VelocityText>
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1000px] mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12">
        
        {/* LEFT: Heading & CTA */}
        <div className="max-w-xl w-full flex flex-col items-start text-left">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full text-left"
          >
             <span className="block text-neutral-400 font-mono text-[10px] uppercase tracking-widest mb-4 text-left">
                // Start a conversation
             </span>
             
             <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black font-syne uppercase tracking-tighter leading-[0.9] mb-6 text-left">
               Let's build <br />
               <span className="text-neutral-300">The Future.</span>
             </h2>
          </motion.div>

          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInUp}
             transition={{ delay: 0.2 }}
             className="w-full text-left"
          >
            <p className="text-black/60 text-sm md:text-base font-mono mb-8 max-w-md leading-relaxed text-left">
              Ready to deploy your next project? Get in touch with us today and let's create something architecturally significant.
            </p>

            <Link href="/contact" className="inline-block">
              <button className="group relative overflow-hidden px-6 py-3 md:px-8 md:py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#D1F349] hover:text-black transition-all duration-300 flex items-center gap-3">
                <span className="relative z-10">Get in Touch</span>
                <div className="relative z-10 p-1 bg-white/20 rounded-full group-hover:bg-black/10 transition-colors">
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-[#D1F349] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT: Email & Social Links */}
        <motion.div 
            className="flex flex-col items-start w-full lg:w-auto mt-6 lg:mt-0 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
        >
            <p className="text-neutral-400 text-[10px] font-mono uppercase tracking-widest mb-2 text-left">
                Direct Line
            </p>
            
            {/* HUGE EMAIL LINK */}
            <a 
              href="mailto:hello@oneszerolabs.com"
              className="group relative text-xl md:text-2xl lg:text-3xl font-bold text-black font-syne tracking-tight transition-colors duration-300 break-all sm:break-normal text-left mb-8 block"
            >
              hello@onezerolabs.com
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-100 lg:scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left lg:origin-right lg:group-hover:origin-left" />
            </a>

            {/* ADDED: SOCIAL LINKS (LinkedIn & Email) */}
            <div className="flex items-center gap-6">
                
                {/* LinkedIn */}
                <a 
                    href="https://www.linkedin.com/company/onezerolabs/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group cursor-pointer"
                >
                    <div className="p-2 border border-black/10 rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-300">
                        <Linkedin size={14} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-black/60 group-hover:text-black transition-colors">
                        LinkedIn
                    </span>
                </a>

                {/* Email (Secondary Action) */}
                <a 
                    href="mailto:hello@oneszerolabs.com"
                    className="flex items-center gap-2 group cursor-pointer"
                >
                    <div className="p-2 border border-black/10 rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-300">
                        <Mail size={14} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-black/60 group-hover:text-black transition-colors">
                        Email
                    </span>
                </a>

            </div>

        </motion.div>

      </div>
    </section>
  )
}


'use client'

import React, { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useAnimationFrame
} from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

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
// 1. DATA
// ----------------------------------------------------------------------
const founders = [
  {
    id: 1,
    firstName: "UMESH",
    lastName: "SKANDA",
    badgeText: "FOUNDER",
    img: "founder.jpg",
    velocity: 1.5
  },
  {
    id: 2,
    firstName: "KUMAR",
    lastName: "PRAVEEN",
    badgeText: "CO-FOUNDER",
    img: "cofounder.jpg",
    velocity: 1.5
  },
  {
    id: 3,
    firstName: "KARVE",
    lastName: "TANISHA",
    badgeText: "OPERATIONS LEAD",
    img: "lead.jpg",
    velocity: 1.5
  }
]

// ----------------------------------------------------------------------
// 2. UTILS
// ----------------------------------------------------------------------
const wrap = (min, max, v) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

// ----------------------------------------------------------------------
// 3. COMPONENT: ANIMATED TEXT REVEAL
// ----------------------------------------------------------------------
const RevealText = ({ children, delay = 0, className = "" }) => {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// ----------------------------------------------------------------------
// 4. COMPONENT: VELOCITY TEXT
// ----------------------------------------------------------------------
const VelocityText = ({ children, baseVelocity = 5, className = "", style = {} }) => {
  const baseX = useMotionValue(0)
  
  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000)
    baseX.set(baseX.get() + moveBy)
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap select-none w-full pointer-events-none">
      <motion.div className={`flex flex-nowrap ${className}`} style={{ ...style, x }}>
        {[...Array(12)].map((_, i) => (
            <span key={i} className="block mr-[40vw] md:mr-[40vw]">
                {children}
            </span>
        ))}
      </motion.div>
    </div>
  )
}

// ----------------------------------------------------------------------
// 5. COMPONENT: FOUNDER MONUMENT (Mobile Z-Index Fix)
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// 5. COMPONENT: FOUNDER MONUMENT (Reduced Gap)
// ----------------------------------------------------------------------
const FounderMonument = ({ firstName, lastName, role, badgeText, img, velocity = 3 }) => {
    const ACID_LIME = '#D1F349'; 
    const TEXT_SIZE = "text-[15vw] md:text-[10vw]"; 
    
    // SCROLL ANIMATION HOOKS
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
    const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

    return (
        // CHANGED: Reduced py-24 md:py-32 to py-10 md:py-16 to close the gap
        <div ref={containerRef} className="relative w-full py-10 md:py-16 flex flex-col items-center justify-center overflow-hidden bg-[#050505] group">
            <div className="relative w-full flex items-center justify-center h-[60vh] md:h-[80vh]">
                
                {/* BACK TEXT LAYER (LAST NAME) */}
                <div className="absolute top-[70%] md:top-[38%] -translate-y-1/4 w-full z-30 md:z-10 opacity-100 pointer-events-none mix-blend-normal">
                    <VelocityText 
                        baseVelocity={-velocity} 
                        className={`${TEXT_SIZE} leading-none font-syne font-bold tracking-tighter uppercase`}
                        style={{ color: ACID_LIME }}
                    >
                        {lastName}
                    </VelocityText>
                </div>

                {/* IMAGE LAYER */}
                <div className="relative z-20 w-[80vw] md:w-[28vw] aspect-[3/4] shadow-2xl rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none rounded-3xl" />
                    
                    <motion.div 
                        className="w-full h-[120%] relative -top-[10%]" 
                        style={{ y: yParallax, scale: scaleAnim }}
                    >
                        <img 
                            src={img} 
                            alt={`${firstName} ${lastName}`}
                            className="w-full h-full object-cover" 
                        />
                    </motion.div>
                </div>

                {/* FRONT TEXT LAYER (FIRST NAME) */}
                <div className="absolute top-[85%] md:top-[62%] -translate-y-1/2 w-full z-30 pointer-events-none mix-blend-normal">
                    <VelocityText 
                        baseVelocity={velocity} 
                        className={`${TEXT_SIZE} leading-none font-syne font-bold tracking-tighter uppercase`}
                    >
                        <div className="flex items-baseline">
                            <span style={{ color: ACID_LIME }}>{firstName}</span>
                            {badgeText && (
                                <div className="w-0 overflow-visible flex items-center">
                                    <span className="text-white text-[10px] md:text-[1.5vw] font-mono tracking-widest rounded-full px-3 py-1 md:px-5 md:py-2 ml-4 translate-y-[-4px]">
                                        {badgeText}
                                    </span>
                                </div>
                            )}
                        </div>
                    </VelocityText>
                </div>
            </div>
        </div>
    )
}
// ----------------------------------------------------------------------
// 6. COMPONENT: MINIMAL MANIFESTO
// ----------------------------------------------------------------------
const MinimalManifesto = () => {
    return (
        <div className="pt-10 pb-24 md:pt-16 md:pb-32 bg-[#050505] px-6">
            <div className="max-w-[800px] mx-auto">
                <RevealText>
                    <span className="block text-[#D1F349] font-mono text-xs uppercase tracking-widest mb-8">
                        // Who We Are
                    </span>
                </RevealText>
                
                <RevealText delay={0.1}>
                    <h3 className="text-2xl md:text-4xl text-white font-light leading-tight mb-12 font-syne">
                        OneZeroLabs is a digital product agency focused on the intersection of design and technology.
                    </h3>
                </RevealText>

                <div className="space-y-8 text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
                    <RevealText delay={0.2}>
                        <p>
                            We believe that great software is born from clarity. In an industry obsessed with complexity, we strip away the noise to build digital experiences that are intuitive, robust, and undeniably effective.
                        </p>
                    </RevealText>
                    <RevealText delay={0.3}>
                        <p>
                            Our team is small by design. This allows us to move fast, adapt quickly, and maintain a direct line of communication with our partners. We don't just hand over code; we architect solutions that scale with your ambition.
                        </p>
                    </RevealText>
                </div>
                
                <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full h-px bg-white/10 mt-16 origin-left" 
                />
            </div>
        </div>
    )
}

// ----------------------------------------------------------------------
// 7. MAIN COMPONENT
// ----------------------------------------------------------------------
export default function ControlPanel() {
    
    const digitalVariant = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    }

    const architectsVariant = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] } }
    }

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            }
        }
    }

    return (
        <section className="bg-[#050505] text-white font-sans selection:bg-[#D1F349] selection:text-black overflow-hidden">
            
            {/* INJECT FONT */}
            <FontLoader />

            {/* HERO */}
            <div className="pt-32 md:pt-40 pb-10 md:pb-16 px-6 relative z-10">
                <div className="max-w-[1200px] mx-auto text-center">
                    
                    <motion.div 
                       
                    >
                      
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                            We Are OneZeroLabs
                        </span>
                    </motion.div>
                    
                    {/* CUSTOM ANIMATED HEADLINE */}
                    <motion.h1 
                        className="text-5xl md:text-9xl font-bold tracking-tighter leading-[0.9] text-white"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.span 
                            className="block font-syne font-extrabold"
                            variants={digitalVariant}
                        >
                            DIGITAL
                        </motion.span>

                        <motion.span 
                            className="text-neutral-500 font-serif italic font-light block"
                            variants={architectsVariant}
                        >
                            ARCHITECTS
                        </motion.span>
                    </motion.h1>
                </div>
            </div>

            {/* MINIMAL TEXT SECTION */}
            <MinimalManifesto />

            {/* FOUNDERS LOOP */}
            <div className="relative">
                <div className="w-full bg-[#050505] border-t border-white/10 py-4 flex justify-center sticky top-0 z-50 backdrop-blur-md bg-black/80">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                        The Leadership
                    </span>
                </div>

                {founders.map((founder) => (
                    <FounderMonument 
                        key={founder.id}
                        firstName={founder.firstName}
                        lastName={founder.lastName}
                        badgeText={founder.badgeText}
                        img={founder.img}
                        velocity={founder.velocity}
                    />
                ))}
            </div>

            {/* ----------------------------------------------------- */}
            {/* FOOTER - COMPACT & PUNCHY */}
            {/* ----------------------------------------------------- */}
            <div className="relative bg-white text-black py-16 md:py-24 overflow-hidden rounded-t-[30px] md:rounded-t-[60px] mt-20">
                
                {/* Background Marquee */}
                <div className="absolute top-4 left-0 w-full opacity-[0.04] pointer-events-none select-none">
                     <VelocityText baseVelocity={3} className="text-[15vw] font-black font-syne leading-none">
                        START PROJECT — LET'S BUILD — 
                     </VelocityText>
                </div>

                <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
                    
                    {/* Tagline */}
                    <RevealText>
                        <span className="inline-block border border-black/10 px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest mb-6 text-neutral-500">
                            Available for new partnerships
                        </span>
                    </RevealText>

                    {/* Headline */}
                    <div className="group cursor-pointer">
                        <RevealText delay={0.1}>
                            <h2 className="text-[10vw] md:text-[8vw] leading-[0.85] font-black font-syne tracking-tighter mb-8 group-hover:scale-105 transition-transform duration-700 ease-out text-black">
                                READY TO <br />
                                <span className="relative inline-block">
                                    BUILD?
                                    <span className="absolute left-0 bottom-1 w-full h-[3px] md:h-[5px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </span>
                            </h2>
                        </RevealText>
                    </div>
                    
                    {/* Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <button className="relative overflow-hidden px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs group hover:bg-[#D1F349] hover:text-black transition-all duration-300 flex items-center gap-3">
                            <span className="relative z-10">Start Project</span>
                            <div className="relative z-10 p-1 bg-white/20 rounded-full group-hover:bg-black/10 transition-colors">
                                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                            <div className="absolute inset-0 bg-[#D1F349] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </button>
                    </motion.div>

                    {/* Footer Bottom */}
                    <div className="mt-16 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest text-neutral-400 gap-4">
                        <span>© OneZeroLabs Inc.</span>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-black transition-colors">Email</a>
                            <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-black transition-colors">Twitter</a>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
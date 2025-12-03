'use client'

import React, { useRef } from 'react'
import Link from 'next/link' // Import Link
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

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
// 1. DATA (Description property removed)
// ----------------------------------------------------------------------
const projects = [
  // --- Web Development ---
  {
    id: 1,
    title: "LMS Platform",
    category: "Web Development",
    src: "/lms.jpg",
    href: "/portfolio/LMS"
  },
  {
    id: 2,
    title: "Praasa Consultancy",
    category: "Web Development",
    src: "praasa.jpg",
    href: "https://praasaconsultancy.com/"
  },
  {
    id: 3,
    title: "Marks Management System",
    category: "Web Development",
    src: "iamarks.jpg",
    // No href = View Only
  },
  {
    id: 4,
    title: "Samruddi Pathway",
    category: "Web Development",
    src: "samruddi.jpg",
    href: "https://samruddhipathwayltd.com/"
  },

  // --- LLM ---
  {
    id: 5,
    title: "AI-Powered Student Information Chatbot",
    category: "LLM & Gen AI",
    src: "llm1.jpg",
  },

  // --- Graphic Design ---
  {
    id: 6,
    title: "Praasa Identity",
    category: "Graphic Design",
    src: "graphic designs/Picsart_25-03-16_18-07-44-231.jpg",

  },
  {
    id: 7,
    title: "Tech Week Poster",
    category: "Graphic Design",
    src: "graphic designs/Picsart_25-03-09_17-30-39-120.jpg",
  },
  {
    id: 8,
    title: "Nordic Brand",
    category: "Graphic Design",
    src: "graphic designs/Picsart_25-03-01_19-03-26-625.jpg",
  },
  {
    id: 9,
    title: "Urban Typography",
    category: "Graphic Design",
    src: "graphic designs/Picsart_25-01-04_14-20-24-939.jpg",
  },

  // --- UI/UX Design ---
  {
    id: 10,
    title: "Neo-Bank App",
    category: "UI/UX Design",
    src: "web4.png",
  },
  {
    id: 11,
    title: "Spatial Dashboard",
    category: "UI/UX Design",
    src: "uni1.jpg",
  },
  {
    id: 12,
    title: "Travel Companion",
    category: "UI/UX Design",
    src: "u255.jpg",
  },
  {
    id: 13,
    title: "Health Monitor",
    category: "UI/UX Design",
    src: "mock.jpg",
  }
]

const CATEGORIES = ["Web Development", "LLM & Gen AI", "Graphic Design", "UI/UX Design"];

// ----------------------------------------------------------------------
// 2. MAIN COMPONENT
// ----------------------------------------------------------------------
export default function WorkGrid() {
  return (
    <main className="bg-[#050505] min-h-screen font-sans selection:bg-white selection:text-black">
      
      <FontLoader />

      {/* --- HERO HEADER --- */}
      <section className="pt-20 pb-12 px-4 md:pt-32 md:pb-16 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
            <div>
                <span className="text-white/60 font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 block">
                    // The Archive
                </span>
                <h1 className="font-syne font-black text-5xl sm:text-7xl md:text-9xl text-white uppercase tracking-tighter leading-[0.9]">
                    Selected <br/> <span className="text-white/30">Works.</span>
                </h1>
            </div>
            <p className="text-white/40 font-mono text-[10px] md:text-xs uppercase tracking-widest max-w-xs md:text-right">
                A curated collection of <br/> systems & experiences.
            </p>
        </div>
      </section>

      {/* --- SEPARATED CATEGORY SECTIONS --- */}
      <div className="flex flex-col gap-16 md:gap-24 pb-20 md:pb-32">
        {CATEGORIES.map((category) => {
            const categoryProjects = projects.filter(p => p.category === category);
            
            if (categoryProjects.length === 0) return null;

            return (
                <section key={category} className="px-4 md:px-12 max-w-[1600px] mx-auto w-full">
                    
                    {/* CATEGORY HEADING */}
                    <div className="mb-8 md:mb-12 border-b border-white/10 pb-4 md:pb-6 flex items-end justify-between">
                        <h2 className="text-white font-syne font-bold text-2xl md:text-5xl uppercase tracking-tight">
                            {category}
                        </h2>
                        <span className="text-white/30 font-mono text-[10px] md:text-sm">
                            ( {String(categoryProjects.length).padStart(2, '0')} )
                        </span>
                    </div>

                    {/* PROJECT GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-12 md:gap-y-24">
                        {categoryProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </section>
            );
        })}
      </div>

      {/* --- FOOTER CTA (WHITE) --- */}
      <section className="border-t border-black/10 py-20 md:py-32 text-center bg-white px-4">
         <a href="/contact" className="group inline-flex flex-col items-center cursor-pointer">
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-black/50 mb-4 md:mb-6 group-hover:text-black transition-colors underline-offset-4 group-hover:underline">
                Have an idea?
            </span>
            <h2 className="text-black font-syne font-black text-4xl sm:text-6xl md:text-8xl group-hover:scale-105 transition-transform duration-500 leading-tight">
                Let's Build It <span className="inline-block transition-transform group-hover:-translate-y-2 group-hover:translate-x-2">→</span>
            </h2>
         </a>
      </section>

    </main>
  )
}

// ----------------------------------------------------------------------
// 3. PROJECT CARD (Title hidden for design projects)
// ----------------------------------------------------------------------
const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    
    // --- PARALLAX ANIMATION ---
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    const yParallax = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    // --- MOUSE FOLLOWER LOGIC ---
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    function handleMouseMove({ clientX, clientY, currentTarget }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        x.set(clientX - left);
        y.set(clientY - top);
    }

    const isGraphicDesign = project.category === "Graphic Design";
    const isUIUXDesign = project.category === "UI/UX Design";
    // Check if we should hide the title
    const isDesignCategory = isGraphicDesign || isUIUXDesign; 

    const aspectRatioClass = isGraphicDesign ? "aspect-[4/3] md:aspect-video" : "aspect-[4/3] md:aspect-[3/2]";
    const objectFitClass = isGraphicDesign ? "object-cover md:object-contain" : "object-cover";

    // 1. DETERMINE IF IT'S CLICKABLE
    const isLink = !!project.href;
    const Wrapper = isLink ? Link : 'div';
    const wrapperProps = isLink ? { href: project.href } : {};

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }} 
            transition={{ duration: 0.8, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            className={`group relative w-full ${isLink ? 'cursor-auto md:cursor-none' : 'cursor-default'}`}
        >
            {/* WRAPPER (Link or Div) */}
            <Wrapper {...wrapperProps} className="block">
                
                {/* --- IMAGE CONTAINER --- */}
                <div className={`relative overflow-hidden w-full ${aspectRatioClass} rounded-sm bg-[#111] mb-4 md:mb-6 border border-white/5`}>
                    
                    {/* Parallax Image Wrapper */}
                    <motion.div 
                        style={{ y: yParallax }} 
                        className="absolute inset-0 h-[120%] w-full -top-[10%]"
                    >
                        <motion.img 
                            src={project.src} 
                            alt={project.title} 
                            className={`w-full h-full ${objectFitClass} transition-transform duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-105 opacity-80 group-hover:opacity-100`}
                        />
                    </motion.div>
                    
                    {/* Magnetic Cursor Follower (ONLY IF LINK) */}
                    {isLink && (
                        <motion.div 
                            style={{ left: mouseX, top: mouseY }}
                            className="hidden md:flex absolute w-20 h-20 bg-white rounded-full items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2 mix-blend-difference z-20"
                        >
                            <ArrowUpRight className="text-black w-6 h-6" />
                        </motion.div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>

                {/* --- INFO --- */}
                <div className="flex flex-col gap-1 px-1">
                    {/* TITLE / ID ROW */}
                    <div className="flex justify-between items-baseline border-b border-white/10 pb-2 md:pb-3 group-hover:border-white/50 transition-colors duration-500">
                        {/* CONDITIONAL TITLE DISPLAY */}
                        {!isDesignCategory ? (
                            <h3 className="text-xl md:text-3xl font-bold font-syne text-white group-hover:text-white transition-colors">
                                {project.title}
                            </h3>
                        ) : (
                            // Renders a small space to keep the ID number vertically aligned
                            <div className="h-6 md:h-8" /> 
                        )}
                        
                        {/* ID always renders */}
                        <span className="text-white/40 font-mono text-[10px] md:text-xs">
                            {String(project.id).padStart(2, '0')}
                        </span>
                    </div>
                    
                    {/* CATEGORY ROW (Always shown) */}
                    <div className="flex justify-between items-center text-white/50 text-[10px] md:text-xs font-mono uppercase tracking-widest mt-2">
                        <span className="text-white/60 group-hover:text-white transition-colors">{project.category}</span>
                    </div>
                </div>

            </Wrapper>
        </motion.div>
    )
}
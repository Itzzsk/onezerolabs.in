'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle2, BarChart2, UserCheck, Sparkles, Command, Smartphone, Layers } from 'lucide-react'

export default function LmsProjectPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Data for the sliding gallery
  const galleryImages = [
    { src: "/s1.png", alt: "Dashboard UI", className: "" },
    { src: "/s2.png", alt: "User Context", className: "grayscale group-hover:grayscale-0" },
    { src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600", alt: "Mobile UI", className: "" },
    { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600", alt: "Planning", className: "grayscale group-hover:grayscale-0" },
    { src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1600", alt: "Design Process", className: "" },
  ]

  return (
    <main ref={containerRef} className="bg-[#FFFFFF] min-h-screen text-[#050505] selection:bg-black selection:text-white font-sans">
      
      {/* --- FONTS (Simulated via Google Fonts) --- */}
      {/* Fixed: Using dangerouslySetInnerHTML to prevent hydration mismatch errors on special characters in CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-space { font-family: 'Space Grotesk', sans-serif; }
      `}} />

      {/* --- 1. HERO --- */}
      <section className="min-h-screen flex flex-col justify-between p-6 md:p-12 relative border-b border-black/5">
       
         
         <div className="relative z-10 mt-20">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-syne text-[15vw] leading-[0.8] font-extrabold uppercase tracking-tighter text-black mb-8"
            >
               LMS
            </motion.h1>
            <motion.div 
               initial={{ y: 50, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
               className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-black pt-8"
            >
               <p className="font-space text-lg md:text-xl max-w-lg leading-relaxed text-gray-600">
                  A bespoke Learning Management System. <br/>
                  <span className="text-black font-medium">Zero-friction attendance for teachers. Deep-dive analytics for admins.</span>
               </p>
               <div className="font-space text-xs uppercase tracking-widest flex gap-4">
                  <span className="bg-black text-white px-3 py-1 rounded-full">Web Platform</span>
                  <span className="border border-black px-3 py-1 rounded-full">iOS Native</span>
               </div>
            </motion.div>
         </div>

         <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="mt-12 w-full h-[50vh] bg-gray-100 rounded-3xl overflow-hidden relative"
         >
             {/* IMAGE PLACEHOLDER: HERO COVER */}
             <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2400&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000" 
                alt="Lumina Cover" 
             />
         </motion.div>
      </section>

      {/* --- 2. ATTENDANCE SECTION (Sticky Side Scroll) --- */}
      <section className="py-32 px-6 md:px-12 border-b border-black/5 bg-[#FAFAFA]">
          <div className="flex flex-col md:flex-row gap-20">
             <div className="md:w-1/3">
                <span className="font-space text-xs font-bold uppercase tracking-widest text-blue-600 mb-4 block">For Educators</span>
                <h2 className="font-syne text-5xl md:text-6xl font-bold leading-none mb-8">
                   Smart <br/> Attendance.
                </h2>
                <p className="font-space text-gray-500 text-lg leading-relaxed mb-12">
                   We removed the friction. Teachers simply log in, and the app knows which class they are in.
                </p>
                <div className="space-y-6">
                   <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                         <Smartphone size={20} />
                      </div>
                      <div className="font-space">
                         <h4 className="font-bold text-lg">Mobile Native</h4>
                         <p className="text-sm text-gray-400">Works offline in classrooms.</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                         <Command size={20} />
                      </div>
                      <div className="font-space">
                         <h4 className="font-bold text-lg">Context Aware</h4>
                         <p className="text-sm text-gray-400">Only shows current subject.</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="md:w-1/4 relative flex items-center justify-center bg-white rounded-[3rem] overflow-hidden shadow-sm border border-gray-100 min-h-[00px] group">
                 <img 
                    src="/mock.jpg" 
                    alt="Smart Attendance Interface" 
                    className="w-[100%] h-auto object-contain rounded-[2rem] group-hover:scale-105 transition-transform duration-1000" 
                 />
                 <div className="absolute inset-0 bg-black/10 rounded-[3rem] group-hover:bg-black/0 transition-colors duration-500"></div>
             </div>
          </div>
      </section>

      {/* --- NEW SECTION: UI GALLERY (AUTO SLIDING) --- */}
      <section className="py-32 border-b border-black/5 overflow-hidden">
         <div className="px-6 md:px-12 mb-20 max-w-4xl">
            <span className="font-space text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Visual Design</span>
            <h2 className="font-syne text-5xl md:text-7xl font-bold leading-none mb-6">
               UI Gallery.
            </h2>
         </div>

         {/* Marquee Slider */}
         <div className="w-full relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <motion.div 
               className="flex gap-8 w-max"
               animate={{ x: "-50%" }}
               transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
               {/* Looping images twice to create seamless effect */}
               {[...galleryImages, ...galleryImages].map((img, index) => (
                  <div key={index} className="w-[80vw] md:w-[35vw] aspect-[4/3] bg-gray-50 rounded-[2.5rem] overflow-hidden relative group flex-shrink-0">
                     <img 
                        src={img.src} 
                        alt={img.alt} 
                        className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${img.className}`} 
                     />
                     <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 to-transparent">
                        <span className="font-space text-white text-sm font-medium">{img.alt}</span>
                     </div>
                  </div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* --- 3. ADMIN GRID --- */}
      <section className="py-32 px-6 md:px-12">
         <div className="mb-20 max-w-4xl">
            <span className="font-space text-xs font-bold uppercase tracking-widest text-purple-600 mb-4 block">For Administrators</span>
            <h2 className="font-syne text-5xl md:text-7xl font-bold leading-none mb-6">
               The Command Center.
            </h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Data */}
            <div className="bg-gray-50 p-8 rounded-3xl hover:bg-black hover:text-white transition-colors duration-500 group">
               <BarChart2 className="w-10 h-10 mb-8 text-gray-400 group-hover:text-white" />
               <h3 className="font-syne text-3xl mb-4">Analytics</h3>
               <p className="font-space text-sm opacity-60 leading-relaxed">
                  Real-time visualization of attendance trends, teacher performance, and enrollment stats across all streams.
               </p>
            </div>

            {/* Card 2: Logic */}
            <div className="bg-gray-50 p-8 rounded-3xl hover:bg-black hover:text-white transition-colors duration-500 group">
               <Layers className="w-10 h-10 mb-8 text-gray-400 group-hover:text-white" />
               <h3 className="font-syne text-3xl mb-4">Promotions</h3>
               <p className="font-space text-sm opacity-60 leading-relaxed">
                  Automated promotion logic engine. Define pass/fail criteria once, and process thousands of student records instantly.
               </p>
            </div>

            {/* Card 3: AI */}
            <div className="bg-gray-50 p-8 rounded-3xl hover:bg-black hover:text-white transition-colors duration-500 group relative overflow-hidden">
               <Sparkles className="w-10 h-10 mb-8 text-gray-400 group-hover:text-white" />
               <h3 className="font-syne text-3xl mb-4">Neural AI</h3>
               <p className="font-space text-sm opacity-60 leading-relaxed">
                  "Who has low attendance?" <br/>
                  Natural language queries for staff who don't code. 
               </p>
               {/* Decorative Gradient */}
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
            </div>

         </div>
      </section>

      {/* --- 4. CHAT DEMO --- */}
      <section className="py-20 px-6 md:px-12 border-t border-black/5">
         <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-syne text-4xl mb-12">Conversational Interface</h3>
            <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden text-left">
               <div className="bg-gray-50 p-3 border-b border-gray-100 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
               </div>
               <div className="p-8 space-y-6 font-space text-sm">
                  <div className="flex justify-end">
                     <div className="bg-gray-100 px-4 py-2 rounded-2xl rounded-tr-sm text-gray-800">
                        Generate a PDF report for Commerce Stream absentees.
                     </div>
                  </div>
                  <div className="flex justify-start items-start gap-3">
                     <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-[10px]">AI</div>
                     <div className="bg-purple-50 text-purple-900 px-4 py-3 rounded-2xl rounded-tl-sm w-full max-w-md">
                        <p className="font-bold mb-2">Report Generated Successfully.</p>
                        <p className="opacity-80 mb-3">I found 12 students with attendance below 75% in the Commerce Stream.</p>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider border border-purple-200 bg-white p-2 rounded cursor-pointer hover:bg-purple-100">
                           <span>⬇ Download PDF</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- 5. NEXT PROJECT --- */}
      <section className="h-[80vh] flex items-center justify-center bg-black text-white relative overflow-hidden group">
         <div className="absolute inset-0 opacity-20 pointer-events-none">
             {/* IMAGE PLACEHOLDER: FOOTER TEXTURE */}
             <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2400" className="w-full h-full object-cover grayscale" alt="Texture" />
         </div>
         {/* Replaced Next Link with anchor for preview compatibility */}
         <a href="/portfolio/praasa" className="relative z-10 text-center cursor-pointer">
            <span className="font-space text-xs font-bold uppercase tracking-widest text-gray-500 mb-6 block group-hover:text-white transition-colors">Next Case Study</span>
            <h2 className="font-syne text-[12vw] leading-none group-hover:tracking-wide transition-all duration-700">PRAASA</h2>
            <div className="mt-8 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <ArrowRight size={32} />
            </div>
         </a>
      </section>

    </main>
  )
}
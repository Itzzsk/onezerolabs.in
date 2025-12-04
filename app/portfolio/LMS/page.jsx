'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Layers, 
  MessageCircle, 
  FileSpreadsheet, 
  Database, 
  Repeat, 
  Bot,
  Edit,
  ChevronDown,
  UserCheck,
  Wifi // Changed WifiOff to Wifi
} from 'lucide-react'

export default function LmsProjectPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  
  // Parallax for Hero
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  
  // --- DATA ---
  
  const teacherFeatures = [
    { icon: UserCheck, title: "Fast Marking", text: "Mark by Stream, Sem & Subject instantly." },
    { icon: Edit, title: "Editable Records", text: "Modify attendance before final submission." },
    { icon: Bot, title: "AI Assistant", text: "Voice/Text queries for quick data retrieval." },
    // UPDATED: Changed from Offline Mode to Real-time Sync
    { icon: Wifi, title: "Real-time Sync", text: "Instant data reflection across the campus network." }
  ]

  const adminFeatures = [
    {
      title: "Promotion System",
      icon: Repeat,
      desc: "End-of-semester logic to auto-transfer student batches."
    },
    {
      title: "IA Marks Portal",
      icon: FileSpreadsheet,
      desc: "Dedicated web interface for Internal Assessment scoring."
    },
    {
      title: "WhatsApp Alerts",
      icon: MessageCircle,
      desc: "Instantly notify parents of absenteeism via WhatsApp."
    },
    {
      title: "Data Management",
      icon: Database,
      desc: "Full CRUD control for Students, Subjects, and Streams."
    },
    {
      title: "Universal Export",
      icon: Layers,
      desc: "One-click Excel generation for all datasets."
    },
    {
      title: "AI Command",
      icon: Bot,
      desc: "Natural language search for deep database queries."
    }
  ]

  return (
    <main ref={containerRef} className="bg-[#050505] min-h-screen text-white selection:bg-white/20 selection:text-white font-sans overflow-x-hidden pb-20">
      
      {/* --- FONTS & STYLES --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-space { font-family: 'Space Grotesk', sans-serif; }
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        html { scroll-behavior: smooth; }
      `}} />

      {/* --- 1. HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 overflow-hidden">
         {/* Ambient Background Glows */}
         <div className="absolute top-0 inset-x-0 h-[60vh] bg-gradient-to-b from-white/5 via-white/5 to-transparent blur-[120px] pointer-events-none"></div>

         {/* Text Content */}
         <motion.div 
            style={{ opacity: heroOpacity }}
            className="text-center relative z-10 max-w-5xl mx-auto mb-10 md:mb-16 w-full"
         >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2  rounded-full px-3 py-1.5 md:px-4 md:py-1 mb-6 backdrop-blur-md"
            >
             
                <span className="font-space text-[10px] md:text-xs font-bold uppercase tracking-wider text-white">Smart Attendance System</span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-white mb-6 leading-[0.95] md:leading-[0.9]"
            >
               Campus <br className="hidden md:block" /> Intelligence.
            </motion.h1>
            
            <motion.p
               initial={{ y: 30, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 1, delay: 0.3 }}
               className="font-space text-base md:text-xl text-white/60 max-w-xl mx-auto px-4"
            >
               Connecting Teachers and Non-Teaching Staff in one unified, monochrome ecosystem.
            </motion.p>
         </motion.div>

         {/* THE MAIN SQUARE UI DISPLAY */}
         <motion.div 
            style={{ scale: heroScale }}
            initial={{ y: 100, opacity: 0, rotateX: 15 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.5, type: "spring", bounce: 0.3 }}
            className="relative w-full max-w-[320px] md:max-w-[500px] aspect-square perspective-1000 group mx-auto"
         >
             <div className="w-full h-full relative preserve-3d transition-transform duration-1000 group-hover:[transform:rotateX(5deg)]">
                 
                 {/* Main Cube Face */}
                 <div className="absolute inset-0 bg-[#0A0A0A] rounded-[2rem] md:rounded-[3rem] border-[3px] md:border-[4px] border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.08)] overflow-hidden z-10 flex items-center justify-center">
                    
                    {/* Placeholder Image */}
                    <img 
                        src="/mock.jpg" 
                        alt="Admin Dashboard Square UI" 
                        className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 grayscale"
                    />

                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_2px,rgba(255,255,255,0.1)_3px)] bg-[size:100%_4px] pointer-events-none z-20 opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-40 pointer-events-none mix-blend-overlay z-20"></div>
                 </div>
                 
                 {/* Glow under */}
                 <div className="absolute -inset-8 bg-white/10 blur-[60px] md:blur-[80px] -z-10 rounded-full opacity-60"></div>
             </div>
         </motion.div>
         
         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 animate-bounce hidden md:block"
         >
            <ChevronDown className="text-white/40" />
         </motion.div>
      </section>

      {/* --- 2. TEACHER APP SECTION --- */}
      <section className="py-24 px-4 md:px-12 relative z-10 border-t border-white/10 bg-[#080808]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 md:mb-20 text-center md:text-left">
                <span className="font-space text-xs font-bold uppercase tracking-widest text-white/60 mb-4 block">TEACHING STAFF MODULE</span>
                <h2 className="font-syne text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                    The Teacher's App.
                </h2>
                <p className="font-space text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
                    A dedicated mobile interface engineered for speed. Zero friction attendance marking in the classroom.
                </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {teacherFeatures.map((item, i) => (
                    <div key={i} className="flex flex-col items-start justify-between gap-6 font-space text-white/90 bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group min-h-[220px]">
                        <div className="text-white/80 group-hover:text-white bg-white/10 p-3 rounded-2xl border border-white/5">
                            <item.icon size={24} />
                        </div>
                        <div>
                            <h3 className="font-syne text-xl font-bold mb-2 leading-tight">{item.title}</h3>
                            <p className="text-sm text-white/60 leading-relaxed">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
      </section>

      {/* --- 3. ADMIN PORTAL --- */}
      <section className="py-24 px-4 md:px-12 relative z-10 border-t border-white/10">
         <div className="mb-16 md:mb-24 max-w-5xl mx-auto text-center">
            <span className="font-space text-xs font-bold uppercase tracking-widest text-white/60 mb-4 block">ADMIN PORTAL</span>
            <h2 className="font-syne text-4xl md:text-7xl font-bold leading-none mb-6 text-white">
               Control Center.
            </h2>
            <p className="font-space text-lg md:text-xl text-white/50 max-w-2xl mx-auto px-2">
                Web-based management on laptop. From transferring students to managing IA marks.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-7xl mx-auto">
            {adminFeatures.map((feat, index) => (
                <div key={index} className="group relative bg-white/[0.03] backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-white/10 overflow-hidden hover:bg-white/[0.06] transition-all duration-500 hover:border-white/20">
                    <div className="relative z-10 h-full flex flex-col">
                        <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl border border-white/10 group-hover:border-white/30 transition-colors">
                            <feat.icon className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-white" />
                        </div>
                        <h3 className="font-syne text-xl md:text-2xl mb-3 text-white">{feat.title}</h3>
                        <p className="font-space text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">
                            {feat.desc}
                        </p>
                    </div>
                </div>
            ))}
         </div>
      </section>

      {/* --- 4. COMMUNICATION & INTELLIGENCE --- */}
      <section className="py-24 px-4 md:px-12 relative z-10 bg-[#080808] border-t border-white/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              
              {/* Left: WhatsApp Logic */}
              <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="font-space text-xs font-bold uppercase tracking-wider text-white">Parent Connect</span>
                  </div>
                  <h2 className="font-syne text-4xl md:text-6xl font-bold leading-[0.95] mb-6 text-white">
                      "Your child was absent."
                  </h2>
                  <p className="font-space text-white/50 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-md">
                      Filter students by <strong>Stream</strong> and <strong>Semester</strong> to identify absentees and send automated WhatsApp notifications instantly.
                  </p>
                  
                  {/* Mock WhatsApp Interface */}
                  <div className="bg-[#111] rounded-3xl p-5 md:p-6 text-white border border-white/10 w-full max-w-md relative overflow-hidden mx-auto lg:mx-0 shadow-2xl">
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                          <span className="text-[10px] md:text-xs font-space text-white/40 tracking-wider">FILTER: CS / 3RD SEM</span>
                          <span className="text-[10px] md:text-xs font-space text-white font-bold bg-red-500/20 text-red-200 px-2 py-1 rounded">8 Absentees</span>
                      </div>
                      <div className="space-y-3 mb-6">
                          <div className="h-10 md:h-12 bg-white/5 rounded-xl flex items-center px-3 gap-3 border border-white/10">
                              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[8px]">AM</div>
                              <div className="flex flex-col gap-1 w-full">
                                <div className="h-1.5 w-20 bg-white/20 rounded"></div>
                                <div className="h-1.5 w-32 bg-white/10 rounded"></div>
                              </div>
                          </div>
                          <div className="h-10 md:h-12 bg-white/5 rounded-xl flex items-center px-3 gap-3 border border-white/10">
                             <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[8px]">JS</div>
                             <div className="flex flex-col gap-1 w-full">
                                <div className="h-1.5 w-16 bg-white/20 rounded"></div>
                                <div className="h-1.5 w-24 bg-white/10 rounded"></div>
                              </div>
                          </div>
                      </div>
                      <button className="w-full bg-white text-black hover:bg-gray-200 font-space font-bold py-3 md:py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                          <MessageCircle size={18} /> <span className="text-sm">Send Alerts</span>
                      </button>
                  </div>
              </div>

              {/* Right: AI Assistant */}
              <div className="relative order-1 lg:order-2">
                 <div className="mb-8 md:mb-10 text-center lg:text-left">
                    <h3 className="font-syne text-3xl md:text-4xl mb-4 text-white">AI Assistant</h3>
                    <p className="font-space text-white/40 text-sm md:text-base">"Show me attendance for Student ID 402"</p>
                 </div>

                 {/* Chat Window */}
                <div className="bg-[#111] border border-white/10 rounded-[2rem] overflow-hidden text-left relative shadow-2xl">
   {/* Window Controls */}
   <div className="bg-white/5 p-4 border-b border-white/10 flex gap-2">
      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
   </div>
   
   {/* Chat Area */}
   <div className="p-4 md:p-6 space-y-6 font-space text-sm min-h-[300px] flex flex-col justify-end">
      
      {/* User Message */}
      <div className="flex justify-end">
         <div className="bg-white text-black px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] text-xs md:text-sm font-medium">
            What's Tanisha's attendance status?
         </div>
      </div>

      {/* Bot Response */}
      <div className="flex justify-start items-start gap-3 md:gap-4">
         <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
            <Bot size={16} className="text-white" />
         </div>
         <div className="space-y-3 w-full max-w-[280px]">
            <div className="bg-white/5 text-white/90 px-4 py-4 rounded-2xl rounded-tl-sm w-full border border-white/10">
               <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                  <span className="text-xs text-white/50 uppercase tracking-wider font-bold">Tanisha (BDA,5th Sem)</span>
                  <span className="text-xs bg-green-500/20 text-green-200 px-1.5 py-0.5 rounded border border-green-500/30">88% Avg</span>
               </div>
               
               <div className="space-y-3">
                  {/* Subject 1 */}
                  <div className="space-y-1">
                     <div className="flex justify-between text-xs">
                        <span className="text-white/70">Data Structures</span>
                        <span className="font-mono text-white">42/45</span>
                     </div>
                     <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-white/80 w-[93%]"></div>
                     </div>
                  </div>

                  {/* Subject 2 */}
                  <div className="space-y-1">
                     <div className="flex justify-between text-xs">
                        <span className="text-white/70">Java Programming</span>
                        <span className="font-mono text-white">38/40</span>
                     </div>
                     <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-white/80 w-[95%]"></div>
                     </div>
                  </div>

                  {/* Subject 3 (Low Attendance Example) */}
                  <div className="space-y-1">
                     <div className="flex justify-between text-xs">
                        <span className="text-white/70">Operating Systems</span>
                        <span className="font-mono text-red-300">22/30</span>
                     </div>
                     <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500/60 w-[73%]"></div>
                     </div>
                  </div>

                  {/* Subject 4 */}
                  <div className="space-y-1">
                     <div className="flex justify-between text-xs">
                        <span className="text-white/70">Discrete Math</span>
                        <span className="font-mono text-white">40/40</span>
                     </div>
                     <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-white/80 w-[100%]"></div>
                     </div>
                  </div>
               </div>
            </div>
            
            <button className="flex items-center gap-2 text-xs font-bold border border-white/20 bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-white/70 w-fit">
               <FileSpreadsheet size={14} /> Download Report
            </button>
         </div>
      </div>
   </div>
</div>
              </div>
          </div>
      </section>

    </main>
  )
}

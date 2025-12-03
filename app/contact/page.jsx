'use client'

import React, { useState } from 'react'
import { motion, useMotionValue, useAnimationFrame, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Check, Linkedin, Twitter, Loader2, MapPin } from 'lucide-react'

// ----------------------------------------------------------------------
// 0. CONFIGURATION
// ----------------------------------------------------------------------
const WEB3FORMS_ACCESS_KEY = "aeb1e2ea-21fd-44b4-bb0a-366928d410ae"; 

// ----------------------------------------------------------------------
// 1. FONT LOADER
// ----------------------------------------------------------------------
const FontLoader = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
    .font-syne { font-family: 'Syne', sans-serif; }
  `}} />
)

// ----------------------------------------------------------------------
// 2. UTILS (Velocity Text)
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
// 3. MAIN COMPONENT
// ----------------------------------------------------------------------
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    agreePolicy: false
  })

  const [status, setStatus] = useState(null) // null | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...formData,
          subject: `New Inquiry from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success')
        setFormData({ name: '', company: '', email: '', message: '', agreePolicy: false })
      } else {
        setStatus('error')
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus('error')
      console.error(error)
    }
  }

  return (
    <main className="relative w-full min-h-screen bg-black font-sans selection:bg-[#D1F349] selection:text-black">
      
      <FontLoader />

      <div className="flex flex-col lg:flex-row h-full min-h-screen">
        
        {/* === LEFT SIDE (Dark Context) === */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full lg:w-1/2 bg-[#0a0a0a] flex flex-col justify-between p-8 md:p-16 overflow-hidden min-h-[50vh] lg:min-h-screen"
        >
          {/* Background Marquee */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-[0.05] pointer-events-none">
             <VelocityText baseVelocity={1} className="text-[40vh] font-black font-syne leading-none text-white/20">
                HELLO — HOLA — 
             </VelocityText>
          </div>

          {/* Top: Header / Branding */}
          <div className="relative z-10">
             {/* ADDED: Proper Header Branding */}
             <div className="flex items-center gap-3 mb-8">
            
                <h3 className="text-white font-syne font-bold text-lg tracking-tight"></h3>
             </div>

             <span className="text-[#D1F349] font-mono text-xs uppercase tracking-widest mb-4 block">
                // Inquiry Terminal
             </span>
             <div className="flex flex-wrap gap-3">
                {['New Business', 'Careers', 'Press'].map((tag) => (
                    <span key={tag} className="px-4 py-1 border border-white/10 rounded-full text-white/60 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-default">
                        {tag}
                    </span>
                ))}
             </div>
          </div>

          {/* Bottom: Contact Info & Socials */}
          <div className="relative z-10 mt-20 lg:mt-0">
             <h2 className="text-white text-5xl md:text-7xl font-bold font-syne uppercase tracking-tighter mb-8 leading-none">
                Let's start <br/> a project.
             </h2>
             
             {/* Info Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                 
                 {/* Email Section */}
                 <div className="space-y-2">
                     <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Direct Email</p>
                     <a href="mailto:hello@onezerolabs.com" className="block text-xl text-white hover:text-[#D1F349] transition-colors font-syne font-bold underline underline-offset-8 decoration-white/20 hover:decoration-[#D1F349]">
                        hello@onezerolabs.com
                     </a>
                 </div>

                 {/* ADDED: Location Section */}
                 <div className="space-y-2">
                     <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Studio</p>
                     <div className="flex items-center gap-2 text-white">
                        <MapPin size={18} className="text-[#D1F349]" />
                        <span className="text-lg font-syne font-bold">Bengaluru, India</span>
                     </div>
                 </div>

                 {/* Socials Section */}
                 <div className="space-y-2 md:col-span-2">
                     <p className="text-white/40 font-mono text-xs uppercase tracking-widest">On The Grid</p>
                     <div className="flex gap-6">
                        <a href="https://www.linkedin.com/posts/onezerolabs_onezerolabs-aryavarh-techathon2025-activity-7392221582292676609-SlUw?utm_source=share&utm_medium=member_android&rcm=ACoAAFMjgesBc61s3MsKWqbxXT1uxtVdCHCuTWc" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-white hover:text-[#D1F349] transition-colors">
                            <Linkedin size={20} />
                            <span className="font-syne font-bold text-lg">LinkedIn</span>
                            <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </a>
                        
                    
                     </div>
                 </div>

             </div>
          </div>
        </motion.div>

        {/* === RIGHT SIDE (White Form) === */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full lg:w-1/2 bg-white flex items-center justify-center p-8 md:p-16 lg:p-24"
        >
          <div className="w-full max-w-lg h-full flex flex-col justify-center">
            
            <AnimatePresence mode='wait'>
                {status === 'success' ? (
                    /* === SUCCESS STATE === */
                    <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center py-20"
                    >
                        <div className="w-20 h-20 bg-[#D1F349] rounded-full flex items-center justify-center mx-auto mb-8">
                            <Check size={40} className="text-black" />
                        </div>
                        <h3 className="text-5xl md:text-7xl font-black font-syne uppercase tracking-tighter mb-4">
                            Message <br/> Received.
                        </h3>
                        <p className="text-neutral-500 font-mono">
                            We'll get back to you within 24 hours.
                        </p>
                        <button 
                            onClick={() => setStatus(null)}
                            className="mt-10 text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-[#D1F349] hover:border-[#D1F349] transition-colors"
                        >
                            Send another message
                        </button>
                    </motion.div>
                ) : (
                    /* === FORM STATE === */
                    <motion.div key="form" exit={{ opacity: 0, y: -20 }}>
                        <div className="mb-12">
                            <h3 className="text-black text-4xl md:text-5xl font-bold font-syne uppercase tracking-tight mb-4">
                                Get in touch
                            </h3>
                            <p className="text-neutral-500 font-mono text-sm leading-relaxed">
                                Fill out the form below. We usually respond within 24 hours.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                        
                        {/* Name */}
                        <div className="group relative">
                            <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-0 py-4 border-b border-neutral-200 bg-transparent text-black text-lg font-syne focus:outline-none focus:border-black transition-colors placeholder:text-neutral-300"
                            />
                        </div>

                        {/* Company */}
                        <div className="group relative">
                            <input
                            type="text"
                            name="company"
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-0 py-4 border-b border-neutral-200 bg-transparent text-black text-lg font-syne focus:outline-none focus:border-black transition-colors placeholder:text-neutral-300"
                            />
                        </div>

                        {/* Email */}
                        <div className="group relative">
                            <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-0 py-4 border-b border-neutral-200 bg-transparent text-black text-lg font-syne focus:outline-none focus:border-black transition-colors placeholder:text-neutral-300"
                            />
                        </div>

                        {/* Message */}
                        <div className="group relative">
                            <textarea
                            name="message"
                            placeholder="Tell us about your project..."
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            required
                            className="w-full px-0 py-4 border-b border-neutral-200 bg-transparent text-black text-lg font-syne focus:outline-none focus:border-black transition-colors placeholder:text-neutral-300 resize-none"
                            />
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-start gap-3 pt-2">
                            <div className="relative flex items-center">
                                <input
                                type="checkbox"
                                name="agreePolicy"
                                id="agreePolicy"
                                checked={formData.agreePolicy}
                                onChange={handleChange}
                                required
                                className="peer h-5 w-5 cursor-pointer appearance-none border border-neutral-300 rounded-md checked:bg-black checked:border-black transition-all"
                                />
                                <Check size={12} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                            </div>
                            <label htmlFor="agreePolicy" className="text-xs text-neutral-500 font-mono mt-0.5 cursor-pointer select-none">
                            I agree to the{' '}
                            <a href="/privacy-policy" className="text-black underline underline-offset-2 hover:text-[#D1F349] transition-colors">
                                privacy policy
                            </a>
                            .
                            </label>
                        </div>

                        {/* Creative Submit Button */}
                        <div className="pt-8">
                            <button
                            type="submit"
                            disabled={!formData.agreePolicy || status === 'submitting'}
                            className="group relative w-full overflow-hidden px-8 py-5 bg-black text-white rounded-full font-bold font-syne uppercase tracking-widest text-xs hover:bg-[#D1F349] hover:text-black transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-between items-center"
                            >
                            <span className="relative z-10 flex items-center gap-2">
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </span>
                            
                            <div className="relative z-10 p-1 bg-white/20 rounded-full group-hover:bg-black/10 transition-colors">
                                {status === 'submitting' ? (
                                    <Loader2 size={14} className="animate-spin" />
                                ) : (
                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                )}
                            </div>
                            
                            {/* Fill Animation */}
                            {!status && (
                                <div className="absolute inset-0 bg-[#D1F349] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            )}
                            </button>
                        </div>

                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </main>
  )
}
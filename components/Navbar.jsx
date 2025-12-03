'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Syne, Manrope } from 'next/font/google'

// --- FONTS ---
const syne = Syne({ subsets: ['latin'], weight: ['700', '800'] })
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500'] })

// --- DATA ---
const menuItems = [
  { label: 'Work', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

// --- VARIANTS ---
const menuVariants = {
  initial: { y: "-100%" },
  animate: { 
    y: "0%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
  },
  exit: { 
    y: "-100%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
  }
}

const marqueeVariants = {
  animate: {
    x: ["0%", "-50%"], 
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
}

// --- SUB-COMPONENT: MARQUEE ITEM ---
// 1. Added 'closeMenu' prop here
const MenuItem = ({ item, index, closeMenu }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + (index * 0.1) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[14vh] sm:h-[16vh] md:h-[18vh] flex items-center justify-center overflow-hidden border-b border-white/10 group cursor-pointer"
    >
      <Link 
        href={item.href} 
        // 2. Added onClick handler here to close the menu
        onClick={closeMenu}
        className="w-full h-full flex items-center justify-center relative"
      >
        
        {/* STATIC TEXT */}
        <div 
            className={`
                absolute z-10 transition-all duration-500 ease-in-out px-4 text-center
                ${isHovered ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}
            `}
        >
            <span className={`${syne.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase text-white tracking-tighter`}>
                {item.label}
            </span>
        </div>

        {/* SCROLLING MARQUEE */}
        <div 
            className={`
                absolute inset-0 flex items-center
                transition-opacity duration-300
                ${isHovered ? 'opacity-100' : 'opacity-0'}
            `}
        >
            <motion.div 
                className="flex whitespace-nowrap gap-4 sm:gap-8 md:gap-12"
                variants={marqueeVariants}
                animate="animate"
            >
                {[...Array(2)].map((_, groupIndex) => (
                    <div key={groupIndex} className="flex gap-4 sm:gap-8 md:gap-12">
                         {[...Array(4)].map((_, i) => (
                            <span 
                                key={i} 
                                className={`${syne.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase text-transparent stroke-text tracking-tighter`}
                            >
                                {item.label}
                            </span>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>

      </Link>
    </motion.div>
  )
}

// --- MAIN COMPONENT ---
export default function NavbarResponsive() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
  }, [isOpen])

  return (
    <>
      {/* --- HEADER --- */}
      <header className={`fixed top-0 left-0 w-full z-[100] px-4 py-4 md:px-12 md:py-6 flex justify-between items-center mix-blend-difference text-white ${manrope.className}`}>
        
        {/* LEFT: LOGO */}
        <Link href="/" className="relative w-32 h-10 sm:w-48 sm:h-14 md:w-64 md:h-20 z-[110]">
             <Image 
                src="/logo.png" 
                alt="Logo" 
                fill 
                className="object-contain object-left invert brightness-0 grayscale"
                priority
             />
             <span className="sr-only">ONEZEROLABS</span> 
        </Link>

        {/* RIGHT: TRIGGER */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="z-[110] focus:outline-none group"
        >
          <span className={`${syne.className} text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide hover:opacity-70 transition-opacity`}>
            {isOpen ? 'Close' : 'Menu'}
          </span>
        </button>

      </header>

      {/* --- MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-black z-[90] flex flex-col justify-center items-center pt-16 md:pt-20"
          >
            
            <div className="w-full flex flex-col">
               {menuItems.map((item, index) => (
                   <MenuItem 
                      key={index} 
                      item={item} 
                      index={index}
                      // 3. Pass the close function down
                      closeMenu={() => setIsOpen(false)} 
                   />
               ))}
            </div>

            {/* Footer */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                className={`absolute bottom-6 md:bottom-8 w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-4 text-white/30 text-[10px] md:text-xs font-semibold uppercase tracking-widest ${manrope.className}`}
            >
                <div className="order-2 md:order-1">OneZeroLabs © {new Date().getFullYear()}</div>
                <div className="flex gap-6 order-1 md:order-2">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 1);
        }
        @media (min-width: 768px) {
          .stroke-text {
             -webkit-text-stroke: 2px rgba(255, 255, 255, 1);
          }
        }
      `}</style>
    </>
  )
}
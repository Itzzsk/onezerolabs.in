"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero({
  eyebrow = "Innovate Without Limits",
  title,
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "#contact",
}) {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full px-4 text-center md:px-8 
      min-h-screen overflow-hidden 
      flex flex-col items-center justify-center
      bg-black text-white pb-20"
    >
      {/* 1. Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-80 h-full w-full 
        bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]
        bg-[size:4rem_4rem] md:bg-[size:6rem_5rem] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />

      {/* 2. THE NEON PLANET */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[50%] z-0 pointer-events-none">
        <div 
          className="
            w-[250vw] h-[400px]
            md:w-[150vw] md:h-[350px]
            lg:w-[120vw] lg:h-[450px]
            
            rounded-[100%] bg-black
            
            shadow-[0_0_120px_#ffffff] 
            md:shadow-[0_0_160px_#ffffff]
            lg:shadow-[0_0_200px_#ffffff]

            bg-[radial-gradient(closest-side,#000_85%,#ffffff)] 
            
            animate-fade-up
          "
        />
      </div>

      {/* 3. Content */}
      <div className="relative z-10 max-w-5xl flex flex-col items-center px-2 md:px-4">
        
        {/* Eyebrow */}
        {eyebrow && (
          <a href="#" className="group mb-6 block">
            <span
              className="text-xs md:text-sm text-gray-400 mx-auto px-5 py-2 
              bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  
              border-[2px] border-white/5 
              rounded-3xl w-fit tracking-tight uppercase flex items-center justify-center"
            >
              {eyebrow}
              <ChevronRight className="inline w-3 h-3 md:w-4 md:h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        )}

        {/* Title */}
        <h1
          className="animate-fade-in text-balance 
          bg-gradient-to-br from-white to-white/40
          bg-clip-text py-2 
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          font-semibold leading-[1.1] tracking-tighter 
          text-transparent"
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-in mt-6 mb-8 md:mb-12 text-balance 
          text-base sm:text-lg md:text-xl 
          tracking-tight text-gray-400 
          max-w-xs sm:max-w-xl md:max-w-2xl"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          {subtitle}
        </p>

        {/* CTA Button */}
        {ctaLabel && (
          <div 
            className="animate-fade-in" 
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <Button
              asChild
              variant="default"
              className="mb-12 w-full sm:w-fit md:min-w-[200px] 
              tracking-tighter text-center text-base md:text-lg 
              bg-white text-black hover:bg-gray-200 
              h-12 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
          </div>
        )}
      </div>

      {/* 4. Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 h-24 w-full pointer-events-none
        bg-gradient-to-t from-black to-transparent"
      />
    </section>
  )
}
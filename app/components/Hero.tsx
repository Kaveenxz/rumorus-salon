'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const bookingSection = document.querySelector('#booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-gradient"
    >
      {/* Glow orb background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-orb glow-orb-gold -top-32 -right-32" />
        <div className="glow-orb glow-orb-gold -bottom-32 -left-32 opacity-20" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '80px', opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-gold mx-auto mb-8"
          />

          {/* Main headline */}
          <motion.h1
            className="heading-xl text-glow"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Where Style Becomes
            <span className="block text-gold mt-2">Art</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-cream/70 max-w-2xl mx-auto mt-6 font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Experience premium hair & beauty at Colombo&apos;s most distinguished salon.
            Where every visit is a masterpiece.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10"
          >
            <button
              onClick={handleBookClick}
              className="btn-primary group text-lg px-10 py-5 cursor-pointer"
            >
              Book Your Appointment
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Trust indicator */}
          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-cream/40 text-sm font-light tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              Premium Since 2005
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              Award-Winning Stylists
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              Luxury Experience
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs uppercase tracking-[0.2em] font-light">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  )
}
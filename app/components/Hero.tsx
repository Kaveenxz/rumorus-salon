'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Star, Crown } from 'lucide-react'

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, rgba(201, 162, 75, 0.06) 0%, transparent 60%), #0a0a0a'
      }}
    >
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gold glow orbs */}
        <div 
          className="absolute -top-32 -right-32 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(201, 162, 75, 0.3) 0%, transparent 70%)',
            width: '600px',
            height: '600px',
          }}
        />
        <div 
          className="absolute -bottom-32 -left-32 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(201, 162, 75, 0.2) 0%, transparent 70%)',
            width: '400px',
            height: '400px',
          }}
        />
        
        {/* Subtle gold lines */}
        <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-px h-32 bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      </div>

      <div className="container-custom relative z-10 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-full px-5 py-2 mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-gold text-[10px] font-medium tracking-[0.2em] uppercase">
              Premium Since 2005
            </span>
            <span className="w-1 h-1 rounded-full bg-gold/30" />
            <span className="text-gold/40 text-[10px] font-light tracking-wider">
              Colombo
            </span>
          </motion.div>

          {/* Main headline with gold accent */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where Style Becomes
            <motion.span 
              className="block mt-2 text-gold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Art
            </motion.span>
          </motion.h1>

          {/* Subtitle with elegant divider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-12 h-[1px] bg-gold/30" />
              <p className="text-cream/50 text-base md:text-lg font-light">
                Experience premium hair & beauty at Colombo's most distinguished salon
              </p>
              <div className="w-12 h-[1px] bg-gold/30" />
            </div>
          </motion.div>

          {/* CTA Button with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10"
          >
            <button
              onClick={handleBookClick}
              className="group relative btn-primary text-base md:text-lg px-10 md:px-12 py-4 md:py-5 cursor-pointer overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Book Your Appointment
                <ArrowRight className="ml-3 w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </button>
          </motion.div>

          {/* Trust indicators with icons */}
          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: Star, label: 'Award Winning', detail: '15+ Awards' },
              { icon: Crown, label: 'Expert Team', detail: '10+ Stylists' },
              { icon: Sparkles, label: 'Luxury Service', detail: 'Premium Experience' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 group cursor-default"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 rounded-full bg-gold/5 border border-gold/10 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <item.icon className="w-3.5 h-3.5 text-gold/60 group-hover:text-gold transition-colors" />
                </div>
                <div className="text-left">
                  <p className="text-cream/40 text-xs font-medium tracking-wide group-hover:text-cream/60 transition-colors">
                    {item.label}
                  </p>
                  <p className="text-cream/20 text-[10px] font-light">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Premium scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-cream/20 font-light">
          Discover More
        </span>
        <div className="relative">
          <div className="w-[1px] h-10 bg-gradient-to-b from-gold/30 to-transparent" />
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold/50"
            animate={{ y: [0, 32, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-gold/5 rounded-tl-xl pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-gold/5 rounded-br-xl pointer-events-none" />
    </section>
  )
}
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Sparkles, Clock, MapPin, Star, Quote } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 30% 50%, rgba(201, 162, 75, 0.03) 0%, transparent 60%), #0a0a0a'
      }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb glow-orb-gold -top-64 -left-64 opacity-10" />
        <div className="glow-orb glow-orb-gold bottom-0 right-0 opacity-5" style={{ width: '300px', height: '300px' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side - Left */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-dark-charcoal border border-gold/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-gold/5 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-7xl font-serif font-bold text-gold/10">2005</span>
                    <p className="text-cream/20 text-sm mt-2 tracking-[0.3em] font-light">ESTABLISHED</p>
                  </div>
                </div>
                <div className="w-full h-full bg-gradient-to-br from-dark-charcoal via-dark to-dark-charcoal" />
                
                {/* Experience badge overlay */}
                <div className="absolute bottom-6 left-6 z-20 bg-dark/90 backdrop-blur-sm border border-gold/20 rounded-xl px-5 py-3">
                  <p className="text-gold text-sm font-medium">20+ Years</p>
                  <p className="text-cream/40 text-[10px] tracking-wider font-light">Of Excellence</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-gold/10 rounded-full -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/5 rounded-full -z-10" />
              
              {/* Small decorative circle with star */}
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-12 h-12 bg-gold/5 rounded-full border border-gold/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-gold/30" />
              </div>
            </div>

            {/* Floating stats card */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-dark-charcoal/90 backdrop-blur-sm border border-gold/10 rounded-xl px-4 py-3 shadow-2xl shadow-gold/5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-gold text-xl font-serif font-bold">500+</p>
                  <p className="text-cream/30 text-[8px] uppercase tracking-wider">Happy Clients</p>
                </div>
                <div className="w-px h-8 bg-gold/10" />
                <div className="text-center">
                  <p className="text-gold text-xl font-serif font-bold">15+</p>
                  <p className="text-cream/30 text-[8px] uppercase tracking-wider">Awards</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content - Right */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.span 
              className="inline-block text-gold text-xs uppercase tracking-[0.3em] font-light mb-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              About Us
            </motion.span>

            {/* Heading */}
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-glow"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Colombo's Most
              <span className="block text-gold mt-1">Distinguished Salon</span>
            </motion.h2>

            {/* Divider */}
            <motion.div 
              className="w-20 h-[2px] bg-gold/50 mt-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: '80px' } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />

            {/* Description */}
            <motion.p 
              className="text-cream/70 mt-6 text-lg leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              Since 2005, Rumours Salon has been the premier destination for luxury
              hair and beauty in Colombo. Located in the heart of Union Place,
              we combine international standards with Sri Lankan warmth to create
              an unparalleled salon experience.
            </motion.p>

            {/* Quote */}
            <motion.div 
              className="mt-6 p-5 bg-gold/5 border-l-2 border-gold/30 rounded-r-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.4 }}
            >
              <Quote className="w-4 h-4 text-gold/30 mb-2" />
              <p className="text-cream/50 text-sm italic font-light leading-relaxed">
                "Our team of award-winning stylists and beauty experts are dedicated
                to bringing your vision to life — whether it's a complete bridal
                transformation, the perfect cut, or a rejuvenating spa treatment."
              </p>
            </motion.div>

            {/* Location info */}
            <motion.div 
              className="flex items-center gap-2 mt-6 text-cream/40 text-sm"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <MapPin className="w-4 h-4 text-gold/50" />
              <span>467, Union Place, Colombo 02</span>
              <span className="w-px h-4 bg-gold/10" />
              <Clock className="w-4 h-4 text-gold/50" />
              <span>Mon - Sat: 9am - 8pm</span>
            </motion.div>

            {/* Trust badges - Premium version */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {[
                { icon: Award, label: 'Award Winning', desc: 'Excellence recognized' },
                { icon: Users, label: 'Expert Team', desc: '10+ specialists' },
                { icon: Sparkles, label: 'Luxury Experience', desc: 'Premium service' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group text-center p-4 bg-dark-charcoal/60 rounded-xl border border-gold/5 hover:border-gold/20 transition-all duration-300 hover:bg-dark-charcoal/80 hover:shadow-gold-glow"
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-gold/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-cream/80 text-xs font-medium">{item.label}</p>
                  <p className="text-cream/30 text-[9px] font-light mt-0.5">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
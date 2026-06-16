'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Scissors,
  Sparkles,
  Crown,
  Hand,
  Footprints,
  ArrowRight,
  Star,
} from 'lucide-react'

const services = [
  {
    id: 1,
    icon: Scissors,
    title: 'Hair Dressing',
    description:
      'Trend cuts, root colour, highlights, colour correction, perm waves, straightening, keratin & oil treatments, hairstyles.',
    slug: 'hair-dressing',
    price: 'From LKR 3,500',
    tag: 'Popular',
  },
  {
    id: 2,
    icon: Sparkles,
    title: 'Beauty',
    description:
      'CACI non-surgical face lift, facials, waxing, threading, makeup.',
    slug: 'beauty',
    price: 'From LKR 2,500',
    tag: 'Luxury',
  },
  {
    id: 3,
    icon: Crown,
    title: 'Bridals',
    description: 'Dressing, makeup, hair — complete bridal transformation.',
    slug: 'bridals',
    price: 'From LKR 15,000',
    tag: 'Premium',
  },
  {
    id: 4,
    icon: Hand,
    title: 'Nail Care',
    description:
      'Manicures, almond manicures, pedicures for elegant hands & feet.',
    slug: 'nail-care',
    price: 'From LKR 1,800',
    tag: 'Essential',
  },
  {
    id: 5,
    icon: Footprints,
    title: 'Foot Spa',
    description: 'Relaxing foot massage and rejuvenating spa treatment.',
    slug: 'foot-spa',
    price: 'From LKR 2,200',
    tag: 'Relaxation',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants:any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const handleBookClick = (serviceSlug: string) => {
    const bookingSection = document.querySelector('#booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 30% 20%, rgba(201, 162, 75, 0.03) 0%, transparent 60%), #0a0a0a'
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb glow-orb-gold -top-64 right-0 opacity-10" />
        <div className="glow-orb glow-orb-gold bottom-0 left-0 opacity-5" style={{ width: '400px', height: '400px' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header with decorative elements */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block text-gold text-xs uppercase tracking-[0.3em] font-light mb-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            What We Offer
          </motion.span>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="heading-lg text-glow">
              Exclusive <span className="text-gold">Services</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center gap-3 mt-4"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 'auto', opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold/50" />
            <Star className="w-4 h-4 text-gold/50" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold/50" />
          </motion.div>
          
          <motion.p 
            className="text-cream/50 mt-6 text-base font-light max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Tailored beauty experiences for the discerning client
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredId === service.id
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Card glow effect */}
                <motion.div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={isHovered ? { 
                    scale: [1, 1.02, 1],
                    opacity: [0, 0.5, 0]
                  } : { opacity: 0 }}
                  transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
                />
                
                <div className={`relative card-glow p-8 transition-all duration-500 ${
                  isHovered ? 'transform -translate-y-2 border-gold/30 shadow-gold-glow-hover' : ''
                }`}>
                  <div className="flex flex-col h-full">
                    {/* Icon with ring */}
                    <div className="relative w-16 h-16 mb-5">
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-gold/10"
                        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div 
                        className="absolute inset-0 rounded-full border border-gold/20"
                        animate={isHovered ? { 
                          scale: 1.2,
                          opacity: [0.2, 0.5, 0.2],
                          borderColor: ['rgba(201,162,75,0.2)', 'rgba(201,162,75,0.5)', 'rgba(201,162,75,0.2)']
                        } : { scale: 1 }}
                        transition={isHovered ? { duration: 2, repeat: Infinity } : { duration: 0.3 }}
                      />
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Icon className={`w-7 h-7 transition-all duration-500 ${
                          isHovered ? 'text-gold-light scale-110 rotate-6' : 'text-gold'
                        }`} />
                      </div>
                    </div>

                    {/* Title with tag */}
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className={`heading-md transition-colors duration-300 ${
                        isHovered ? 'text-gold' : 'text-cream'
                      }`}>
                        {service.title}
                      </h3>
                      {service.tag && (
                        <span className="flex-shrink-0 text-[10px] uppercase tracking-wider text-gold/60 bg-gold/10 px-3 py-1 rounded-full">
                          {service.tag}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-cream/50 text-sm leading-relaxed mt-2 flex-1">
                      {service.description}
                    </p>

                    {/* Price indicator */}
                    {service.price && (
                      <p className="text-gold/40 text-xs font-light mt-3 tracking-wider">
                        {service.price}
                      </p>
                    )}

                    {/* Book button */}
                    <motion.button
                      onClick={() => handleBookClick(service.slug)}
                      className="mt-6 inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium text-sm transition-colors group/btn w-fit"
                      whileHover={{ x: 4 }}
                    >
                      <span className="relative">
                        Book Now
                        <motion.span 
                          className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-gold/30"
                          initial={{ width: 0 }}
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                      <ArrowRight className={`w-4 h-4 transition-all duration-300 ${
                        isHovered ? 'translate-x-1' : ''
                      }`} />
                    </motion.button>

                    {/* Decorative number */}
                    <div className="absolute top-4 right-4 text-5xl font-serif font-bold text-gold/5 select-none">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        
      </div>
    </section>
  )
}
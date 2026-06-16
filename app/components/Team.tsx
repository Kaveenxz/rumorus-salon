'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { Star, Award, Users, Quote, ArrowRight } from 'lucide-react'

interface TeamMember {
  id: number
  name: string
  role: string
  specialty: string
  image: string
  experience?: string
  quote?: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Perera',
    role: 'Creative Director',
    specialty: 'Hair & Bridal Styling',
    image: '/images/team/sarah.jpg',
    experience: '15+ Years',
    quote: 'Creating timeless beauty through art and precision.',
  },
  {
    id: 2,
    name: 'Michael Fernando',
    role: 'Senior Stylist',
    specialty: 'Colour & Texture',
    image: '/images/team/michael.jpg',
    experience: '12+ Years',
    quote: 'Transforming hair into a canvas of colour and light.',
  },
  {
    id: 3,
    name: 'Amara Jayawardena',
    role: 'Beauty Specialist',
    specialty: 'Facials & CACI Lift',
    image: '/images/team/amara.jpg',
    experience: '10+ Years',
    quote: 'Revealing natural radiance through advanced skincare.',
  },
  {
    id: 4,
    name: 'Priya Rajapaksa',
    role: 'Nail Artist',
    specialty: 'Manicures & Pedicures',
    image: '/images/team/priya.jpg',
    experience: '8+ Years',
    quote: 'Every detail matters in the art of nail design.',
  },
  {
    id: 5,
    name: 'Nuwan Wickramasinghe',
    role: 'Senior Stylist',
    specialty: 'Hair Dressing & Keratin',
    image: '/images/team/nuwan.jpg',
    experience: '11+ Years',
    quote: 'Healthy hair is the foundation of beautiful styling.',
  },
  {
    id: 6,
    name: 'Dilini Abeysekera',
    role: 'Makeup Artist',
    specialty: 'Bridal & Editorial Makeup',
    image: '/images/team/dilini.jpg',
    experience: '9+ Years',
    quote: 'Enhancing natural beauty for unforgettable moments.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants:any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section
      id="team"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 70% 80%, rgba(201, 162, 75, 0.03) 0%, transparent 50%), #0a0a0a'
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb glow-orb-gold -top-64 left-1/2 -translate-x-1/2 opacity-10" style={{ width: '500px', height: '500px' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header with enhanced styling */}
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
            Our Artists
          </motion.span>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="heading-lg text-glow">
              Meet the <span className="text-gold">Team</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center gap-3 mt-4"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 'auto', opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold/50" />
            <Users className="w-4 h-4 text-gold/50" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold/50" />
          </motion.div>
          
          <motion.p 
            className="text-cream/50 mt-6 text-base font-light max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Colombo&apos;s finest stylists and beauty experts, dedicated to your transformation
          </motion.p>
        </motion.div>

        {/* Team grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member) => {
            const isHovered = hoveredId === member.id
            
            return (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group"
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className={`relative bg-dark-charcoal/60 rounded-2xl overflow-hidden border transition-all duration-500 ${
                  isHovered 
                    ? 'border-gold/40 shadow-gold-glow-hover transform -translate-y-2' 
                    : 'border-gold/5 hover:border-gold/20'
                }`}>
                  {/* Glow effect on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                  />
                  
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-dark-charcoal">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent opacity-80 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    
                    {/* Image */}
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        isHovered ? 'scale-110' : 'scale-100'
                      }`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={member.id <= 3}
                    />
                    
                    {/* Experience badge */}
                    {member.experience && (
                      <motion.div 
                        className="absolute top-4 right-4 z-20 bg-dark/80 backdrop-blur-sm border border-gold/20 rounded-full px-3 py-1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-gold text-[10px] font-medium tracking-wider">
                          {member.experience}
                        </span>
                      </motion.div>
                    )}
                    
                    {/* Gold border accent on hover */}
                    <div className={`absolute inset-0 border-2 border-gold transition-all duration-500 z-20 pointer-events-none ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`} />
                    
                    {/* Social/action overlay on hover */}
                    <motion.div 
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <button className="w-8 h-8 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 flex items-center justify-center hover:bg-gold/30 transition-colors">
                        <Star className="w-3.5 h-3.5 text-gold" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 flex items-center justify-center hover:bg-gold/30 transition-colors">
                        <Award className="w-3.5 h-3.5 text-gold" />
                      </button>
                    </motion.div>
                  </div>

                  {/* Info */}
                  <div className="p-6 relative">
                    {/* Quote icon */}
                    {member.quote && (
                      <Quote className="absolute top-4 right-4 w-4 h-4 text-gold/20" />
                    )}
                    
                    <h3 className={`text-xl font-serif font-semibold transition-colors duration-300 ${
                      isHovered ? 'text-gold' : 'text-cream'
                    }`}>
                      {member.name}
                    </h3>
                    
                    <p className="text-gold/70 text-sm font-medium mt-1 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold/50" />
                      {member.role}
                    </p>
                    
                    <p className="text-cream/40 text-sm mt-2 font-light">
                      {member.specialty}
                    </p>
                    
                    {/* Quote on hover */}
                    {member.quote && (
                      <motion.p 
                        className="text-cream/40 text-xs italic mt-3 border-t border-gold/10 pt-3"
                        initial={{ opacity: 0, height: 0 }}
                        animate={isHovered ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        &ldquo;{member.quote}&rdquo;
                      </motion.p>
                    )}
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
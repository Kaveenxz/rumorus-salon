'use client'

import { motion } from 'framer-motion'
import { Scissors, MapPin, Phone, Mail, Clock } from 'lucide-react'
import Link from 'next/link'

// Custom Social Icons as SVG components
const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const YouTubeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const TikTokIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.013 2.61-.018 3.91-.02.016 1.135.07 2.27.16 3.405.307 1.56.996 3.005 2.04 4.12 1.05 1.12 2.42 1.88 3.94 2.13v3.49c-1.36-.16-2.7-.62-3.92-1.29-.36-.2-.72-.42-1.05-.67v6.29c-.02 1.51-.56 2.96-1.55 4.05-.99 1.09-2.35 1.74-3.84 1.85-1.5.11-2.93-.3-4.11-1.18-1.49-1.1-2.35-2.82-2.32-4.65.03-1.85.94-3.55 2.43-4.6 1.21-.85 2.71-1.25 4.17-1.12v3.44c-.74-.09-1.49-.29-2.17-.59-.74-.32-1.4-.82-1.9-1.45-.5-.63-.82-1.38-.92-2.18-.11-.81-.04-1.63.2-2.4.37-1.17 1.12-2.17 2.12-2.84.99-.67 2.16-.98 3.35-.9z"/>
  </svg>
)

const LinkedInIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <footer id="contact" className="bg-dark-charcoal border-t border-gold/5 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb glow-orb-gold -bottom-64 -right-64 opacity-5" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 pb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <Scissors className="w-6 h-6 text-gold" />
              <span className="text-2xl font-serif font-bold tracking-wider text-cream">
                Rumours
                <span className="text-gold">.</span>
              </span>
            </div>
            <p className="text-cream/50 text-sm font-light leading-relaxed">
              Where style becomes art. Premium hair & beauty in the heart of Colombo.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com/rumours.hair.beauty"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/30 hover:text-gold transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/30 hover:text-gold transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/30 hover:text-gold transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/30 hover:text-gold transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/30 hover:text-gold transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-cream font-serif text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Services', 'Team', 'Gallery', 'Booking'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-cream/40 hover:text-gold transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-cream font-serif text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-cream/50 text-sm hover:text-cream/70 transition-colors group">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>467, Union Place, Colombo 02, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3 text-cream/50 text-sm hover:text-cream/70 transition-colors group">
                <Phone className="w-4 h-4 text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+94773402076" className="hover:text-gold transition-colors">+94 077 3402076</a>
              </li>
              <li className="flex items-center gap-3 text-cream/50 text-sm hover:text-cream/70 transition-colors group">
                <Mail className="w-4 h-4 text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@rumours.lk" className="hover:text-gold transition-colors">info@rumours.lk</a>
              </li>
              <li className="flex items-center gap-3 text-cream/40 text-sm">
                <Clock className="w-4 h-4 text-gold/40 flex-shrink-0" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </motion.div>

          {/* Map */}
          <motion.div variants={itemVariants}>
            <h3 className="text-cream font-serif text-lg mb-4">Find Us</h3>
            <div className="rounded-xl overflow-hidden border border-gold/10 h-48 bg-dark relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.942470268584!2d79.858258!3d6.913021999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2597f8e0d2b2f%3A0x8e8e8e8e8e8e8e8e!2s467%20Union%20Pl%2C%20Colombo%2002!5e0!3m2!1sen!2slk!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rumours Salon Location"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar - Premium */}
        <motion.div 
          className="pt-8 pb-6 border-t border-gold/5 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-cream/25 text-sm font-light">
              &copy; {currentYear} Rumours Salon. All rights reserved.
            </p>
            <span className="hidden sm:block w-px h-4 bg-gold/10" />
            <p className="text-cream/15 text-xs tracking-wider">
              Premium Hair & Beauty • Colombo, Sri Lanka
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-cream/15 text-[10px] tracking-wider">
            <a href="#" className="hover:text-gold/30 transition-colors">Privacy Policy</a>
            <span className="w-px h-3 bg-gold/5" />
            <a href="#" className="hover:text-gold/30 transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
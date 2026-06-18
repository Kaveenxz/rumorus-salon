'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  aspect: 'portrait' | 'landscape'
}
const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80',
      alt: 'Bridal hair styling',
      category: 'Bridal',
      aspect: 'portrait',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80',
      alt: 'Colour transformation',
      category: 'Hair',
      aspect: 'landscape',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=80',
      alt: 'Nail art design',
      category: 'Nails',
      aspect: 'portrait',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&q=80',
      alt: 'Facial treatment',
      category: 'Beauty',
      aspect: 'landscape',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&q=80',
      alt: 'Wedding makeup',
      category: 'Bridal',
      aspect: 'portrait',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&q=80',
      alt: 'Hair styling',
      category: 'Hair',
      aspect: 'landscape',
    },
  ];
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id="gallery"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, rgba(201, 162, 75, 0.03) 0%, transparent 60%), #0a0a0a'
      }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb glow-orb-gold -top-64 right-0 opacity-5" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
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
            Portfolio
          </motion.span>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="heading-lg text-glow">
              Our <span className="text-gold">Work</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center gap-3 mt-4"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: 'auto', opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-1 h-1 rounded-full bg-gold/50" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold/50" />
          </motion.div>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`relative overflow-hidden rounded-xl cursor-pointer group bg-dark-charcoal ${
                image.aspect === 'portrait' ? 'row-span-2' : 'row-span-1'
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              onClick={() => setSelectedImage(image)}
            >
              <div
                className="relative w-full"
                style={{
                  paddingBottom: image.aspect === 'portrait' ? '130%' : '75%',
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 flex items-center justify-center mb-2"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <ZoomIn className="w-5 h-5 text-gold" />
                  </motion.div>
                  <p className="text-cream/80 text-xs font-medium tracking-wide">
                    {image.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-cream/60 hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ 
                type: 'spring',
                stiffness: 300,
                damping: 25
              }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
                priority
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark via-dark/60 to-transparent rounded-b-lg">
                <p className="text-cream text-lg font-serif">
                  {selectedImage.alt}
                </p>
                <p className="text-gold text-sm font-light tracking-wider">
                  {selectedImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Calendar, Clock, User, Phone, Mail, ChevronDown, Sparkles, ArrowRight } from 'lucide-react'

interface BookingFormData {
  service: string
  teamMember: string
  preferredTime: string
  name: string
  phone: string
  email: string
}

const services = [
  { value: 'hair-dressing', label: 'Hair Dressing' },
  { value: 'beauty', label: 'Beauty' },
  { value: 'nail-care', label: 'Nail Care' },
  { value: 'foot-spa', label: 'Foot Spa' },
  { value: 'bridals', label: 'Bridals' },
]

const teamMembers = [
  { value: 'sarah-perera', label: 'Sarah Perera' },
  { value: 'michael-fernando', label: 'Michael Fernando' },
  { value: 'amara-jayawardena', label: 'Amara Jayawardena' },
  { value: 'priya-rajapaksa', label: 'Priya Rajapaksa' },
  { value: 'nuwan-wickramasinghe', label: 'Nuwan Wickramasinghe' },
  { value: 'dilini-abeysekera', label: 'Dilini Abeysekera' },
]

const timeSlots = [
  { value: 'morning', label: 'Morning (9am - 12pm)' },
  { value: 'afternoon', label: 'Afternoon (12pm - 4pm)' },
  { value: 'evening', label: 'Evening (4pm - 8pm)' },
]

export default function Booking() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>()

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast.success('Appointment booked! We\'ll confirm shortly.')
      reset()
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="booking"
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, rgba(201, 162, 75, 0.05) 0%, transparent 60%), #0a0a0a'
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb glow-orb-gold -top-32 left-1/2 -translate-x-1/2 opacity-20" style={{ width: '400px', height: '400px' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-light">
              Secure Your Visit
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 text-glow">
              Book Your <span className="text-gold">Appointment</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold/50" />
              <Sparkles className="w-4 h-4 text-gold/50" />
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <p className="text-cream/50 mt-4 text-sm font-light">
              Reserve your experience at Colombo's premier salon
            </p>
          </motion.div>

          {/* Booking Form - Perfect Balance */}
          <motion.div
            className="card-glow p-6 md:p-10"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Service */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-cream/80 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gold" />
                    Service Required
                  </label>
                  <div className="relative">
                    <select
                      {...register('service', { required: 'Please select a service' })}
                      className="w-full bg-dark-charcoal border border-gold/20 rounded-lg px-4 py-3 text-cream text-sm appearance-none focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40 pointer-events-none" />
                  </div>
                  {errors.service && (
                    <p className="text-red-400 text-xs">{errors.service.message}</p>
                  )}
                </div>

                {/* Team Member */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-cream/80 flex items-center gap-2">
                    <User className="w-4 h-4 text-gold" />
                    Preferred Stylist
                  </label>
                  <div className="relative">
                    <select
                      {...register('teamMember', { required: 'Please select a stylist' })}
                      className="w-full bg-dark-charcoal border border-gold/20 rounded-lg px-4 py-3 text-cream text-sm appearance-none focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Select a stylist</option>
                      {teamMembers.map((member) => (
                        <option key={member.value} value={member.value}>
                          {member.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40 pointer-events-none" />
                  </div>
                  {errors.teamMember && (
                    <p className="text-red-400 text-xs">{errors.teamMember.message}</p>
                  )}
                </div>
              </div>

              {/* Preferred Time */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-cream/80 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold" />
                  Preferred Time
                </label>
                <div className="relative">
                  <select
                    {...register('preferredTime', { required: 'Please select a time' })}
                    className="w-full bg-dark-charcoal border border-gold/20 rounded-lg px-4 py-3 text-cream text-sm appearance-none focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((time) => (
                      <option key={time.value} value={time.value}>
                        {time.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40 pointer-events-none" />
                </div>
                {errors.preferredTime && (
                  <p className="text-red-400 text-xs">{errors.preferredTime.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-cream/80 flex items-center gap-2">
                    <User className="w-4 h-4 text-gold" />
                    Full Name
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-dark-charcoal border border-gold/20 rounded-lg px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs">{errors.name.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-cream/80 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gold" />
                    Phone Number
                  </label>
                  <input
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9+\-\s()]{10,15}$/,
                        message: 'Please enter a valid phone number',
                      },
                    })}
                    type="tel"
                    placeholder="+94 77 340 2076"
                    className="w-full bg-dark-charcoal border border-gold/20 rounded-lg px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs">{errors.phone.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-cream/80 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gold" />
                    Email Address
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email',
                      },
                    })}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-dark-charcoal border border-gold/20 rounded-lg px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <motion.div
                className="pt-3"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <span className="w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                      Booking...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Book Your Appointment
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </button>
              </motion.div>

              <p className="text-center text-cream/30 text-xs font-light tracking-wider">
                We'll confirm your booking within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
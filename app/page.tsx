'use client'

import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Team from './components/Team'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import About from './components/About'
import Footer from './components/Footer'

export default function Home() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href')!)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    })
  }, [])

  return (
    <main className="bg-dark min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Gallery />
      <Booking />
      <About />
      <Footer />
    </main>
  )
}
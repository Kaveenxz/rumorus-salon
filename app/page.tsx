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
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
  
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
  
        const href = anchor.getAttribute('href')
        if (!href) return
  
        const target = document.querySelector(href)
  
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
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
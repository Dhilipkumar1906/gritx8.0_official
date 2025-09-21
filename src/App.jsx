import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from  "./components/AboutSection"


export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-gritxPanel to-gritxBg text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* spacer to allow scrolling */}
      <div className="h-[120vh]"></div>
    </div>
  )
}

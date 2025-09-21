import React from "react"
import Background from "./components/Background"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
// ... other imports

function App() {
  return (
    <div className="relative">
      <Background /> {/* 🔥 Always behind everything */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* more sections */}
    </div>
  )
}

export default App

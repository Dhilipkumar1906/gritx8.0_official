import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass =
    "relative text-md font-semibold px-3 py-1 transition-colors duration-300 text-slate-200 hover:text-white after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-sky-400 after:to-cyan-300 after:left-0 after:-bottom-0.5 after:rounded-full after:transition-all after:duration-300 hover:after:w-full"

  return (
    <div
      className={`fixed left-1/2 transform -translate-x-1/2 w-[92%] max-w-6xl z-50 top-4 transition-all duration-500`}
    >
      <div
         className="flex items-center justify-between px-5 py-3 rounded-3xl shadow-lg 
             border border-white/10 backdrop-blur-lg 
             bg-gradient-to-r from-slate-800/80 via-sky-900/60 to-slate-700/70 
             transform origin-center animate-navOpen"
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-cyan-300 rounded-xl flex items-center justify-center font-extrabold text-slate-900 shadow-md shadow-sky-500/30">
            G8
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
            GRITX 8.0
          </span>
        </div>

        {/* Links */}
        <div className="hidden sm:flex items-center gap-4">
          <a className={linkClass} href="#home">
            Home
          </a>
           <a className={linkClass} href="#about">
            About
          </a>
          <a className={linkClass} href="#events">
            Events
          </a>
          <a className={linkClass} href="#sponsors">
            Sponsors
          </a>
          <a className={linkClass} href="#ambassadors">
            Ambassadors
          </a>
         
          <a className={linkClass} href="#contact">
            Contact
          </a>
        </div>

        {/* Button */}
        <div>
          <button className="text-sm font-semibold px-5 py-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-900 shadow-md shadow-sky-400/30 hover:shadow-sky-400/50 hover:scale-105 transform transition-all duration-300">
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}

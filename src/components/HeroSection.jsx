import React from 'react'
import Countdown from './Countdown'

const logos = [
  '/logo1.png','/logo2.png','/logo3.png','/logo4.png',
  '/logo5.png','/logo6.png','/logo7.png','/logo8.png'
]

export default function HeroSection(){
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col items-center px-6 md:px-16">
      
      {/* College Title */}
      <div className="text-center mt-28 mb-10 px-4 space-y-2 animate-fadeInUp">
        <h2 className="text-2xl md:text-4xl font-serif italic font-bold 
                       text-slate-100 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
          Sri Sairam Engineering College
        </h2>
        <p className="text-lg md:text-xl font-medium text-cyan-300 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)] tracking-wide">
          Presents
        </p>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between">
        
        {/* LEFT */}
        <div className="flex-1 pr-6 md:pr-12 text-center md:text-left">
     <h1 className="text-[clamp(40px,8vw,140px)] leading-[0.85] font-extrabold text-white flex gap-2">
  {"GRITX".split("").map((ch, i) => (
    <span key={i} className="inline-block animate-wave" style={{ animationDelay: `${i * 0.2}s` }}>
      {ch}
    </span>
  ))}
  <span className="text-gritxAccent animate-wave" style={{ animationDelay: "1s" }}>8.0</span>
</h1>



          <p className="mt-4 text-slate-300 max-w-xl mx-auto md:mx-0">
            An electrifying campus event — workshops, competitions & showcases. Join us on October 16.
          </p>
        </div>

        {/* RIGHT: orbit logos */}
        <div className="w-[360px] h-[360px] relative flex-shrink-0 hidden sm:flex items-center justify-center mt-10 md:mt-0">
          <div className="center-box w-[160px] h-[160px] bg-slate-600 rounded-xl flex items-center justify-center text-white font-bold shadow-2xl">
            <img src="/main-logo.png" alt="main" className="w-[110px] h-[110px] object-contain" />
          </div>

          {logos.map((src,i)=>{
            const angle = (i / logos.length) * Math.PI * 2
            const radius = 140
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            const style = { transform: `translate(${x}px, ${y}px)` }
            return (
              <img 
                key={i} 
                src={src} 
                alt={`logo-${i+1}`} 
                className="logo-item w-20 h-20 rounded-full object-cover absolute shadow-xl hover:scale-110 transition-transform duration-300" 
                style={style} 
              />
            )
          })}
        </div>
      </div>

      {/* Countdown centered below */}
      <div className="mt-8 flex justify-center">
        <Countdown />
      </div>    
    </section>
  )
}

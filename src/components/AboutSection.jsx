import React from "react"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center px-6 md:px-16 py-20 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="space-y-6 animate-fadeInLeft">
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text 
                         bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-md">
            About the Event
          </h2>
          <p className="text-slate-300 leading-relaxed text-lg max-w-xl">
            <span className="text-cyan-400 font-semibold">GRITX 8.0</span> is
            the annual technical symposium of{" "}
            <span className="italic">Sri Sairam Engineering College</span>.  
            A platform where innovation meets creativity, featuring workshops,
            hackathons, competitions, and exhibitions — all in one electrifying
            day on <strong>October 16</strong>.
          </p>
          <p className="text-slate-400 leading-relaxed">
            This year, we push the boundaries further with more engaging
            sessions, premium sponsors, and industry-driven showcases. Get ready
            to learn, compete, and network with the best minds.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end animate-fadeInRight">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-slate-800/40 
                          border border-cyan-400/40 shadow-[0_0_20px_rgba(56,189,248,0.5)] 
                          flex items-center justify-center overflow-hidden">
            <img
              src="/main-logo.png"
              alt="Event Logo"
              className="w-40 md:w-56 h-auto object-contain animate-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

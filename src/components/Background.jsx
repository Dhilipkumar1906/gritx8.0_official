// src/components/Background.jsx
import React, { useEffect } from "react"

export default function Background() {
 
  useEffect(() => {
    const glow = document.getElementById("mouse-glow")
    const move = (e) => {
      if (glow) {
        glow.style.left = `${e.clientX - 100}px`
        glow.style.top = `${e.clientY - 100}px`
      }
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {/* 🔵 Mouse Glow */}
      <div
  id="mouse-glow"
  className="absolute w-[300px] h-[300px] rounded-full blur-3xl pointer-events-none transition-all duration-300 animate-glow"
  style={{ left: "50%", top: "50%" }}
></div>


      {/* 🔹 Falling Streaks */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[140px] bg-gradient-to-b from-blue-900 to-transparent animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  )
}

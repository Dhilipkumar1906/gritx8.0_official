import React, { useEffect, useState } from "react"

export default function Countdown() {
  const calculateTimeLeft = () => {
    const target = new Date("2025-10-16T00:00:00").getTime()
    const now = new Date().getTime()
    const diff = target - now

    return {
      days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
      hours: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
      minutes: Math.max(Math.floor((diff / 1000 / 60) % 60), 0),
      seconds: Math.max(Math.floor((diff / 1000) % 60), 0),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [selected, setSelected] = useState(null) // modal control

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  const parts = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <>
      {/* Countdown Boxes */}
      <div className="mt-8 flex justify-center gap-6">
        {parts.map((p, i) => (
          <div
            key={i}
            onClick={() => setSelected(p)} // open modal
            className="cursor-pointer w-24 h-28 flex flex-col items-center justify-center 
                       bg-white/10 backdrop-blur-md border border-sky-400/40 rounded-lg 
                       shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <span className="text-3xl font-extrabold text-cyan-300 drop-shadow-md">
              {p.value}
            </span>
            <span className="mt-2 text-xs uppercase tracking-widest text-slate-300">
              {p.label}
            </span>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selected && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-slate-900 rounded-2xl p-8 w-[90%] max-w-md shadow-2xl relative animate-fadeInUp">
            {/* Close button */}
           

            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              {selected.label}
            </h2>
            <p className="text-slate-300 text-lg">
              Only <span className="text-cyan-300 font-bold">{selected.value}</span>{" "}
              {selected.label.toLowerCase()} left until the big day! 🚀
            </p>
          </div>
        </div>
      )}
    </>
  )
}

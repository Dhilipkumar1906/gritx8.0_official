import React from "react";
import { Link } from "react-router-dom";

const events = [
  { id: 1, title: "Escape Room", emoji: "🧩", desc: "Join the ultimate challenge of riddles and mysteries. Unlock clues, solve puzzles, and escape before time runs out!", url: "/escape-room" },
  { id: 2, title: "Voice Vault", emoji: "🎙", desc: "Step into the world of vintage Tamil music. Identify classic songs with quirky clues and prove your melody mastery.", url: "/voice-vault" },
  { id: 3, title: "Cini Verse", emoji: "🎬", desc: "Decode the cinema universe. Guess the movie from clever hints and iconic references.", url: "/cini-verse" },
  { id: 4, title: "Workshop on Gen AI", emoji: "🤖", desc: "Explore the power of Generative AI. Hands-on sessions to learn, create, and innovate with next-gen technology.", url: "/workshop" },
  { id: 5, title: "E-Football Challenge", emoji: "⚽", desc: "Test your football skills on mobile. Compete in exciting online matches and claim victory on the virtual field.", url: "/e-football" },
  { id: 6, title: "SprintX", emoji: "⚡", desc: "A high-energy set of fun games. Speed, precision, and focus decide the champion.", url: "/sprintx" },
  { id: 7, title: "Monopoly Mania", emoji: "🎲", desc: "Enter the world of strategy and deals. Build, trade, and outsmart opponents to dominate the board.", url: "/monopoly-mania" },
  { id: 8, title: "Web Book Series", emoji: "📚", desc: "Celebrate stories and creativity. A book-themed event with insights, discussions, and engaging activities.", url: "/web-book-series" },
];

const backdropColors = [
  "#ff2d55", // bright pink
  "#ff9a00", // orange
  "#d9ff00", // neon yellow/green
  "#00c2ff", // cyan
  "#7ee787", // mint green
  "#ff7a7a", // salmon
  "#ffd166", // warm yellow
  "#9b8cff", // lavender
];

export default function EventsPage() {
  return (
    <section
      id="events"
      className="relative w-full min-h-screen flex flex-col items-center px-6 md:px-16 py-12 bg-transparent text-white"
    >
      {/* Header */}
      <div className="text-center mb-12 max-w-4xl animate-fadeInUp">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text 
                         bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-md ">Explore Events</h2>
        <p className="text-lg md:text-xl text-gray-300">
          Check out all our workshops, competitions, and fun challenges lined up for you.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 w-full max-w-6xl">
        {events.map((ev, idx) => {
          const color = backdropColors[idx % backdropColors.length];
          return (
            <div key={ev.id} className="relative min-h-[350px] flex items-center justify-center">
              {/* Colored backdrop behind the card */}
              <div
                className="absolute w-[95%] h-36 bottom-[-6%] left-[2.5%] rounded-md"
                style={{
                  backgroundColor: color,
                  transform: "rotate(0deg)",
                  zIndex: 1,
                }}
                aria-hidden="true"
              />

              {/* Actual card */}
              <div className="relative bg-white text-black rounded-xl shadow-lg p-6 transform rotate-[-6deg] hover:rotate-0 transition-transform duration-300 z-10 min-h-[350px]">
                <div className="text-3xl mb-3">{ev.emoji}</div>
                <h3 className="text-2xl font-bold mb-2">{ev.title}</h3>
                <p className="text-sm mb-12">{ev.desc}</p>

                {/* Learn More button */}
                <Link
                  to={ev.url}
                  className="absolute bottom-4 left-4 bg-gray-800 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-gray-700 transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
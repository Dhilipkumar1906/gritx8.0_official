import React from "react";
import { Link } from "react-router-dom";

export default function EscapeRoom() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 text-black px-6 md:px-16 py-12">
      {/* Back Button */}
      <Link
        to="/"
        className="self-start mb-6 text-blue-600 font-semibold hover:underline"
      >
        ← Back to Events
      </Link>

      {/* Event Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4">Escape Room</h1>
        <div className="text-6xl mb-4">🧩</div>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Join the ultimate challenge of riddles and mysteries. Unlock clues, solve puzzles, and escape before time runs out!
        </p>
      </div>

      {/* Optional Event Details Section */}
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Event Details</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Team Size: 2-5 members</li>
          <li>Duration: 60 minutes</li>
          <li>Difficulty: Medium to Hard</li>
          <li>Location: Room 101, Main Building</li>
          <li>Prizes for top 3 teams!</li>
        </ul>
      </div>
    </div>
  );
}
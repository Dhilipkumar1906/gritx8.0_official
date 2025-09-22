import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Background from "./components/Background";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EventsPage from "./components/EventsPage";

// Individual event pages
import EscapeRoom from "./components/events/EscapeRoom";
import VoiceVault from "./components/events/VoiceVault";
import CiniVerse from "./components/events/CiniVerse";
import WorkshopGenAI from "./components/events/Workshop";
import EFootball from "./components/events/EFootball";
import SprintX from "./components/events/Sprintx";
import MonopolyMania from "./components/events/Monopoly";
import WebBookSeries from "./components/events/WebSeries";

function App() {
  return (
    <Router>
      <Background /> {/* Always behind everything */}
      <Navbar />
      <Routes>
        {/* Main landing page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              
              <AboutSection />
              <EventsPage />
              {/* Add other sections here */}
            </>
          }
        />

        {/* Individual event pages */}
        <Route path="/escape-room" element={<EscapeRoom />} />
        <Route path="/voice-vault" element={<VoiceVault />} />
        <Route path="/cini-verse" element={<CiniVerse />} />
        <Route path="/workshop" element={<WorkshopGenAI />} />
        <Route path="/e-football" element={<EFootball />} />
        <Route path="/sprintx" element={<SprintX />} />
        <Route path="/monopoly-mania" element={<MonopolyMania />} />
        <Route path="/web-book-series" element={<WebBookSeries />} />
      </Routes>
    </Router>
  );
}

export default App;
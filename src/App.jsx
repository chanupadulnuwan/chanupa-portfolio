import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';
import GhostCursor from './components/GhostCursor';

function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="portfolio-app">
      {/* Interactive Ghost Cursor Animation */}
      <GhostCursor
        trailLength={30}
        inertia={0.37}
        grainIntensity={0.06}
        bloomStrength={0.75}
        bloomRadius={1}
        brightness={1}
        color="#FD6F00"
        edgeIntensity={0}
      />

      <Navbar />
      <main>
        <Hero onOpenCV={() => setIsCVModalOpen(true)} />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
}

export default App;

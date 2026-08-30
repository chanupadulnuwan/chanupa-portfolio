import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [projectsViewMode, setProjectsViewMode] = useState('top'); // 'top' or 'all'

  const showAllProjects = () => {
    setProjectsViewMode('all');
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app">
      <Navbar onProjectsClick={showAllProjects} />
      <main>
        <Hero onOpenCV={() => setIsCVModalOpen(true)} />
        <About />
        <Projects
          viewMode={projectsViewMode}
          setViewMode={setProjectsViewMode}
        />
        <Contact />
      </main>
      <Footer />
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
}

export default App;

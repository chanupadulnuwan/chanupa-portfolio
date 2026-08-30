import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutMePage from './components/AboutMePage';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'about-me'
  const [projectsViewMode, setProjectsViewMode] = useState('top'); // 'top' or 'all'

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about-me') {
        setCurrentView('about-me');
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToFullAbout = () => {
    setCurrentView('about-me');
    window.history.pushState(null, '', '#about-me');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    window.history.pushState(null, '', '#home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showAllProjects = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      window.history.pushState(null, '', '#projects');
    }
    setProjectsViewMode('all');
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (currentView === 'about-me') {
    return (
      <div className="portfolio-app">
        <AboutMePage onBackToHome={navigateToHome} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="portfolio-app">
      <Navbar
        onProjectsClick={showAllProjects}
        onAboutClick={navigateToFullAbout}
      />
      <main>
        <Hero onOpenCV={() => setIsCVModalOpen(true)} />
        <About onOpenFullAbout={navigateToFullAbout} />
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

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
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about-me') {
        setCurrentView('about-me');
      } else if (hash === '#projects') {
        setCurrentView('projects');
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

  const navigateToProjects = () => {
    setCurrentView('projects');
    window.history.pushState(null, '', '#projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    window.history.pushState(null, '', '#home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      window.history.pushState(null, '', '#contact');
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app">
      <Navbar
        currentView={currentView}
        onAboutClick={navigateToFullAbout}
        onProjectsClick={navigateToProjects}
        onHomeClick={navigateToHome}
        onContactClick={handleContactClick}
      />
      <main>
        {currentView === 'about-me' ? (
          <AboutMePage onBackToHome={navigateToHome} />
        ) : currentView === 'projects' ? (
          <div style={{ paddingTop: '100px' }}>
            <Projects
              viewMode="all"
              onExploreAll={navigateToProjects}
              isDedicatedPage={true}
              onBackToHome={navigateToHome}
            />
          </div>
        ) : (
          <>
            <Hero onOpenCV={() => setIsCVModalOpen(true)} />
            <About onOpenFullAbout={navigateToFullAbout} />
            <Projects
              viewMode="top"
              onExploreAll={navigateToProjects}
            />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import AllProjectsPage from './components/AllProjectsPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#all-projects' || hash.startsWith('#project/')) {
        setCurrentView('all-projects');
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToAllProjects = () => {
    setCurrentView('all-projects');
    window.history.pushState(null, '', '#all-projects');
  };

  const navigateToHome = () => {
    setCurrentView('home');
    window.history.pushState(null, '', '#home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'all-projects') {
    return (
      <div className="portfolio-app">
        <AllProjectsPage onBackToHome={navigateToHome} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero onOpenCV={() => setIsCVModalOpen(true)} />
        <About />
        <Projects onOpenAllProjects={navigateToAllProjects} />
        <Contact />
      </main>
      <Footer />
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
}

export default App;

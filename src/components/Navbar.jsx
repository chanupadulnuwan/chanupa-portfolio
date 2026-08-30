import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../../Images/logo.png';
import './Navbar.css';

const Navbar = ({ currentView, onAboutClick, onProjectsClick, onHomeClick, onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Me', href: '#about-me', id: 'about-me' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact Me', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, linkId) => {
    e.preventDefault();
    if (linkId === 'home' && onHomeClick) {
      onHomeClick();
    } else if (linkId === 'about-me' && onAboutClick) {
      onAboutClick();
    } else if (linkId === 'projects' && onProjectsClick) {
      onProjectsClick();
    } else if (linkId === 'contact' && onContactClick) {
      onContactClick();
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="logo-link" onClick={(e) => handleNavClick(e, 'home')}>
          <img src={logoImg} alt="Chanupa.me Logo" className="logo-img" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`nav-item-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Top Right Hire Me Button */}
        <div className="desktop-actions">
          <button className="btn-primary hire-btn" onClick={onContactClick}>
            Hire Me
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} color="#ffffff" /> : <Menu size={26} color="#ffffff" />}
        </button>
      </div>

      {/* Mobile Navigation Menu Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavClick(e, link.id);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            className="btn-primary mobile-hire-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onContactClick();
            }}
          >
            Hire Me
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, MailIcon, GithubIcon } from './SocialIcons';
import logoImg from '../../Images/logo.png';
import { personalDetails } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <img src={logoImg} alt="Chanupa.me Logo" className="footer-logo-img" />
            </a>
            <p className="footer-bio">
              Full Stack Developer & Mobile Specialist building fast, beautiful, and scalable web & mobile products.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact Me</a></li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="footer-socials">
            <h4>Connect With Me</h4>
            <div className="social-icons-row">
              <a
                href={personalDetails.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={personalDetails.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={personalDetails.socials.email}
                className="social-icon-btn"
                aria-label="Email"
              >
                <MailIcon size={20} />
              </a>
              <a
                href={personalDetails.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Chanupa Dulnuwan. Designed & Built for <strong>chanupa.me</strong></p>
          
          <button onClick={scrollToTop} className="scroll-to-top-btn" aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

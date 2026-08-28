import React from 'react';
import { Download } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, MailIcon, GithubIcon } from './SocialIcons';
import TypingText from './TypingText';
import { personalDetails } from '../data/portfolioData';
import meImg from '../../Images/me.png';
import './Hero.css';

const Hero = ({ onOpenCV }) => {
  return (
    <section id="home" className="hero-section">
      {/* SVG Mask Definition for exact Figma 3D Pop-Out Head Effect */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <mask id="figma-popout-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="440" height="520">
            {/* Top area allows head and hair to pop out completely */}
            <rect x="0" y="0" width="440" height="180" fill="white" />
            {/* Bottom circle clips the lower body seamlessly inside the circle */}
            <circle cx="220" cy="330" r="190" fill="white" />
          </mask>
        </defs>
      </svg>

      <div className="container hero-container">
        {/* Left Column - Content */}
        <div className="hero-content">
          <span className="hero-greeting">{personalDetails.greeting}</span>
          <h1 className="hero-name">{personalDetails.name}</h1>

          <div className="hero-title-wrapper">
            <TypingText roles={personalDetails.roles} />
          </div>

          {/* Social Icons Row */}
          <div className="hero-socials">
            <a
              href={personalDetails.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Instagram"
              title="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href={personalDetails.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={personalDetails.socials.email}
              className="social-icon-btn"
              aria-label="Email"
              title="Email"
            >
              <MailIcon size={20} />
            </a>
            <a
              href={personalDetails.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon size={20} />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>
            <button onClick={onOpenCV} className="btn-outline">
              <Download size={18} />
              Download CV
            </button>
          </div>

          {/* Stats Bar Component */}
          <div className="hero-stats-card">
            {personalDetails.stats.map((stat, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <div className="stats-divider" />}
                <div className="stat-item">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Column - Exact Figma 3D Pop-Out Avatar */}
        <div className="hero-image-wrapper">
          <div className="hero-backdrop-circle" />
          <img
            src={meImg}
            alt="Chanupa Dulnuwan Profile Photo"
            className="hero-avatar-img-masked"
          />
          <div className="avatar-ambient-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { Download } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, MailIcon, GithubIcon } from './SocialIcons';
import TypingText from './TypingText';
import SpecularButton from './SpecularButton';
import HeroBackgroundAnimation from './HeroBackgroundAnimation';
import { personalDetails } from '../data/portfolioData';
import meImg from '../../Images/me.png';
import './Hero.css';

const Hero = ({ onOpenCV }) => {
  return (
    <section id="home" className="hero-section">
      {/* Dynamic Animated Matrix Canvas & Subtle Right Orange Touch */}
      <HeroBackgroundAnimation />

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
            <SpecularButton
              size="sm"
              radius={10}
              tint="#FD6F00"
              tintOpacity={0.12}
              blur={6}
              textColor="#FD6F00"
              lineColor="#FD6F00"
              baseColor="#444444"
              intensity={1.2}
              shineSize={14}
              shineFade={45}
              thickness={1.5}
              speed={0.4}
              followMouse
              proximity={250}
              onClick={onOpenCV}
            >
              <Download size={18} />
              Download CV
            </SpecularButton>
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

        {/* Right Column - 3D Pop-Out Avatar Effect (2 Circles technique) */}
        <div className="hero-image-wrapper">
          {/* Curved Text along left side of circle */}
          <svg className="hero-curved-text-svg" viewBox="0 0 580 580">
            <path id="seekHigherPath" d="M 70,445 A 268,268 0 0,1 405,45" fill="none" />
            <text className="curved-text">
              <textPath href="#seekHigherPath" startOffset="0%">
                Seek Higher Things
              </textPath>
            </text>
          </svg>

          {/* 2nd Circle: Background Grey Circle with reduced opacity */}
          <div className="hero-circle-bg" />

          {/* 1st Circle: Masked Image Clipper (bottom matches 2nd circle, top extends higher for head pop-out) */}
          <div className="hero-avatar-clipper">
            <img
              src={meImg}
              alt="Chanupa Dulnuwan Profile Photo"
              className="hero-avatar-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

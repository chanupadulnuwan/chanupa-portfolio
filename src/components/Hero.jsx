import React from 'react';
import { Download } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, MailIcon, GithubIcon } from './SocialIcons';
import TypingText from './TypingText';
import SpecularButton from './SpecularButton';
import AcidSquares from './AcidSquares';
import { personalDetails } from '../data/portfolioData';
import meImg from '../../Images/me.png';
import './Hero.css';

const Hero = ({ onOpenCV }) => {
  return (
    <section id="home" className="hero-section">
      {/* Full Home Section Background AcidSquares Animation */}
      <div className="hero-bg-acid">
        <AcidSquares
          color1="#000000"
          color2="#853e0d"
          color3="#392a1f"
          detail="medium"
          speed={0.7}
          waveDepth={1}
          zoom={1.3}
          density={10.0}
          glow={1.0}
          exposure={2700}
          spread={0.3}
          stepSize={0.002}
          colorShift={0}
          contrast={1}
          brightness={1.0}
          opacity={0.9}
          mouseInteraction={true}
          mouseStrength={0.1}
          mouseRadius={0.35}
          blur={0}
          grain={true}
          grainIntensity={0.05}
        />
      </div>

      <div className="container hero-container">
        {/* Left Column - Content */}
        <div className="hero-content">
          <span className="hero-greeting">{personalDetails.greeting}</span>
          <h1 className="hero-name">{personalDetails.name}</h1>

          <div className="hero-title-wrapper">
            <TypingText roles={personalDetails.roles} />
          </div>

          {/* Social Icons */}
          <div className="hero-socials">
            <a href={personalDetails.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
            <a href={personalDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href={personalDetails.socials.email} className="social-icon-btn" aria-label="Email">
              <MailIcon size={20} />
            </a>
            <a href={personalDetails.socials.github} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#contact" className="btn-primary hire-btn">
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
              onClick={onOpenCV}
            >
              <Download size={18} />
              Download CV
            </SpecularButton>
          </div>

          {/* Stats Bar */}
          <div className="hero-stats-card">
            {personalDetails.stats.map((stat, idx) => (
              <React.Fragment key={idx}>
                <div className="stat-item">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
                {idx < personalDetails.stats.length - 1 && <div className="stats-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Column - Avatar Image */}
        <div className="hero-image-wrapper">
          {/* Curved Text Along Left Edge of Avatar Circle with Gap */}
          <svg className="hero-curved-text-svg" viewBox="0 0 580 580">
            <path id="leftCurvePath" d="M 55, 450 A 255,255 0 0,1 255,35" fill="none" />
            <text className="curved-text">
              <textPath href="#leftCurvePath" startOffset="0%">
                Seek Higher Things
              </textPath>
            </text>
          </svg>

          {/* Circle Frame Background */}
          <div className="hero-circle-bg" />

          {/* Avatar Image Container */}
          <div className="hero-avatar-clipper">
            <img src={meImg} alt="Chanupa Dulnuwan" className="hero-avatar-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

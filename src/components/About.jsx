import React from 'react';
import { CheckCircle2, Award, ArrowRight, Sparkles } from 'lucide-react';
import { personalDetails, achievements } from '../data/portfolioData';
import TechMarquee from './TechMarquee';
import './About.css';

const About = ({ onOpenFullAbout }) => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Ascende Superius</span>
          <h2 className="section-title">BSc (Hons) Computer Science Undergraduate</h2>
          <p className="section-desc">
            Studying at <strong>Staffordshire University (APIIT Sri Lanka)</strong>. Driven by curiosity, creativity, and a constant pursuit of higher things.
          </p>
        </div>

        {/* Bio Card */}
        <div className="about-bio-card">
          <div className="bio-text">
            <h3>Who I Am</h3>
            <p>{personalDetails.bio}</p>
            <p>
              I specialize in developing cross-platform mobile apps with <strong>Flutter & React Native</strong>, building robust web applications with <strong>React & NestJS</strong>, and crafting modern UI/UX design prototypes in <strong>Figma</strong>.
            </p>
            
            {/* Full Story Action Button */}
            <div style={{ marginTop: '24px' }}>
              <button className="btn-primary" onClick={onOpenFullAbout}>
                <Sparkles size={16} />
                <span>Read My Full Story & Journey (Ascende Superius)</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="bio-highlights">
            <div className="highlight-item">
              <CheckCircle2 className="highlight-icon" size={22} />
              <span>Full Stack & Mobile Development Focus</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 className="highlight-icon" size={22} />
              <span>Altrium Designathon 2026 Runner Up</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 className="highlight-icon" size={22} />
              <span>Pearson Level 3 Diploma Distinction</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 className="highlight-icon" size={22} />
              <span>Seeking Developer & UI/UX Internships</span>
            </div>
          </div>
        </div>

        {/* Dynamic Infinite Animated Tech Marquee */}
        <TechMarquee />

        {/* Achievements Section */}
        <div id="achievements" className="achievements-container">
          <h3 className="timeline-title">Honors & Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((ach, idx) => (
              <div key={idx} className="achievement-card">
                <Award className="ach-icon" size={24} color="#FD6F00" />
                <div>
                  <h4>{ach.title}</h4>
                  <p>{ach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

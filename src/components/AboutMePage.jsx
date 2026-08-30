import React, { useState, useEffect } from 'react';
import { ArrowLeft, GraduationCap, Code, Sparkles, X, ZoomIn, Briefcase, Award } from 'lucide-react';
import meImg from '../../Images/me.png';

// Certification images imports
import cert1 from '../../Images/Certifications/1738569859758.jpeg';
import cert2 from '../../Images/Certifications/1738578692193.jpeg';
import cert3 from '../../Images/Certifications/1776521373027.jpeg';
import cert4 from '../../Images/Certifications/1780547864984.jpeg';
import cert5 from '../../Images/Certifications/1780913693271.jpeg';

import './AboutMePage.css';

const certificationsData = [
  {
    id: 1,
    title: "Learning Python",
    issuer: "LinkedIn Learning",
    image: cert1
  },
  {
    id: 2,
    title: "Python Quick Start",
    issuer: "LinkedIn Learning",
    image: cert2
  },
  {
    id: 3,
    title: "Product Management: Customer Development",
    issuer: "LinkedIn Learning (IIBA Endorsed)",
    image: cert3
  },
  {
    id: 4,
    title: "Cert Prep: PMI Agile Certified Practitioner (PMI-ACP)®",
    issuer: "LinkedIn Learning",
    image: cert4
  },
  {
    id: 5,
    title: "Flutter Essential Training: Build for Multiple Platforms",
    issuer: "LinkedIn Learning",
    image: cert5
  }
];

const AboutMePage = ({ onBackToHome }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="about-me-page">
      <main className="about-page-main container">
        {/* Navigation & Intro Header */}
        <div className="about-intro-header">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <button className="home-back-btn" onClick={onBackToHome}>
              <ArrowLeft size={18} />
              <span>Back to Main Portfolio</span>
            </button>
          </div>
          <span className="section-subtitle">Ascende Superius — Seek Higher Things</span>
          <h1 className="about-main-title">About Me & Personal Journey</h1>
          <p className="about-motto-quote">
            “My life is guided by the phrase <strong>Ascende Superius</strong> — Seek Higher Things. To me, it represents the continuous pursuit of growth: learning more, creating better, challenging myself, and always looking beyond where I am today.”
          </p>
        </div>

        {/* Hero Story Banner Card */}
        <div className="about-hero-card">
          <div className="about-hero-img-col">
            <img src={meImg} alt="Chanupa Dulnuwan" className="about-profile-img" />
            <div className="about-quick-tags">
              <span className="quick-tag"><GraduationCap size={14} /> CS @ Staffordshire / APIIT</span>
              <span className="quick-tag"><Code size={14} /> Full Stack & Mobile Developer</span>
              <span className="quick-tag"><Sparkles size={14} /> Creative UI/UX Enthusiast</span>
            </div>
          </div>

          <div className="about-hero-text-col">
            <h2 className="story-heading">G.P.G. Chanupa Dulnuwan</h2>
            <p className="story-lead">
              Computer Science undergraduate at <strong>Staffordshire University through APIIT Sri Lanka</strong>, hailing from Galle, Sri Lanka. My journey has been shaped by curiosity, creativity, and a constant desire to learn, explore, and take on new challenges.
            </p>
            <div className="story-highlights-grid">
              <div className="highlight-pill">
                <GraduationCap size={16} color="#FD6F00" />
                <span>BSc (Hons) Computer Science Undergraduate</span>
              </div>
              <div className="highlight-pill">
                <Award size={16} color="#FD6F00" />
                <span>2nd Place - Altrium Designathon 2026</span>
              </div>
              <div className="highlight-pill">
                <Briefcase size={16} color="#FD6F00" />
                <span>Media Assistant & Digitalization Engineer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Structured Story Chapters */}
        <div className="story-chapters-container">
          <h2 className="chapters-section-title">The Chapters of My Journey</h2>

          {/* Chapter 1 */}
          <div className="story-chapter-card">
            <div className="chapter-number">01</div>
            <div className="chapter-content">
              <h3>Early Education & Foundations at Siridhamma College</h3>
              <p>
                My educational journey began at <strong>Siridhamma College, Galle</strong>, where I studied from Grade 1 through my Advanced Levels. These formative years cultivated my core work ethic, discipline, and interest in technology and analytical thinking.
              </p>
              <p>
                During school, I actively participated in student societies including the <strong>IT Society</strong> and <strong>Astronomy Society</strong>, developing teamwork, organization, and problem-solving skills that laid the foundation for my software engineering path.
              </p>
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="story-chapter-card">
            <div className="chapter-number">02</div>
            <div className="chapter-content">
              <h3>Academic Excellence: Pearson Level 3 Diploma Distinction</h3>
              <p>
                In 2024, I completed the <strong>Pearson Level 3 Diploma in IT at Horizon Campus</strong>, graduating with <strong>Distinction</strong>. This intensive academic program solidified my technical knowledge across programming fundamentals, database design, software engineering methodologies, and web technology stacks.
              </p>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="story-chapter-card">
            <div className="chapter-number">03</div>
            <div className="chapter-content">
              <h3>Higher Education: Staffordshire University (APIIT Sri Lanka)</h3>
              <p>
                Currently, I am pursuing my <strong>BSc (Hons) in Computer Science at Staffordshire University through APIIT Sri Lanka</strong>. University life has expanded my horizons, allowing me to dive deep into Full-Stack Web Architecture (React, NestJS), Mobile App Development (Flutter, React Native), and Enterprise Relational Databases (PostgreSQL, MySQL).
              </p>
            </div>
          </div>

          {/* Chapter 4 */}
          <div className="story-chapter-card">
            <div className="chapter-number">04</div>
            <div className="chapter-content">
              <h3>Designathon Runner-Up & Commercial Software Engineering</h3>
              <p>
                In 2026, my team secured <strong>2nd Place (Runners Up) in the prestigious Altrium Designathon</strong>, designing Sōmē AI — a multi-platform mobile application and web dashboard ecosystem for smart device management.
              </p>
              <p>
                Simultaneously, I serve as a <strong>Media Assistant & LMS Support Specialist at Brightway Institute</strong> (2025–present) and lead the <strong>Galle Fort Library Digitization Project</strong> (2026–present), building custom web search systems to digitize 4,000+ rare historical volumes.
              </p>
            </div>
          </div>

          {/* Chapter 5 */}
          <div className="story-chapter-card highlight-chapter">
            <div className="chapter-number">05</div>
            <div className="chapter-content">
              <h3>Bhathi's World & Ongoing Innovations</h3>
              <p>
                I recently engineered the official web platform for popular content creator <strong>Bhathiya Maneth Ranaweera (Bhathi's World)</strong>, building a high-performance content engine to showcase his media projects and social reach.
              </p>
              <p>
                Driven by <em>Ascende Superius</em>, I am continually pushing boundaries in mobile engineering, UI/UX prototyping, and scalable backend architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Showcase Gallery */}
        <div className="certifications-gallery-section">
          <div className="cert-section-header">
            <Award size={28} color="#FD6F00" />
            <div>
              <h2>Certifications & Achievements Showcase</h2>
              <p>Official verified certificates and course achievements. Click any certificate to expand in high resolution.</p>
            </div>
          </div>

          <div className="cert-cards-grid">
            {certificationsData.map((cert) => (
              <div key={cert.id} className="cert-gallery-card" onClick={() => setSelectedCert(cert)}>
                <div className="cert-img-container">
                  <img src={cert.image} alt={cert.title} className="cert-thumbnail-img" />
                  <div className="cert-zoom-overlay">
                    <ZoomIn size={24} color="#ffffff" />
                    <span>Click to Zoom</span>
                  </div>
                </div>
                <div className="cert-card-info">
                  <h4>{cert.title}</h4>
                  <span className="cert-issuer-badge">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* High-Resolution Modal Zoom Lightbox */}
      {selectedCert && (
        <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
              <X size={24} color="#ffffff" />
            </button>
            <div className="cert-modal-header">
              <h3>{selectedCert.title}</h3>
              <span className="cert-modal-issuer">{selectedCert.issuer}</span>
            </div>
            <div className="cert-modal-body">
              <img src={selectedCert.image} alt={selectedCert.title} className="cert-full-img" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMePage;

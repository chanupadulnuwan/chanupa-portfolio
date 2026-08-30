import React, { useState, useEffect } from 'react';
import { ArrowLeft, Award, Music, Code, Compass, GraduationCap, Briefcase, Sparkles, X, ZoomIn } from 'lucide-react';
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

        {/* Chapter 1: Early Education & Music */}
        <div className="story-chapter-card">
          <div className="chapter-icon-wrapper">
            <Music size={24} color="#FD6F00" />
          </div>
          <div className="chapter-content">
            <h3 className="chapter-title">Early Education & Music Leadership at Siridhamma College</h3>
            <p className="chapter-paragraph">
              I began my education at <strong>Siridhamma College, Galle</strong>, where I studied from Grade 1 through my Advanced Levels. During my school years, music became an important part of my life. I was actively involved in the school orchestra and, in 2021, had the opportunity to become its leader.
            </p>
            <p className="chapter-paragraph">
              As a member and leader of the orchestra, I participated in <strong>two All-Island competitions</strong>, achieving victories and multiple other awards and recognitions. These experiences taught me valuable lessons about leadership, teamwork, discipline, and performing under pressure.
            </p>
            <p className="chapter-paragraph">
              Alongside music, I was strongly involved in my school's <strong>IT Society and Astronomy Society</strong>. Through these societies, I participated in competitions and activities that allowed me to explore technology, science, and problem-solving from different perspectives—building the initial foundation for my growing passion in tech.
            </p>
          </div>
        </div>

        {/* Chapter 2: The Transition to IT & Higher Education */}
        <div className="story-chapter-card">
          <div className="chapter-icon-wrapper">
            <GraduationCap size={24} color="#FD6F00" />
          </div>
          <div className="chapter-content">
            <h3 className="chapter-title">Horizon Campus Diploma & Computer Science at APIIT</h3>
            <p className="chapter-paragraph">
              After completing my O/Ls, my interests shifted strongly toward Information Technology. I joined <strong>Horizon Campus</strong> to pursue a <strong>Pearson Level 3 Diploma in IT</strong>. What initially began as an area of interest quickly evolved into my core career trajectory. In <strong>2024, I completed my diploma with Distinction</strong> and continued my education by entering the <strong>BSc (Hons) Computer Science degree programme at APIIT Sri Lanka (Staffordshire University)</strong>.
            </p>
            <p className="chapter-paragraph">
              University opened the door to a wide world of technology. Throughout my studies, I have explored areas including <strong>software engineering, full-stack web development, networking, mobile app development, databases, and data science</strong>.
            </p>
            <p className="chapter-paragraph">
              I have represented my university in several <strong>hackathons and competitions</strong>, gaining invaluable experience in rapid prototyping, collaborative problem-solving, and building software solutions under tight deadlines.
            </p>
          </div>
        </div>

        {/* Chapter 3: Designathon Victory & UI/UX Philosophy */}
        <div className="story-chapter-card">
          <div className="chapter-icon-wrapper">
            <Award size={24} color="#FD6F00" />
          </div>
          <div className="chapter-content">
            <h3 className="chapter-title">Altrium Designathon 2026 & UI/UX Creative Vision</h3>
            <p className="chapter-paragraph">
              One of my major highlights was the <strong>2026 Altrium Designathon</strong>, where my team achieved <strong>2nd Place (Runners-Up)</strong> with our Sōmē AI life ecosystem design. Experiences like this have strengthened my confidence in approaching unfamiliar problems and turning creative concepts into functional products.
            </p>
            <p className="chapter-paragraph">
              Among the different areas I have explored, <strong>UI/UX design is one of my absolute favourite fields</strong>. I believe one of my greatest strengths is <strong>creativity</strong>. I enjoy thinking beyond the obvious solution, experimenting with ideas, and finding ways to make technology not only functional, but also engaging, intuitive, and human-centered. For me, the most exciting part of technology is where <strong>creativity and technical thinking meet</strong>.
            </p>
          </div>
        </div>

        {/* Chapter 4: Real-World Experience & Personal Work */}
        <div className="story-chapter-card">
          <div className="chapter-icon-wrapper">
            <Briefcase size={24} color="#FD6F00" />
          </div>
          <div className="chapter-content">
            <h3 className="chapter-title">Real-World Projects & Digital Media Leadership</h3>
            <p className="chapter-paragraph">
              In <strong>2025, I began working as a Media Assistant at Brightway Institute</strong>, developing digital media assets and managing course media while continuing my studies in technology.
            </p>
            <p className="chapter-paragraph">
              Currently, in <strong>2026</strong>, I am actively involved in the <strong>Galle Fort Library Digitization Project</strong>, contributing to preserving Sri Lanka’s oldest public library by cataloging and digitizing over 4,000 rare historical books into a modern digital platform.
            </p>
            <p className="chapter-paragraph">
              I also combined my technical and creative skills through projects like <strong>Bhathi's World</strong> — the official web platform for social media content creator <strong>Bhathiya Maneth Ranaweera</strong>.
            </p>
          </div>
        </div>

        {/* Chapter 5: Ascende Superius Conclusion */}
        <div className="story-chapter-card motto-conclusion-card">
          <div className="chapter-icon-wrapper">
            <Compass size={24} color="#FD6F00" />
          </div>
          <div className="chapter-content">
            <h3 className="chapter-title">Ascende Superius — Seek Higher Things</h3>
            <p className="chapter-paragraph">
              Looking back, my journey has taken me through many different worlds—from <strong>music and orchestra leadership to software engineering, UI/UX design, mobile development, and digital media</strong>. Each experience has contributed to the engineer and designer I am today. I see these interests as complementary skills that allow me to approach technology from a more holistic, creative perspective.
            </p>
          </div>
        </div>

        {/* Certifications Showcase Section */}
        <section className="certifications-showcase-section">
          <div className="cert-section-header">
            <span className="section-subtitle">Verified Qualifications</span>
            <h2 className="cert-section-title">Certifications & Achievements Gallery</h2>
            <p className="cert-section-desc">
              Explore my verified academic certificates, LinkedIn Learning qualifications, and competition recognitions. Click any certificate to expand.
            </p>
          </div>

          <div className="certifications-grid">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="cert-card"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="cert-img-wrapper">
                  <img src={cert.image} alt={cert.title} className="cert-img" loading="lazy" />
                  <div className="cert-hover-overlay">
                    <ZoomIn size={22} />
                    <span>Expand Certificate</span>
                  </div>
                </div>
                <div className="cert-card-body">
                  <h4 className="cert-title">{cert.title}</h4>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Lightbox Modal for Certificate Expansion */}
      {selectedCert && (
        <div className="cert-lightbox-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cert-lightbox-close" onClick={() => setSelectedCert(null)}>
              <X size={26} />
            </button>
            <img src={selectedCert.image} alt={selectedCert.title} className="expanded-cert-img" />
            <div className="cert-lightbox-caption">
              <h3>{selectedCert.title}</h3>
              <p>{selectedCert.issuer}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMePage;

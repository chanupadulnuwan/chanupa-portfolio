import React from 'react';
import { Code, Smartphone, Palette, Cpu, CheckCircle2, GraduationCap, Briefcase, Award, Users } from 'lucide-react';
import { personalDetails, skills, education, experienceTimeline, achievements, references, certification } from '../data/portfolioData';
import './About.css';

const categoryIcons = {
  "Full Stack & Web": Code,
  "Mobile & Frameworks": Smartphone,
  "Databases & Tools": Cpu,
  "UI/UX & AI Tools": Palette,
};

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title">BSc (Hons) Computer Science Undergraduate</h2>
          <p className="section-desc">
            Studying at <strong>Staffordshire University (APIIT Sri Lanka)</strong>. Passionate about Full Stack Web Development, Mobile Engineering, and UI/UX Design.
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

        {/* Technical Skills Grid */}
        <h3 className="skills-grid-title">Technical Expertise</h3>
        <div className="skills-grid">
          {skills.map((skillCat, idx) => {
            const IconComponent = categoryIcons[skillCat.category] || Code;
            return (
              <div key={idx} className="skill-card">
                <div className="skill-card-header">
                  <div className="skill-icon-wrapper">
                    <IconComponent size={24} color="#FD6F00" />
                  </div>
                  <h4>{skillCat.category}</h4>
                </div>
                <div className="skill-tags">
                  {skillCat.items.map((item, itemIdx) => (
                    <span key={itemIdx} className="skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Work Experience & Certification Section */}
        <div className="work-exp-container">
          <div className="exp-column">
            <div className="column-header">
              <Briefcase size={26} color="#FD6F00" />
              <h3>Work Experience & Certification</h3>
            </div>
            <div className="timeline">
              {experienceTimeline.map((exp, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-period">{exp.period}</span>
                    <h4>{exp.role}</h4>
                    <span className="timeline-company">{exp.company}</span>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Box */}
            <div className="certification-box">
              <div className="column-header" style={{ marginBottom: '14px' }}>
                <Award size={22} color="#FD6F00" />
                <h4>Certification</h4>
              </div>
              <p className="cert-title"><strong>{certification.title}</strong></p>
              <span className="cert-issuer">{certification.issuer}</span>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="achievements-container">
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

        {/* Professional References */}
        <div className="references-container">
          <h3 className="timeline-title">References</h3>
          <div className="references-grid">
            {references.map((ref, idx) => (
              <div key={idx} className="reference-card">
                <Users size={22} color="#FD6F00" />
                <div>
                  <h4>{ref.name}</h4>
                  <span className="ref-role">{ref.role}</span>
                  <a href={`tel:${ref.phone.replace(/\s+/g, '')}`} className="ref-phone">
                    {ref.phone}
                  </a>
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

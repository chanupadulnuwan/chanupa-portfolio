import React, { useState } from 'react';
import { X, Download, Copy, Check, FileText, Mail, GraduationCap, Briefcase, Award } from 'lucide-react';
import { personalDetails, education, experienceTimeline, achievements, coverLetterText } from '../data/portfolioData';
import meImg from '../../Images/me.png';
import './CVModal.css';

const CVModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('cv'); // 'cv' or 'coverLetter'
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownloadCV = () => {
    // Printable / Downloadable CV document trigger
    window.print();
  };

  const handleCopyCoverLetter = () => {
    navigator.clipboard.writeText(coverLetterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="cv-modal-overlay" onClick={onClose}>
      <div className="cv-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="cv-modal-close" onClick={onClose} aria-label="Close Modal">
          <X size={22} />
        </button>

        {/* Modal Top Profile Header */}
        <div className="cv-modal-header">
          <div className="cv-avatar-sm">
            <img src={meImg} alt="Chanupa Dulnuwan" />
          </div>
          <div>
            <h3>{personalDetails.fullName}</h3>
            <p>{personalDetails.degree}</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="cv-modal-tabs">
          <button
            className={`cv-tab-btn ${activeTab === 'cv' ? 'active' : ''}`}
            onClick={() => setActiveTab('cv')}
          >
            <FileText size={16} />
            <span>Curriculum Vitae (CV)</span>
          </button>
          <button
            className={`cv-tab-btn ${activeTab === 'coverLetter' ? 'active' : ''}`}
            onClick={() => setActiveTab('coverLetter')}
          >
            <Mail size={16} />
            <span>Cover Letter</span>
          </button>
        </div>

        {/* Modal Tab Content */}
        <div className="cv-modal-body">
          {activeTab === 'cv' ? (
            <div className="cv-details-wrapper">
              <div className="cv-section">
                <h4><GraduationCap size={18} color="#FD6F00" /> Education</h4>
                {education.map((edu, idx) => (
                  <div key={idx} className="cv-item-block">
                    <div className="cv-item-title">{edu.degree}</div>
                    <div className="cv-item-sub">{edu.institution} ({edu.period})</div>
                  </div>
                ))}
              </div>

              <div className="cv-section">
                <h4><Briefcase size={18} color="#FD6F00" /> Work Experience</h4>
                {experienceTimeline.map((exp, idx) => (
                  <div key={idx} className="cv-item-block">
                    <div className="cv-item-title">{exp.role} - {exp.company}</div>
                    <div className="cv-item-sub">{exp.period}</div>
                    <div className="cv-item-desc">{exp.description}</div>
                  </div>
                ))}
              </div>

              <div className="cv-section">
                <h4><Award size={18} color="#FD6F00" /> Key Honors</h4>
                <ul className="cv-bullets">
                  {achievements.map((ach, idx) => (
                    <li key={idx}><strong>{ach.title}</strong> — {ach.description}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="cover-letter-wrapper">
              <pre className="cover-letter-text">{coverLetterText}</pre>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="cv-modal-actions">
          {activeTab === 'cv' ? (
            <button onClick={handleDownloadCV} className="btn-primary modal-download-btn">
              <Download size={18} />
              Print / Save CV PDF
            </button>
          ) : (
            <button onClick={handleCopyCoverLetter} className="btn-primary modal-download-btn">
              {copied ? <Check size={18} /> : <Copy size={18} />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Cover Letter Text'}</span>
            </button>
          )}
          <a href="#contact" onClick={onClose} className="btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default CVModal;

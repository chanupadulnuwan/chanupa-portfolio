import React, { useState, useEffect } from 'react';
import { X, ExternalLink, ArrowLeft, Calendar, User, Users, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { GithubIcon, FigmaIcon } from './SocialIcons';
import './ProjectDetailModal.css';

const ProjectDetailModal = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, selectedImage]);

  if (!project) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Sticky Top Header Bar */}
        <header className="project-modal-nav">
          <button className="back-btn" onClick={onClose}>
            <ArrowLeft size={18} />
            <span>Back to Projects</span>
          </button>

          <div className="project-nav-actions">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="nav-action-link primary">
                <ExternalLink size={16} />
                <span>Live Site</span>
              </a>
            )}
            {project.figmaLink && (
              <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="nav-action-link figma">
                <FigmaIcon size={16} />
                <span>Figma</span>
              </a>
            )}
            {project.githubLinks && project.githubLinks.map((gh, idx) => (
              <a key={idx} href={gh.url} target="_blank" rel="noopener noreferrer" className="nav-action-link github">
                <GithubIcon size={16} />
                <span>{gh.label}</span>
              </a>
            ))}
            <button className="modal-close-btn" onClick={onClose} aria-label="Close project view">
              <X size={22} />
            </button>
          </div>
        </header>

        <div className="project-modal-content">
          {/* Main Hero Header */}
          <div className="project-hero-header">
            <div className="project-hero-badge-row">
              <span className="project-cat-tag">{project.category}</span>
              <span className="project-year-tag"><Calendar size={14} /> {project.year}</span>
            </div>
            <h1 className="project-hero-title">{project.title}</h1>
            <p className="project-hero-subtitle">{project.subtitle}</p>

            {/* Quick Meta Grid */}
            <div className="project-meta-grid">
              <div className="meta-card">
                <User size={18} color="#FD6F00" />
                <div>
                  <span className="meta-label">My Role</span>
                  <span className="meta-value">{project.role}</span>
                </div>
              </div>
              {project.teamMembers && (
                <div className="meta-card">
                  <Users size={18} color="#FD6F00" />
                  <div>
                    <span className="meta-label">Team & Collaborators</span>
                    <span className="meta-value">{project.teamMembers.join(', ')}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Cover Banner Image */}
          {project.coverImage && (
            <div className="project-cover-banner">
              <img src={project.coverImage} alt={project.title} className="cover-banner-img" />
            </div>
          )}

          {/* My View & Story Section */}
          <div className="project-story-section">
            <h2 className="story-section-title">My View & Development Story</h2>
            <div className="story-paragraphs">
              {project.story && project.story.map((para, idx) => (
                <p key={idx} className="story-paragraph">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Embedded Video (if available) */}
          {project.videoIframe && (
            <div className="project-video-section">
              <h3 className="sub-section-title">Project Video Demonstration</h3>
              <div
                className="video-iframe-container"
                dangerouslySetInnerHTML={{ __html: project.videoIframe }}
              />
            </div>
          )}

          {/* Key Features & Architecture Highlights */}
          {project.features && (
            <div className="project-features-section">
              <h3 className="sub-section-title">Key Features & Architecture</h3>
              <div className="features-grid">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="feature-card">
                    <CheckCircle2 size={20} color="#FD6F00" className="feat-icon" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="project-tech-section">
            <h3 className="sub-section-title">Technologies & Tools Used</h3>
            <div className="tech-pills-row">
              {project.tech.map((t, idx) => (
                <span key={idx} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshot Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="project-gallery-section">
              <div className="gallery-header">
                <h3 className="sub-section-title">Project Screenshots & Screenshots Gallery</h3>
                <span className="gallery-hint"><ImageIcon size={14} /> Click image to expand</span>
              </div>
              <div className="gallery-grid">
                {project.gallery.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="gallery-item-card"
                    onClick={() => setSelectedImage(imgSrc)}
                  >
                    <img src={imgSrc} alt={`${project.title} screenshot ${idx + 1}`} className="gallery-img" loading="lazy" />
                    <div className="gallery-hover-overlay">
                      <span>Click to view</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Action Footer Links */}
          <div className="project-modal-footer">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="footer-link-btn primary">
                <ExternalLink size={18} />
                <span>Visit Live Platform</span>
              </a>
            )}
            {project.figmaLink && (
              <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="footer-link-btn figma">
                <FigmaIcon size={18} />
                <span>Open Figma Prototype</span>
              </a>
            )}
            {project.githubLinks && project.githubLinks.map((gh, idx) => (
              <a key={idx} href={gh.url} target="_blank" rel="noopener noreferrer" className="footer-link-btn github">
                <GithubIcon size={18} />
                <span>{gh.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Image Expansion */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <X size={28} />
          </button>
          <img src={selectedImage} alt="Expanded View" className="lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default ProjectDetailModal;

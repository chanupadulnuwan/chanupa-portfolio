import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Eye, CheckCircle2, Clock } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { fullProjectsData } from '../data/projectsData';
import ProjectDetailModal from './ProjectDetailModal';
import './Projects.css';

const Projects = ({ onOpenAllProjects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter strictly for the 3 Top Projects for Homepage view
  const topProjects = fullProjectsData.filter((p) => p.isTopProject);

  const openProjectDetails = (proj) => {
    setSelectedProject(proj);
  };

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Featured Highlights</span>
          <h2 className="section-title">Top Projects</h2>
          <p className="section-desc">
            A curated selection of my primary commercial, mobile, and web engineering achievements.
          </p>
        </div>

        {/* Top 3 Projects Grid */}
        <div className="projects-grid">
          {topProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => openProjectDetails(project)}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                
                {/* Badges */}
                <div className="project-badges-header">
                  <span className="project-category-badge">{project.category}</span>
                  <span className={`project-status-badge ${project.status.toLowerCase()}`}>
                    {project.status === 'Completed' ? (
                      <>
                        <CheckCircle2 size={12} />
                        <span>Completed</span>
                      </>
                    ) : (
                      <>
                        <Clock size={12} className="pulse-icon" />
                        <span>Ongoing</span>
                      </>
                    )}
                  </span>
                </div>

                <div className="project-overlay-btn">
                  <Eye size={18} />
                  <span>Read Case Study</span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.shortDesc}</p>

                {/* Tech Stack Pills */}
                <div className="project-tech-stack">
                  {project.tech.slice(0, 4).map((t, idx) => (
                    <span key={idx} className="tech-pill">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="tech-pill more">+{project.tech.length - 4}</span>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="project-links">
                  <button
                    className="project-link-btn primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProjectDetails(project);
                    }}
                  >
                    <span>View Case Study</span>
                  </button>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn outline"
                      onClick={(e) => e.stopPropagation()}
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubLinks && project.githubLinks.length > 0 && (
                    <a
                      href={project.githubLinks[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn outline"
                      onClick={(e) => e.stopPropagation()}
                      title="GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All 7 Projects Button */}
        <div className="explore-all-projects-wrapper">
          <button className="btn-primary explore-all-btn" onClick={onOpenAllProjects}>
            <span>Explore All 7 Projects & Case Studies</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Project Details Modal View */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;

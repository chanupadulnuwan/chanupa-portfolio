import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight, Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { fullProjectsData } from '../data/projectsData';
import ProjectDetailModal from './ProjectDetailModal';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Check if URL anchor specifies a project (e.g. #project/nestle-insight)
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const projectId = hash.replace('#project/', '');
        const target = fullProjectsData.find((p) => p.id === projectId);
        if (target) setSelectedProject(target);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const categories = ['All', 'Full Stack', 'Mobile App', 'Web App', 'UI/UX Design', 'Desktop App'];

  const filteredProjects = activeFilter === 'All'
    ? fullProjectsData
    : fullProjectsData.filter((p) => p.category === activeFilter);

  const openProjectDetails = (proj) => {
    setSelectedProject(proj);
    window.history.pushState(null, '', `#project/${proj.id}`);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#project/')) {
      window.history.pushState(null, '', '#projects');
    }
  };

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Real Work & Case Studies</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            Explore my real projects with in-depth development stories, technical breakdowns, screenshots, and live links.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
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
                <span className="project-category-badge">{project.category}</span>
                <div className="project-overlay-btn">
                  <Eye size={18} />
                  <span>Read Full Story</span>
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
                    <span className="tech-pill more">+{project.tech.length - 4} more</span>
                  )}
                </div>

                {/* Card Action Button Bar */}
                <div className="project-links">
                  <button
                    className="project-link-btn primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProjectDetails(project);
                    }}
                  >
                    <span>View Project Details</span>
                    <ArrowRight size={16} />
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
      </div>

      {/* Project Details Modal View */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={closeProjectDetails}
        />
      )}
    </section>
  );
};

export default Projects;

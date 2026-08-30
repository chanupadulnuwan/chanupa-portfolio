import React, { useState } from 'react';
import { ExternalLink, ArrowRight, ArrowLeft, Eye, CheckCircle2, Clock } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { fullProjectsData } from '../data/projectsData';
import ProjectDetailModal from './ProjectDetailModal';
import './Projects.css';

const Projects = ({ viewMode = 'top', onExploreAll, onBackToHome, isDedicatedPage = false }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeStatus, setActiveStatus] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Mobile App', 'Web App', 'UI/UX Design', 'Desktop App'];
  const statuses = ['All', 'Completed', 'Ongoing'];

  // Filter projects depending on viewMode (top vs all) and active category/status filters
  const displayedProjects = fullProjectsData.filter((project) => {
    if (viewMode === 'top') {
      return project.isTopProject;
    }
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesStatus = activeStatus === 'All' || project.status === activeStatus;
    return matchesCategory && matchesStatus;
  });

  const openProjectDetails = (proj) => {
    setSelectedProject(proj);
  };

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            {viewMode === 'top' ? 'Featured Highlights' : 'Full Work Portfolio'}
          </span>
          <h2 className="section-title">
            {viewMode === 'top' ? 'Top Projects' : 'All Projects & Case Studies'}
          </h2>
          <p className="section-desc">
            {viewMode === 'top'
              ? 'A curated selection of my primary commercial, mobile, and web engineering achievements.'
              : 'Explore my complete collection of 9 real projects, featuring in-depth development stories, technical breakdowns, live links, and GitHub repositories.'}
          </p>
        </div>

        {/* Filters Bar (Only shown when viewMode is 'all') */}
        {viewMode === 'all' && (
          <div className="projects-filters-wrapper">
            <div className="filter-group">
              <span className="filter-label">Category:</span>
              <div className="filter-pills">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`all-filter-pill ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <span className="filter-label">Status:</span>
              <div className="filter-pills">
                {statuses.map((st) => (
                  <button
                    key={st}
                    className={`status-filter-pill ${activeStatus === st ? 'active' : ''} ${st.toLowerCase()}`}
                    onClick={() => setActiveStatus(st)}
                  >
                    {st === 'Completed' && <CheckCircle2 size={13} />}
                    {st === 'Ongoing' && <Clock size={13} />}
                    <span>{st}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {displayedProjects.map((project) => (
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

        {/* Bottom Action Button */}
        {viewMode === 'top' && (
          <div className="explore-all-projects-wrapper">
            <button className="btn-primary explore-all-btn" onClick={onExploreAll}>
              <span>Explore All {fullProjectsData.length} Projects & Case Studies</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
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

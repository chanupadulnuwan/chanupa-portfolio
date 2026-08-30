import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Eye, CheckCircle2, Clock } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { fullProjectsData } from '../data/projectsData';
import ProjectDetailModal from './ProjectDetailModal';
import './AllProjectsPage.css';

const AllProjectsPage = ({ onBackToHome }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeStatus, setActiveStatus] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Handle deep link hash e.g. #project/nestle-insight
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const pId = hash.replace('#project/', '');
        const target = fullProjectsData.find((p) => p.id === pId);
        if (target) setSelectedProject(target);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const categories = ['All', 'Full Stack', 'Mobile App', 'Web App', 'UI/UX Design', 'Desktop App'];
  const statuses = ['All', 'Completed', 'Ongoing'];

  const filteredProjects = fullProjectsData.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesStatus = activeStatus === 'All' || project.status === activeStatus;
    return matchesCategory && matchesStatus;
  });

  const openProjectDetails = (proj) => {
    setSelectedProject(proj);
    window.history.pushState(null, '', `#project/${proj.id}`);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    window.history.pushState(null, '', '#all-projects');
  };

  return (
    <div className="all-projects-page">
      {/* Top Floating Sticky Header */}
      <header className="all-projects-header">
        <div className="container header-content">
          <button className="home-back-btn" onClick={onBackToHome}>
            <ArrowLeft size={18} />
            <span>Back to Main Portfolio</span>
          </button>
          <div className="all-projects-title-badge">
            <span>7 Real Projects Showcase</span>
          </div>
        </div>
      </header>

      <main className="all-projects-main container">
        {/* Page Header */}
        <div className="page-intro-header">
          <span className="section-subtitle">Full Work Portfolio</span>
          <h1 className="page-main-title">Projects Showcase & Case Studies</h1>
          <p className="page-main-desc">
            Explore my full collection of real projects, featuring in-depth development stories, architecture breakdowns, live deployments, and GitHub repositories.
          </p>
        </div>

        {/* Dual Filters Bar: Categories & Status */}
        <div className="all-projects-filters-wrapper">
          {/* Category Pills */}
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

          {/* Status Pills */}
          <div className="filter-group">
            <span className="filter-label">Status:</span>
            <div className="filter-pills">
              {statuses.map((st) => (
                <button
                  key={st}
                  className={`status-filter-pill ${activeStatus === st ? 'active' : ''} ${st.toLowerCase()}`}
                  onClick={() => setActiveStatus(st)}
                >
                  {st === 'Completed' && <CheckCircle2 size={14} />}
                  {st === 'Ongoing' && <Clock size={14} />}
                  <span>{st}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="all-projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="all-project-card"
              onClick={() => openProjectDetails(project)}
            >
              {/* Image Thumbnail */}
              <div className="all-card-image-wrapper">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="all-card-image"
                  loading="lazy"
                />
                
                {/* Badges Bar */}
                <div className="all-card-badges-row">
                  <span className="all-cat-badge">{project.category}</span>
                  <span className={`all-status-badge ${project.status.toLowerCase()}`}>
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

                <div className="all-card-overlay">
                  <Eye size={20} />
                  <span>View Case Study</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="all-card-body">
                <h3 className="all-card-title">{project.title}</h3>
                <p className="all-card-desc">{project.shortDesc}</p>

                {/* Tech Pills */}
                <div className="all-tech-pills">
                  {project.tech.slice(0, 4).map((t, idx) => (
                    <span key={idx} className="all-tech-tag">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="all-tech-tag more">+{project.tech.length - 4}</span>
                  )}
                </div>

                {/* Quick Link Buttons */}
                <div className="all-card-links">
                  <button
                    className="all-card-btn primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProjectDetails(project);
                    }}
                  >
                    <span>Full Case Study</span>
                  </button>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="all-card-btn outline"
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
                      className="all-card-btn outline"
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
      </main>

      {/* Project Detail Modal View */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={closeProjectDetails}
        />
      )}
    </div>
  );
};

export default AllProjectsPage;

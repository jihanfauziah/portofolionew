'use client';

import Starburst from './Starburst';
import { portofolioData } from '../data/portofolio';

export default function Projects() {
  const { projects } = portofolioData;

  return (
    <section id="projects" className="section-container projects-section">
      {/* Section Header */}
      <div className="section-title-wrap">
        <span className="tiny-label">presentation & engineering projects</span>
        <div className="section-title-row">
          <h2 className="section-title section-title-green">Featured Projects</h2>
          <Starburst
            size={34}
            color="var(--primary-pink)"
            spikes={12}
            innerRatio={0.3}
            className="title-starburst"
          />
          <Starburst
            size={22}
            color="var(--primary-green)"
            spikes={8}
            innerRatio={0.36}
            className="title-starburst"
          />
        </div>
        <p className="section-subtitle">
          Koleksi proyek dan eksplorasi web development oleh Jihan Fauziah dengan fokus
          pada tata letak responsif, estetika bersih, dan kode yang terstruktur.
        </p>
      </div>

      {/* Projects Grid: 3 columns desktop, 2 columns tablet, 1 column mobile */}
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            {/* Thumbnail Wrap */}
            <div className="project-card-media">
              <img
                src={project.image || '/images/project-placeholder-1.svg'}
                alt={`${project.name || project.title} project preview`}
                className="project-card-image"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/project-placeholder-1.svg';
                }}
              />
              <span
                className="project-category-badge"
                style={{ backgroundColor: project.accent }}
              >
                {project.category}
              </span>
            </div>

            {/* Content Body */}
            <div className="project-card-body">
              <div className="project-header">
                <h3 className="project-card-title">{project.name || project.title}</h3>
              </div>

              <p className="project-card-desc">{project.description}</p>

              {/* Technologies list */}
              <div className="project-tech-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="project-card-actions">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                    aria-label={`Buka live demo ${project.name || project.title}`}
                  >
                    <span>Live Demo</span>
                    <span className="btn-icon">↗</span>
                  </a>
                )}
                {(project.repository || project.repositoryUrl) && (
                  <a
                    href={project.repository || project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-sm ${project.demoUrl ? 'btn-outline' : 'btn-dark'}`}
                    aria-label={`Buka repository GitHub ${project.name || project.title}`}
                  >
                    <span>View Repository</span>
                    <span className="btn-icon">→</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Project Philosophy / Notes bar matching Figma */}
      <div className="projects-editorial-banner">
        <div className="editorial-icon">
          <Starburst
            size={30}
            color="var(--primary-pink)"
            spikes={10}
            innerRatio={0.3}
          />
        </div>
        <div className="editorial-text">
          <h4 className="editorial-heading">Engineering & Design Integrity</h4>
          <p className="editorial-desc">
            Setiap proyek dikembangkan dengan perhatian pada struktur tata letak yang bersih,
            kemudahan navigasi, responsivitas di berbagai ukuran layar, serta keterhubungan
            data yang jelas dan fungsional.
          </p>
        </div>
      </div>
    </section>
  );
}

'use client';

import Starburst from './Starburst';
import { portofolioData } from '../data/portofolio';

export default function About() {
  const { personal, contact } = portofolioData;

  return (
    <section id="about" className="section-container about-section">
      {/* Section Header */}
      <div className="section-title-wrap">
        <span className="tiny-label">about me & background</span>
        <div className="section-title-row">
          <h2 className="section-title section-title-pink">Get to know Me!</h2>
          <Starburst
            size={40}
            color="var(--primary-pink)"
            spikes={14}
            innerRatio={0.3}
            className="title-starburst"
          />
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="about-grid">
        {/* Left: Portrait & Micro Badges */}
        <div className="about-visual-column">
          <div className="about-portrait-wrap">
            {/* Background ghost starburst */}
            <Starburst
              size={480}
              color="var(--primary-pink)"
              spikes={14}
              innerRatio={0.42}
              className="about-ghost-starburst"
            />
            <div className="about-portrait-frame">
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="about-portrait-image"
              />
            </div>
            <div className="about-caption-box">
              <span className="about-caption-tag">{personal.name}</span>
              <span className="about-caption-sub">{personal.education}</span>
            </div>
          </div>

          {/* Quick Highlight Cards */}
          <div className="about-highlights-grid">
            {personal.highlights.map((h, idx) => (
              <div key={idx} className="highlight-mini-card">
                <span className="highlight-mini-label">{h.label}</span>
                <span className="highlight-mini-value">{h.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Narrative, Experience, and Quick Contact Preview */}
        <div className="about-content-column">
          <div className="about-intro-block">
            <h3 className="about-greeting">
              Hello! I'm <span className="text-highlight">{personal.name}</span>
            </h3>
            <p className="about-bio-text">{personal.aboutBio}</p>
          </div>

          {/* Experience List */}
          <div className="about-experience-block">
            <h4 className="tiny-label">Experience & Focus</h4>
            <div className="experience-list">
              {personal.experience.map((item, idx) => (
                <div key={idx} className="experience-item">
                  <div className="experience-header">
                    <span className="experience-role">{item.role}</span>
                    <span className="experience-period">{item.period}</span>
                  </div>
                  <p className="experience-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Contact & Skills Mini Overview */}
          <div className="about-subgrid">
            <div className="about-sub-card">
              <h4 className="tiny-label">Core Learning</h4>
              <div className="about-learning-tags">
                <span className="skill-pill">JavaScript</span>
                <span className="skill-pill">React</span>
                <span className="skill-pill">Next.js</span>
                <span className="skill-pill">Plain CSS</span>
                <span className="skill-pill">Clean Code</span>
              </div>
            </div>

            <div className="about-sub-card">
              <h4 className="tiny-label">Direct Reach</h4>
              <div className="about-direct-reach">
                <div className="reach-row">
                  <span className="reach-label">Email</span>
                  <a href={contact.emailLink} className="reach-value text-truncate">
                    {contact.email}
                  </a>
                </div>
                <div className="reach-row">
                  <span className="reach-label">GitHub</span>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reach-value"
                  >
                    {contact.githubDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

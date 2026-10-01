'use client';

import Starburst from './Starburst';
import { portofolioData } from '../data/portofolio';

export default function Hero() {
  const { personal } = portofolioData;

  return (
    <section id="top" className="hero-section">
      {/* Top Editorial Row */}
      <div className="hero-top-row">
        <div className="hero-meta-badge">
          <span className="hero-status-dot"></span>
          <span className="hero-tiny-label">{personal.startIdea}</span>
        </div>
        <div className="hero-top-accents">
          <span className="hero-role-pill">{personal.role}</span>
          <Starburst
            size={48}
            color="var(--primary-pink)"
            spikes={18}
            innerRatio={0.27}
            className="hero-starburst-spin"
          />
        </div>
      </div>

      {/* Main Hero Center Content */}
      <div className="hero-center-content">
        <p className="hero-tagline">{personal.tagline}</p>

        {/* Giant PORTOFOLIO Headline with Starburst O */}
        <div className="portofolio-headline-row">
          <h1 className="portofolio-headline-text">
            <span>PORTOFOLI</span>
            <span className="portofolio-o-wrapper">
              <span className="portofolio-o-hidden">O</span>
              <Starburst
                size={180}
                color="var(--primary-green)"
                spikes={22}
                innerRatio={0.28}
                className="portofolio-o-star"
              />
            </span>
          </h1>
        </div>

        {/* Bio & Profile Highlight Card */}
        <div className="hero-profile-row">
          <div className="hero-intro-text">
            <div className="hero-author-header">
              <h2 className="hero-author-name">{personal.name}</h2>
              <span className="hero-author-school">{personal.education}</span>
            </div>
            <p className="hero-bio-paragraph">{personal.heroBio}</p>
            
            {/* Action Buttons */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <span className="btn-arrow">↓</span>
              </a>
              <a href="#contact" className="btn btn-outline">
                <span>Let's Talk</span>
                <span className="btn-arrow">↗</span>
              </a>
            </div>
          </div>

          {/* Modern Avatar / Photo Preview Box */}
          <div className="hero-avatar-card">
            <div className="hero-avatar-frame">
              {/* Starburst backdrop glow */}
              <Starburst
                size={220}
                color="var(--primary-pink)"
                spikes={14}
                innerRatio={0.4}
                className="hero-avatar-ghost"
              />
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="hero-avatar-img"
              />
              <div className="hero-avatar-caption">
                <span className="avatar-caption-role">{personal.role.split('/')[0]}</span>
                <span className="avatar-caption-status">Available for projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status / Meta Bar */}
      <div className="hero-bottom-bar">
        <div className="hero-bottom-left">
          <span className="hero-bottom-micro">see more of my work</span>
          <a
            href={portofolioData.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-bottom-handle"
          >
            {personal.socialHandle}
          </a>
        </div>
        <div className="hero-bottom-center">
          <span className="hero-scroll-indicator">
            <span className="scroll-mouse"></span>
            <span>Scroll down</span>
          </span>
        </div>
        <div className="hero-bottom-right">
          <span className="hero-year-badge">{personal.yearRange}</span>
        </div>
      </div>
    </section>
  );
}

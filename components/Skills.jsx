'use client';

import Starburst from './Starburst';
import { portofolioData } from '../data/portofolio';

export default function Skills() {
  const { categories } = portofolioData.skills;

  return (
    <section id="skills" className="section-container skills-section">
      {/* Section Header */}
      <div className="section-title-wrap">
        <span className="tiny-label">technical proficiencies & toolkit</span>
        <div className="section-title-row">
          <h2 className="section-title section-title-green">Technical Skills</h2>
          <Starburst
            size={36}
            color="var(--primary-green)"
            spikes={12}
            innerRatio={0.32}
            className="title-starburst"
          />
        </div>
        <p className="section-subtitle">
          Kombinasi teknologi web modern dan fundamental rekayasa perangkat lunak
          yang dipelajari dan diimplementasikan secara terstruktur.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="skills-card-grid">
        {categories.map((category, index) => (
          <div key={index} className="skill-category-card">
            <div className="skill-card-top">
              <span
                className="skill-card-badge"
                style={{
                  borderColor: category.accent,
                  color: category.accent === 'var(--primary-pink)' ? 'var(--primary-pink)' : category.accent,
                }}
              >
                {category.badge}
              </span>
              <Starburst
                size={22}
                color={category.accent}
                spikes={10}
                innerRatio={0.35}
              />
            </div>

            <h3 className="skill-card-title">{category.title}</h3>
            <p className="skill-card-desc">{category.description}</p>

            <div className="skill-pills-wrap">
              {category.items.map((skill) => (
                <div key={skill} className="skill-badge-item">
                  <span className="skill-badge-dot"></span>
                  <span className="skill-badge-text">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Learning Commitment Note */}
      <div className="skills-footer-note">
        <div className="skills-note-icon">
          <Starburst
            size={24}
            color="var(--primary-pink)"
            spikes={10}
            innerRatio={0.3}
          />
        </div>
        <p className="skills-note-text">
          <strong>Continuous Learning:</strong> Terus mengasah pemahaman arsitektur
          komponen React, routing Next.js, performa render, dan standar penulisan kode
          yang bersih (clean code) dan mudah dirawat.
        </p>
      </div>
    </section>
  );
}

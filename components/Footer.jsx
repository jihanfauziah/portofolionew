'use client';

import Starburst from './Starburst';
import { portofolioData } from '../data/portfolio';

export default function Footer() {
  const { personal, contact, footer } = portofolioData;

  return (
    <footer className="footer-wrap">
      <div className="footer-container">
        {/* Top Footer Banner */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="footer-monogram">{personal.monogram}</span>
            <div>
              <span className="footer-name">{personal.name}</span>
              <span className="footer-role">{personal.role}</span>
            </div>
          </div>

          <div className="footer-status-pill">
            <Starburst size={16} color="var(--primary-green)" spikes={8} innerRatio={0.35} />
            <span>Open for Collaboration & Internship</span>
          </div>
        </div>

        {/* Middle Divider */}
        <hr className="footer-divider" />

        {/* Bottom Nav & Legal */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">{footer.copyright}</p>

          <nav className="footer-nav-links" aria-label="Footer Links">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Instagram
            </a>
            <a href={contact.emailLink} className="footer-link">
              Email
            </a>
            <a href="#top" className="footer-link footer-back-to-top">
              Kembali ke Atas ↑
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

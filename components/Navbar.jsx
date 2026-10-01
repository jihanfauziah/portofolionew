'use client';

import { useState, useEffect } from 'react';
import Starburst from './Starburst';
import { portofolioData } from '../data/portofolio';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Monogram */}
        <a href="#top" className="navbar-brand" onClick={closeMenu}>
          <span className="navbar-brand-badge">
            <span className="navbar-brand-text">{portofolioData.personal.monogram}</span>
          </span>
          <div className="navbar-brand-info">
            <span className="navbar-brand-name">{portofolioData.personal.name}</span>
            <span className="navbar-brand-role">{portofolioData.personal.role.split('/')[0]}</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav-desktop" aria-label="Main Navigation">
          {portofolioData.navigation.map((item) => (
            <a key={item.label} href={item.href} className="navbar-nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="navbar-actions-desktop">
          <a href="#contact" className="btn btn-primary btn-sm">
            <span>Let's Talk</span>
            <Starburst size={14} color="#FFFFFF" spikes={8} innerRatio={0.4} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="navbar-hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="hamburger-close">✕</span>
          ) : (
            <span className="hamburger-bars">
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
              <span className="bar bar-3"></span>
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <nav
        className={`navbar-mobile-drawer ${isOpen ? 'is-open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div className="navbar-mobile-inner">
          {portofolioData.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="navbar-mobile-link"
              onClick={closeMenu}
            >
              <span>{item.label}</span>
              <span className="mobile-link-arrow">→</span>
            </a>
          ))}
          <div className="navbar-mobile-cta">
            <a
              href="#contact"
              className="btn btn-primary btn-block"
              onClick={closeMenu}
            >
              <span>Let's Talk</span>
              <Starburst size={16} color="#FFFFFF" spikes={8} innerRatio={0.4} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

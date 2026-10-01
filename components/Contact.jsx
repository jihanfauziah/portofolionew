'use client';

import { useState } from 'react';
import Starburst from './Starburst';
import { portofolioData } from '../data/portfolio';

export default function Contact() {
  const { contact } = portofolioData;
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    // Reset message after client-side acknowledgement
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section-container contact-section">
      {/* Section Header */}
      <div className="section-title-wrap">
        <span className="tiny-label">inquiries & collaboration</span>
        <div className="section-title-row">
          <h2 className="section-title section-title-pink">{contact.heading}</h2>
          <Starburst
            size={36}
            color="var(--primary-pink)"
            spikes={14}
            innerRatio={0.3}
            className="title-starburst"
          />
        </div>
        <p className="section-subtitle">{contact.subheading}</p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="contact-info-panel">
          <div className="contact-intro-card">
            <h3 className="contact-card-title">Mari Terhubung</h3>
            <p className="contact-card-desc">
              Punya ide website yang ingin diwujudkan atau butuh bantuan frontend
              developer yang teliti dan bersemangat? Silakan hubungi langsung melalui saluran di bawah ini.
            </p>
          </div>

          <div className="contact-channels-list">
            {/* Email Channel */}
            <a
              href={contact.emailLink}
              className="contact-channel-item"
              aria-label="Kirim email ke Jihan Fauziah"
            >
              <div className="channel-icon-wrap channel-icon-pink">
                <span className="channel-symbol">✉</span>
              </div>
              <div className="channel-content">
                <span className="channel-label">Email Utama</span>
                <span className="channel-value">{contact.email}</span>
              </div>
              <span className="channel-action">Kirim Email →</span>
            </a>

            {/* GitHub Channel */}
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-item"
              aria-label="Kunjungi profil GitHub Jihan Fauziah"
            >
              <div className="channel-icon-wrap channel-icon-dark">
                <span className="channel-symbol">⌘</span>
              </div>
              <div className="channel-content">
                <span className="channel-label">GitHub Repository</span>
                <span className="channel-value">{contact.githubDisplay}</span>
              </div>
              <span className="channel-action">Lihat Profil ↗</span>
            </a>

            {/* Instagram Channel */}
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-item"
              aria-label="Kunjungi profil Instagram Jihan Fauziah"
            >
              <div className="channel-icon-wrap channel-icon-green">
                <span className="channel-symbol">◈</span>
              </div>
              <div className="channel-content">
                <span className="channel-label">Instagram Pribadi</span>
                <span className="channel-value">{contact.instagramDisplay}</span>
              </div>
              <span className="channel-action">Kunjungi ↗</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="contact-form-panel">
          <div className="contact-form-card">
            <div className="form-header">
              <span className="tiny-label">kirim pesan langsung</span>
              <h3 className="form-title">Tinggalkan Pesan</h3>
            </div>

            {submitted ? (
              <div className="form-success-alert">
                <span className="success-icon">✓</span>
                <div>
                  <strong>Terima kasih, {formState.name}!</strong>
                  <p>Pesan Anda telah siap diteruskan. Anda juga dapat mengirimkan langsung via email.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Nama Lengkap
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Masukkan nama Anda"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Alamat Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Pesan atau Ide Proyek
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows="4"
                    placeholder="Tuliskan pesan atau kebutuhan proyek Anda di sini..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  <span>Kirim Pesan</span>
                  <Starburst size={16} color="#FFFFFF" spikes={8} innerRatio={0.4} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

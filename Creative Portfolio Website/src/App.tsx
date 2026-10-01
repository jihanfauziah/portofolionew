import { useState } from 'react';
import type { CSSProperties } from 'react';

const PINK  = '#E875AC';
const GREEN = '#087A4B';
const CREAM = '#F8EEEE';
const DARK  = '#1A1A1A';

/* ─── Starburst SVG ──────────────────────────────────────────────── */
function Starburst({
  size = 60,
  color = PINK,
  spikes = 12,
  innerRatio = 0.34,
  className = '',
  style,
}: {
  size?: number;
  color?: string;
  spikes?: number;
  innerRatio?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size / 2;
  const innerR = outerR * innerRatio;
  const pts: string[] = [];
  for (let i = 0; i < spikes * 2; i++) {
    const angle = (i * Math.PI) / spikes - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    pts.push(`${(cx + r * Math.cos(angle)).toFixed(3)},${(cy + r * Math.sin(angle)).toFixed(3)}`);
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      style={style}
      aria-hidden
    >
      <polygon points={pts.join(' ')} fill={color} />
    </svg>
  );
}

/* ─── Mobile hamburger header ────────────────────────────────────── */
function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="mobile-header">
        {/* Monogram */}
        <span
          style={{
            fontSize: '14px',
            fontWeight: 800,
            color: DARK,
            letterSpacing: '0.06em',
          }}
        >
          JF
        </span>

        {/* Hamburger / close button */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            justifyContent: 'center',
          }}
        >
          {open ? (
            /* Close × */
            <span style={{ fontSize: '20px', lineHeight: 1, color: DARK, fontWeight: 400 }}>✕</span>
          ) : (
            /* Three bars */
            <>
              <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: DARK, borderRadius: '1px' }} />
              <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: DARK, borderRadius: '1px' }} />
              <span style={{ display: 'block', width: '16px', height: '2px', backgroundColor: DARK, borderRadius: '1px' }} />
            </>
          )}
        </button>
      </header>

      {open && (
        <nav className="mobile-menu-overlay">
          {[
            { label: 'About Me', href: '#about' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact',  href: '#contact' },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-menu-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}

/* ─── Marquee bar ────────────────────────────────────────────────── */
function MarqueeBar({ text = 'about me', reverse = false }: { text?: string; reverse?: boolean }) {
  return (
    <div style={{ backgroundColor: PINK, overflow: 'hidden', width: '100%', padding: '11px 0' }}>
      <div className={reverse ? 'marquee-inner-reverse' : 'marquee-inner'}>
        {Array.from({ length: 40 }, (_, i) => (
          <span
            key={i}
            style={{
              color: GREEN,
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              marginRight: '32px',
              flexShrink: 0,
            }}
          >
            {text}
            <span style={{ fontSize: '7px', lineHeight: 1 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Skill pill ─────────────────────────────────────────────────── */
function SkillPill({ label }: { label: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        border: '1px solid rgba(0,0,0,0.18)',
        fontSize: '9px',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: '4px 10px',
        color: DARK,
        whiteSpace: 'nowrap',
        lineHeight: 1.4,
      }}
    >
      {label}
    </span>
  );
}

/* ─── Project card ───────────────────────────────────────────────── */
function ProjectCard({
  category,
  title,
  description,
  imageUrl,
  accent = PINK,
}: {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  accent?: string;
}) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 22px rgba(0,0,0,0.06)',
      }}
    >
      <div
        style={{
          aspectRatio: '16 / 10',
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#ddd',
          flexShrink: 0,
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <span
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            backgroundColor: accent,
            color: '#fff',
            fontSize: '8px',
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            padding: '4px 10px',
          }}
        >
          {category}
        </span>
      </div>
      <div style={{ padding: '20px 22px 28px', flex: 1 }}>
        <h3
          style={{
            fontSize: '16px',
            fontWeight: 800,
            color: DARK,
            margin: '0 0 10px',
            letterSpacing: '-0.01em',
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: '11px', color: '#777', lineHeight: 1.85, margin: 0 }}>
          {description}
        </p>
      </div>
    </div>
  );
}

/* ─── Section label (tiny uppercase) ────────────────────────────── */
function TinyLabel({ children }: { children: string }) {
  return (
    <p
      style={{
        fontSize: '8px',
        fontWeight: 700,
        letterSpacing: '0.26em',
        textTransform: 'uppercase',
        color: '#c8bebe',
        margin: '0 0 14px',
      }}
    >
      {children}
    </p>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   App
═══════════════════════════════════════════════════════════════════ */
export default function App() {
  return (
    <div style={{ backgroundColor: CREAM, minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ── Mobile-only sticky header + hamburger menu ─────────────── */}
      <MobileHeader />

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="hero-section">

        {/* Top row: editorial label (hidden on mobile) | decorative starburst */}
        <div className="hero-top-row">
          <span className="hero-tiny-label">
            the start, the idea was simple.
          </span>
          <Starburst size={54} color={PINK} spikes={18} innerRatio={0.27} style={{ flexShrink: 0 }} />
        </div>

        {/* Center: grows to fill viewport height */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingBottom: '32px',
          }}
        >
          {/* Green editorial tagline */}
          <p
            style={{
              fontSize: '11px',
              color: GREEN,
              fontWeight: 500,
              letterSpacing: '0.07em',
              margin: '0 0 32px 3px',
            }}
          >
            an ordinary piece of work, done out of necessity and intention
          </p>

          {/* Giant PORTFOLIO — final O replaced by green starburst */}
          <div className="portfolio-headline-row">
            <span className="portfolio-headline-text">PORTFOLI</span>

            {/* O as starburst */}
            <span
              style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: 0.88,
              }}
            >
              {/* Hidden O preserves correct character advance-width */}
              <span className="portfolio-o-hidden">O</span>
              {/* Green starburst centred on the O */}
              <Starburst
                size={200}
                color={GREEN}
                spikes={22}
                innerRatio={0.27}
                className="portfolio-o-star"
              />
            </span>
          </div>
        </div>

        {/* Bottom row: social handle | year */}
        <div className="hero-bottom">
          <div>
            <p style={{ fontSize: '10px', color: '#aaa', margin: '0 0 4px', letterSpacing: '0.06em' }}>
              see more of my work
            </p>
            <p style={{ fontSize: '12px', color: DARK, fontWeight: 700, margin: 0, letterSpacing: '0.04em' }}>
              @jihanfauziah_
            </p>
          </div>
          <p style={{ fontSize: '10px', color: '#bbb', margin: 0, letterSpacing: '0.12em' }}>
            portfolio 2024–2026
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MARQUEE 1 — about me
      ════════════════════════════════════════ */}
      <MarqueeBar text="about me" />

      {/* ════════════════════════════════════════
          ABOUT ME
      ════════════════════════════════════════ */}
      <section id="about" className="section-pad">

        {/* Section heading */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            marginBottom: '64px',
            flexWrap: 'wrap',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(34px, 6vw, 88px)',
              fontWeight: 800,
              color: PINK,
              letterSpacing: '-0.03em',
              margin: 0,
              lineHeight: 1,
            }}
          >
            Get to know Me!
          </h2>
          <Starburst size={42} color={PINK} spikes={14} innerRatio={0.3} style={{ flexShrink: 0 }} />
        </div>

        {/* Two-column grid → stacks on mobile */}
        <div className="about-grid">

          {/* LEFT: portrait */}
          <div style={{ position: 'relative' }}>
            {/* Faded pink starburst ghost behind photo */}
            <Starburst
              size={500}
              color={PINK}
              spikes={14}
              innerRatio={0.42}
              style={{
                position: 'absolute',
                top: '-60px',
                left: '-70px',
                opacity: 0.13,
                zIndex: 0,
                pointerEvents: 'none',
                maxWidth: '110%',
              }}
            />
            {/* Portrait */}
            <div className="portrait-box" style={{ zIndex: 1, position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1783095627609-a007acec9996?w=600&h=800&fit=crop&auto=format"
                alt="Jihan Fauziah"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <p
              style={{
                fontSize: '8px',
                color: '#c8bebe',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                marginTop: '14px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              Jihan Fauziah — SMK PPLG
            </p>
          </div>

          {/* RIGHT: info */}
          <div>
            <h3
              style={{
                fontSize: 'clamp(20px, 2.5vw, 26px)',
                fontWeight: 800,
                color: DARK,
                margin: '0 0 16px',
                letterSpacing: '-0.01em',
              }}
            >
              Hello! I'm Jihan Fauziah!
            </h3>
            <p
              style={{
                fontSize: '13px',
                color: '#666',
                lineHeight: 1.95,
                margin: '0 0 44px',
                maxWidth: '440px',
              }}
            >
              I'm an SMK PPLG student interested in web development, UI/UX design, and
              creative digital work. I enjoy learning new things and turning ideas into
              useful digital experiences.
            </p>

            {/* Experience */}
            <div style={{ marginBottom: '44px' }}>
              <TinyLabel>Experience</TinyLabel>
              {[
                { role: 'Web Development', period: '2024 – Present' },
                { role: 'UI/UX Design',    period: '2024 – Present' },
                { role: 'Creative Design', period: 'Personal Projects' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(0,0,0,0.07)',
                    gap: '12px',
                  }}
                >
                  <span style={{ fontSize: '13px', fontWeight: 600, color: DARK }}>{item.role}</span>
                  <span style={{ fontSize: '11px', color: '#bbb', whiteSpace: 'nowrap' }}>{item.period}</span>
                </div>
              ))}
            </div>

            {/* Skills + Contact — 2-col grid, stacks on small mobile */}
            <div className="skills-contact-grid">

              {/* Software skills */}
              <div>
                <TinyLabel>Software Skills</TinyLabel>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Figma', 'Photoshop', 'Laravel'].map(s => (
                    <SkillPill key={s} label={s} />
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div id="contact">
                <TinyLabel>Contact Me</TinyLabel>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { label: 'Email',     value: 'jihanfauziah1414@gmail.com' },
                    { label: 'Instagram', value: '@jihaanfauziah_' },
                    { label: 'GitHub',    value: 'github.com/jihanfauziah' },
                  ].map(c => (
                    <div key={c.label}>
                      <span
                        style={{
                          display: 'block',
                          fontSize: '8px',
                          color: '#d0c8c8',
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          marginBottom: '2px',
                        }}
                      >
                        {c.label}
                      </span>
                      <span style={{ fontSize: '12px', color: DARK, fontWeight: 500 }}>
                        {c.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MARQUEE 2 — projects
      ════════════════════════════════════════ */}
      <MarqueeBar text="presentation project" reverse />

      {/* ════════════════════════════════════════
          PROJECTS
      ════════════════════════════════════════ */}
      <section id="projects" className="section-pad-b">

        {/* Heading */}
        <div style={{ marginBottom: '52px' }}>
          <TinyLabel>presentation project with various styles</TinyLabel>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <h2
              style={{
                fontSize: 'clamp(30px, 5.5vw, 78px)',
                fontWeight: 800,
                color: GREEN,
                letterSpacing: '-0.03em',
                margin: 0,
                lineHeight: 1,
              }}
            >
              Presentation Project
            </h2>
            <Starburst size={28} color={PINK}  spikes={12} innerRatio={0.3}  style={{ flexShrink: 0 }} />
            <Starburst size={20} color={GREEN} spikes={8}  innerRatio={0.36} style={{ flexShrink: 0 }} />
          </div>
        </div>

        {/* Cards: 3-col → 2-col → 1-col */}
        <div className="projects-grid">
          <ProjectCard
            category="Mobile Application"
            title="Muslim App"
            description="Aplikasi mobile Islami yang menyediakan fitur jadwal sholat akurat, Al-Qur'an digital, doa harian, dan petunjuk arah kiblat dengan antarmuka yang bersih dan mudah digunakan."
            imageUrl="/images/Project-1.jpeg"
            accent={GREEN}
          />
          <ProjectCard
            category="Web Application"
            title="Daebak.Tix"
            description="Platform web pemesanan tiket konser dan fanmeeting K-Pop resmi dengan sistem digital ber-QR Code untuk transaksi yang aman, terpercaya, dan bebas calo."
            imageUrl="/images/Project-2.jpeg"
            accent={PINK}
          />
          <ProjectCard
            category="Frontend Showcase"
            title="Lightstick Web"
            description="Website landing page interaktif merchandise Official CORTIS Lightstick yang menampilkan spesifikasi produk, galeri visual elegan, dan alur pre-order yang responsif."
            imageUrl="/images/Project-3.jpeg"
            accent={DARK}
          />
        </div>

        {/* Project description */}
        <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-start', maxWidth: '520px' }}>
          <Starburst
            size={26}
            color={PINK}
            spikes={10}
            innerRatio={0.3}
            style={{ flexShrink: 0, marginTop: '3px' }}
          />
          <p style={{ fontSize: '12px', color: '#777', lineHeight: 1.95, margin: 0 }}>
            This project was created during my experience in graphic and presentation design.
            Each design explores a different visual style while maintaining a clear and functional layout.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════ */}
      <footer className="footer-wrap">
        <div className="footer-inner">
          <p style={{ fontSize: '10px', color: '#ccc', margin: 0, letterSpacing: '0.14em' }}>
            portfolio 2024–2026
          </p>
          <nav className="footer-nav">
            {[
              { label: 'About Me', href: '#about' },
              { label: 'Projects', href: '#projects' },
              { label: 'Contact',  href: '#contact' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '11px',
                  color: '#999',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}

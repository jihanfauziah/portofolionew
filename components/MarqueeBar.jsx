'use client';

export default function MarqueeBar({
  text = 'about me',
  reverse = false,
  bgColor = 'var(--primary-pink)',
  textColor = 'var(--primary-green)',
}) {
  const items = Array.from({ length: 28 }, (_, i) => i);

  return (
    <div
      className="marquee-container"
      style={{ backgroundColor: bgColor }}
      aria-hidden="true"
    >
      <div className={reverse ? 'marquee-track marquee-track-reverse' : 'marquee-track'}>
        {items.map((i) => (
          <span
            key={`a-${i}`}
            className="marquee-item"
            style={{ color: textColor }}
          >
            <span>{text}</span>
            <span className="marquee-sparkle">✦</span>
          </span>
        ))}
      </div>
      <div className={reverse ? 'marquee-track marquee-track-reverse' : 'marquee-track'}>
        {items.map((i) => (
          <span
            key={`b-${i}`}
            className="marquee-item"
            style={{ color: textColor }}
          >
            <span>{text}</span>
            <span className="marquee-sparkle">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

'use client';

export default function Starburst({
  size = 60,
  color = '#E875AC',
  spikes = 12,
  innerRatio = 0.34,
  className = '',
  style = {},
}) {
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size / 2;
  const innerR = outerR * innerRatio;
  const pts = [];

  for (let i = 0; i < spikes * 2; i++) {
    const angle = (i * Math.PI) / spikes - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    pts.push(
      `${(cx + r * Math.cos(angle)).toFixed(3)},${(cy + r * Math.sin(angle)).toFixed(3)}`
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`starburst-icon ${className}`}
      style={style}
      aria-hidden="true"
    >
      <polygon points={pts.join(' ')} fill={color} />
    </svg>
  );
}

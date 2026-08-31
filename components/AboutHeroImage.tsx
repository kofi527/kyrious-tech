type AboutHeroImageProps = {
  className?: string;
};

/**
 * About landing illustration — partnership, growth, and team collaboration.
 */
export function AboutHeroImage({ className }: AboutHeroImageProps) {
  return (
    <svg
      viewBox="0 0 640 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Illustration representing team collaboration and business growth"
    >
      <defs>
        <linearGradient id="about-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="about-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
        <filter id="about-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="24" />
        </filter>
      </defs>

      <rect width="640" height="480" rx="24" fill="url(#about-bg)" />
      <ellipse
        cx="520"
        cy="100"
        rx="130"
        ry="95"
        fill="#22d3ee"
        fillOpacity="0.1"
        filter="url(#about-blur)"
      />

      {/* Central hub */}
      <circle cx="320" cy="240" r="72" fill="#ffffff" stroke="url(#about-accent)" strokeWidth="2.5" />
      <circle cx="320" cy="240" r="28" fill="url(#about-accent)" fillOpacity="0.25" />
      <path
        d="M320 212 L320 268 M296 240 L344 240"
        stroke="url(#about-accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Team nodes */}
      {[
        { cx: 160, cy: 140 },
        { cx: 480, cy: 140 },
        { cx: 120, cy: 340 },
        { cx: 520, cy: 340 },
      ].map(({ cx, cy }) => (
        <g key={`${cx}-${cy}`}>
          <line
            x1={320}
            y1={240}
            x2={cx}
            y2={cy}
            stroke="#475569"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
          <circle cx={cx} cy={cy} r="44" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx={cx} cy={cy - 12} r="14" fill="url(#about-accent)" fillOpacity="0.4" />
          <rect
            x={cx - 22}
            y={cy + 8}
            width={44}
            height={8}
            rx="4"
            fill="#cbd5e1"
          />
        </g>
      ))}

      {/* Growth bars */}
      <rect x="88" y="88" width="160" height="100" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
      <rect x="108" y="148" width="24" height="28" rx="4" fill="#cbd5e1" />
      <rect x="140" y="128" width="24" height="48" rx="4" fill="#94a3b8" />
      <rect x="172" y="108" width="24" height="68" rx="4" fill="url(#about-accent)" fillOpacity="0.6" />
      <rect x="204" y="118" width="24" height="58" rx="4" fill="url(#about-accent)" fillOpacity="0.35" />
      <rect x="108" y="100" width="80" height="8" rx="4" fill="#22d3ee" fillOpacity="0.6" />

      {/* Partnership handshake motif (abstract) */}
      <rect x="392" y="88" width="160" height="100" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
      <path
        d="M432 148 C448 128 472 128 488 148 C504 132 528 136 536 156 L520 168 C512 160 496 158 488 166 C472 150 448 150 432 166 L416 154 C424 140 416 132 432 148 Z"
        fill="url(#about-accent)"
        fillOpacity="0.35"
        stroke="url(#about-accent)"
        strokeWidth="1.5"
      />
      <rect x="416" y="100" width="96" height="8" rx="4" fill="#34d399" fillOpacity="0.5" />
    </svg>
  );
}

type KyriousLogoProps = {
  className?: string;
  size?: number;
  /** Accessible label; omit when decorative (e.g. next to company name in text). */
  title?: string;
};

/**
 * Kyrious Tech wordmark: stylized “K” with a curiosity node, cyan–emerald gradient.
 */
export function KyriousLogo({
  className,
  size = 56,
  title,
}: KyriousLogoProps) {
  const gradId = "kyrious-logo-face-grad";
  const glowId = "kyrious-logo-glow-grad";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id={gradId} x1="12%" y1="8%" x2="88%" y2="92%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="55%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
        <linearGradient id={glowId} x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.2" />
        </linearGradient>
        <filter id="kyrious-logo-soft-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect
        x="1.5"
        y="1.5"
        width="53"
        height="53"
        rx="14"
        fill="#ffffff"
        stroke={`url(#${glowId})`}
        strokeWidth="1.25"
      />

      <g filter="url(#kyrious-logo-soft-glow)">
        {/* K stem */}
        <path
          d="M18 14 L18 42"
          stroke={`url(#${gradId})`}
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* K upper arm */}
        <path
          d="M18 26 L34 14"
          stroke={`url(#${gradId})`}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* K lower arm */}
        <path
          d="M18 26 L36 42"
          stroke={`url(#${gradId})`}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Curiosity / insight node */}
        <circle cx="40" cy="16" r="4.5" fill="#34d399" />
        <circle cx="40" cy="16" r="2" fill="#ecfdf5" fillOpacity="0.85" />
      </g>
    </svg>
  );
}

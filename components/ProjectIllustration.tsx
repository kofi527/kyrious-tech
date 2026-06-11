import type { ProjectImageVariant } from "../app/projects/data";

type ProjectIllustrationProps = {
  variant: ProjectImageVariant;
  className?: string;
};

export function ProjectIllustration({ variant, className }: ProjectIllustrationProps) {
  const labels: Record<ProjectImageVariant, string> = {
    cloud: "Cloud infrastructure and migration illustration",
    mobile: "Mobile application maintenance illustration",
    ai: "Machine learning and hazard detection illustration",
    api: "API development and system integration illustration",
  };

  return (
    <svg
      viewBox="0 0 640 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={labels[variant]}
    >
      <defs>
        <linearGradient id={`proj-bg-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id={`proj-accent-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>

      <rect width="640" height="360" fill={`url(#proj-bg-${variant})`} />

      {variant === "cloud" && <CloudArt accent={`proj-accent-${variant}`} />}
      {variant === "mobile" && <MobileArt accent={`proj-accent-${variant}`} />}
      {variant === "ai" && <AiArt accent={`proj-accent-${variant}`} />}
      {variant === "api" && <ApiArt accent={`proj-accent-${variant}`} />}
    </svg>
  );
}

function CloudArt({ accent }: { accent: string }) {
  return (
    <>
      <ellipse cx="520" cy="80" rx="100" ry="70" fill="#22d3ee" fillOpacity="0.12" />
      <path
        d="M200 140 C240 100 300 100 330 130 C370 128 410 158 400 198 C430 218 410 260 370 260 L230 260 C190 260 170 218 200 198 C188 158 228 128 200 140 Z"
        fill="#0f172a"
        stroke={`url(#${accent})`}
        strokeWidth="2.5"
      />
      <rect x="120" y="200" width="400" height="100" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      <rect x="148" y="228" width="80" height="44" rx="8" fill="#22d3ee" fillOpacity="0.2" stroke="#22d3ee" strokeWidth="1.5" />
      <rect x="248" y="228" width="80" height="44" rx="8" fill="#34d399" fillOpacity="0.15" stroke="#34d399" strokeWidth="1.5" />
      <rect x="348" y="228" width="80" height="44" rx="8" fill="#22d3ee" fillOpacity="0.2" stroke="#22d3ee" strokeWidth="1.5" />
      <path d="M188 272 L428 272" stroke="#475569" strokeWidth="2" strokeDasharray="6 6" />
      <path
        d="M320 198 L320 228 M280 198 L360 228"
        stroke={`url(#${accent})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  );
}

function MobileArt({ accent }: { accent: string }) {
  return (
    <>
      <rect x="248" y="48" width="144" height="264" rx="20" fill="#0f172a" stroke="#334155" strokeWidth="2.5" />
      <rect x="268" y="72" width="104" height="180" rx="8" fill="#1e293b" />
      <rect x="288" y="92" width="64" height="8" rx="4" fill="#334155" />
      <rect x="288" y="112" width="64" height="48" rx="8" fill={`url(#${accent})`} fillOpacity="0.25" />
      <circle cx="320" cy="280" r="10" stroke="#475569" strokeWidth="2" />
      <rect x="80" y="120" width="120" height="72" rx="10" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      <path
        d="M108 156 L132 180 L108 204"
        stroke={`url(#${accent})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="440" y="100" width="120" height="100" rx="10" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      <polyline
        points="468,160 492,136 516,152 540,120"
        stroke="#34d399"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="540" cy="120" r="5" fill="#34d399" />
    </>
  );
}

function AiArt({ accent }: { accent: string }) {
  return (
    <>
      <rect x="80" y="60" width="200" height="140" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      <rect x="100" y="80" width="160" height="100" rx="8" fill="#1e293b" />
      <circle cx="140" cy="120" r="16" stroke="#f87171" strokeWidth="3" fill="#f87171" fillOpacity="0.2" />
      <path d="M200 100 L240 80 L280 110 L240 140 Z" stroke="#34d399" strokeWidth="2" fill="#34d399" fillOpacity="0.15" />
      <rect x="360" y="80" width="200" height="200" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      <rect x="388" y="108" width="144" height="100" rx="8" fill="#1e293b" />
      <polyline
        points="408,180 440,140 472,160 504,120 532,150"
        stroke={`url(#${accent})`}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <rect x="388" y="224" width="60" height="28" rx="6" fill="#22d3ee" fillOpacity="0.3" />
      <text x="400" y="243" fill="#22d3ee" fontSize="11" fontFamily="system-ui,sans-serif">
        hazard
      </text>
      <rect x="460" y="224" width="72" height="28" rx="6" fill="#34d399" fillOpacity="0.25" />
      <text x="472" y="243" fill="#34d399" fontSize="11" fontFamily="system-ui,sans-serif">
        safe
      </text>
    </>
  );
}

function ApiArt({ accent }: { accent: string }) {
  return (
    <>
      <rect x="100" y="100" width="440" height="160" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      <rect x="100" y="100" width="440" height="40" rx="14" fill="#1e293b" />
      <rect x="100" y="128" width="440" height="12" fill="#1e293b" />
      <text x="128" y="126" fill="#94a3b8" fontSize="12" fontFamily="ui-monospace,monospace">
        GET /api/tee-times
      </text>
      <rect x="128" y="168" width="120" height="10" rx="4" fill="#334155" />
      <rect x="128" y="188" width="200" height="8" rx="4" fill="#1e293b" />
      <rect x="128" y="204" width="180" height="8" rx="4" fill="#1e293b" />
      <rect x="128" y="228" width="88" height="24" rx="6" fill={`url(#${accent})`} fillOpacity="0.35" />
      <circle cx="480" cy="200" r="48" fill="#0f172a" stroke={`url(#${accent})`} strokeWidth="2" />
      <circle cx="480" cy="200" r="6" fill="#34d399" />
      <path
        d="M456 200 C456 186 468 176 480 176 C492 176 504 186 504 200"
        stroke="#22d3ee"
        strokeWidth="2"
        fill="none"
      />
      <line x1="480" y1="176" x2="480" y2="168" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
      <path d="M468 212 Q480 224 492 212" stroke="#475569" strokeWidth="2" fill="none" />
    </>
  );
}

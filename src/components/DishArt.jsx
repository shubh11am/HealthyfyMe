// Flat illustrated thumbnails — keeps the prototype self-contained (no image hosts).

const WASH = {
  paneer: ["#fdf0e4", "#f8dcc4"],
  chicken: ["#e9f4ec", "#cfe8d8"],
  parfait: ["#f2ecf7", "#e0d4ef"],
};

export default function DishArt({ art = "paneer", size = 66, className = "" }) {
  const [a, b] = WASH[art] ?? WASH.paneer;
  const id = `wash-${art}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      className={`shrink-0 rounded-2xl ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={a} />
          <stop offset="100%" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="72" height="72" rx="18" fill={`url(#${id})`} />

      {art === "paneer" && (
        <g>
          <path d="M13 34h46a23 23 0 0 1-23 23 23 23 0 0 1-23-23Z" fill="#fff" opacity="0.9" />
          <path d="M17 37h38a19 19 0 0 1-19 17 19 19 0 0 1-19-17Z" fill="#fbe3cb" />
          <rect x="22" y="38" width="11" height="10" rx="2.5" fill="#f0a15e" />
          <rect x="35" y="41" width="10" height="9" rx="2.5" fill="#e8834a" />
          <rect x="46" y="38" width="9" height="8" rx="2.5" fill="#f5b57c" />
          <circle cx="30" cy="20" r="6" fill="#8fce9e" opacity="0.75" />
          <circle cx="43" cy="24" r="4.4" fill="#63b97c" opacity="0.7" />
          <path d="M24 30c4-4 20-4 24 0" stroke="#e0a878" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
      )}

      {art === "chicken" && (
        <g>
          <path d="M12 33h48a24 24 0 0 1-24 24 24 24 0 0 1-24-24Z" fill="#fff" opacity="0.92" />
          <path d="M17 36h20a10 10 0 0 1-10 16 12 12 0 0 1-10-16Z" fill="#efe0c0" />
          <rect x="37" y="36" width="18" height="6" rx="3" fill="#c4834c" />
          <rect x="35" y="44" width="17" height="6" rx="3" fill="#b3703c" />
          <path d="M40 37.5h12M38 45.5h12" stroke="#8a5327" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="26" cy="21" r="6.5" fill="#7cc48f" opacity="0.8" />
          <circle cx="40" cy="18" r="4.5" fill="#4faa72" opacity="0.75" />
          <circle cx="49" cy="24" r="5" fill="#a8d9b6" opacity="0.85" />
        </g>
      )}

      {art === "parfait" && (
        <g>
          <path d="M25 14h22l-3 40a5 5 0 0 1-5 4.5h-6a5 5 0 0 1-5-4.5Z" fill="#fff" opacity="0.95" />
          <path d="M27 26h18l-1.2 16H28.2Z" fill="#c9a7e8" opacity="0.85" />
          <path d="M28.2 42h15.6l-.8 11a3 3 0 0 1-3 2.6h-8a3 3 0 0 1-3-2.6Z" fill="#f4f0fa" />
          <path d="M26.4 20h19.2l-.4 6H26.8Z" fill="#efe4fb" />
          <circle cx="32" cy="17" r="3.6" fill="#8d5cc4" />
          <circle cx="40" cy="16" r="3" fill="#b07de0" />
          <circle cx="36" cy="20.5" r="2.6" fill="#6f3fa8" />
        </g>
      )}
    </svg>
  );
}

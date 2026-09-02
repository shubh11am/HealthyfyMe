// Line icons drawn to match the tracker app's thin, rounded stroke style.
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Svg({ children, size = 24, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" {...base} {...rest}>
      {children}
    </svg>
  );
}

export const PersonIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="8.5" r="3.2" />
    <path d="M5.5 19.5c1.1-3.2 3.6-4.8 6.5-4.8s5.4 1.6 6.5 4.8" />
  </Svg>
);

export const CrownIcon = (p) => (
  <Svg {...p}>
    <path d="M3.5 8.2 6.8 11l3-4.6a1.5 1.5 0 0 1 2.5 0l3 4.6 3.2-2.8c.8-.7 2 0 1.8 1L18.7 17a1.5 1.5 0 0 1-1.5 1.2H6.8A1.5 1.5 0 0 1 5.3 17L1.7 9.2c-.2-1 1-1.7 1.8-1Z" transform="translate(1.1)" />
  </Svg>
);

export const ChevronDown = (p) => (
  <Svg {...p}>
    <path d="m6.5 9.5 5.5 5.2 5.5-5.2" />
  </Svg>
);

export const ChevronUp = (p) => (
  <Svg {...p}>
    <path d="m6.5 14.5 5.5-5.2 5.5 5.2" />
  </Svg>
);

export const ChevronRight = (p) => (
  <Svg {...p}>
    <path d="m9.5 5.5 6 6.5-6 6.5" />
  </Svg>
);

export const ArrowLeft = (p) => (
  <Svg {...p}>
    <path d="M19 12H5.5" />
    <path d="m11 5.5-5.5 6.5 5.5 6.5" />
  </Svg>
);

export const ArrowRight = (p) => (
  <Svg {...p}>
    <path d="M5 12h13.5" />
    <path d="m13 5.5 5.5 6.5-5.5 6.5" />
  </Svg>
);

export const ArrowRightCircle = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12h7.5m-3-3 3 3-3 3" />
  </Svg>
);

export const CutleryIcon = (p) => (
  <Svg {...p}>
    <path d="M7.4 3.5v6.2a2 2 0 0 0 2 2h.1v9M7.4 3.5 7.3 8M9.6 3.5 9.5 8" />
    <path d="M16.6 3.5c-1.6.9-2.4 2.6-2.4 5 0 1.7.6 2.9 1.8 3.4l-.4 8.8" />
  </Svg>
);

export const CameraPlusIcon = (p) => (
  <Svg {...p}>
    <path d="M3.2 9.4a2 2 0 0 1 2-2h1.6l1.2-2h5.4l.6 1" />
    <path d="M20.8 11v6.6a2 2 0 0 1-2 2H5.2a2 2 0 0 1-2-2V9.4" />
    <circle cx="12" cy="13.6" r="3.3" />
    <path d="M18.4 3.6v4.6M16.1 5.9h4.6" />
  </Svg>
);

export const PlusIcon = (p) => (
  <Svg {...p}>
    <path d="M12 6.2v11.6M6.2 12h11.6" />
  </Svg>
);

export const PlusSquare = (p) => (
  <Svg {...p}>
    <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="5" />
    <path d="M12 8.4v7.2M8.4 12h7.2" />
  </Svg>
);

export const ScaleIcon = (p) => (
  <Svg {...p}>
    <rect x="3.4" y="4.6" width="17.2" height="14.8" rx="4" />
    <path d="M8.6 9.4h6.8" />
  </Svg>
);

export const FlameIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3.5c.4 2.6-1.3 3.6-2.6 5.1a5.6 5.6 0 0 0-1.5 3.9 6.1 6.1 0 1 0 12.2 0c0-1.6-.7-2.9-1.9-4.2" transform="translate(-2)" />
  </Svg>
);

export const StepsIcon = (p) => (
  <Svg {...p}>
    <path d="M7.2 4.4c1.4 0 2.2 1.2 2.2 3 0 1.4-.5 2.6-.5 3.7 0 1 .4 1.6.4 2.4 0 1.2-.8 2-2.1 2s-2.1-.8-2.1-2c0-.8.4-1.4.4-2.4 0-1.1-.5-2.3-.5-3.7 0-1.8.8-3 2.2-3Z" />
    <path d="M16.8 7.6c1.4 0 2.2 1.2 2.2 3 0 1.4-.5 2.6-.5 3.7 0 1 .4 1.6.4 2.4 0 1.2-.8 2-2.1 2s-2.1-.8-2.1-2c0-.8.4-1.4.4-2.4 0-1.1-.5-2.3-.5-3.7 0-1.8.8-3 2.2-3Z" />
  </Svg>
);

export const MoonIcon = (p) => (
  <Svg {...p}>
    <path d="M20 14.4A8.4 8.4 0 0 1 9.6 4 8.5 8.5 0 1 0 20 14.4Z" />
  </Svg>
);

export const WaterIcon = (p) => (
  <Svg {...p}>
    <path d="M6.6 5.2h10.8l-1.1 13.1a2 2 0 0 1-2 1.8h-4.6a2 2 0 0 1-2-1.8Z" />
    <path d="M6.9 9.4h10.2" />
  </Svg>
);

export const RefreshIcon = (p) => (
  <Svg {...p}>
    <path d="M20 12a8 8 0 1 1-2.6-5.9" />
    <path d="M20.4 4.4v4.2h-4.2" />
  </Svg>
);

export const HomeIcon = (p) => (
  <Svg {...p}>
    <path d="M4 10.4 12 4l8 6.4v8.1a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5Z" />
    <path d="M9.6 20v-5.2h4.8V20" />
  </Svg>
);

export const CoachIcon = (p) => (
  <Svg {...p}>
    <circle cx="9.3" cy="8.4" r="3" />
    <path d="M3.6 19c.9-2.8 3-4.2 5.7-4.2s4.8 1.4 5.7 4.2" />
    <path d="M16.2 6.1a3 3 0 0 1 0 5.5M17.6 14.9c1.5.6 2.5 1.9 3 4.1" />
  </Svg>
);

export const TrophyIcon = (p) => (
  <Svg {...p}>
    <path d="M7.4 4.2h9.2v4.9a4.6 4.6 0 1 1-9.2 0Z" />
    <path d="M7.4 6h-2a2 2 0 0 0 2 3.9M16.6 6h2a2 2 0 0 1-2 3.9" />
    <path d="M12 13.7v3.1M8.8 20h6.4" />
    <path d="m12 6.6.8 1.6 1.8.3-1.3 1.3.3 1.8-1.6-.9-1.6.9.3-1.8L9.4 8.5l1.8-.3Z" strokeWidth="1.2" />
  </Svg>
);

export const SparkleIcon = (p) => (
  <Svg {...p}>
    <path d="M13.4 3.5 15 7.9l4.4 1.6-4.4 1.6-1.6 4.4-1.6-4.4L7.4 9.5 11.8 8Z" />
    <path d="m7.2 14.6.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9Z" />
  </Svg>
);

export const BellIcon = (p) => (
  <Svg {...p}>
    <path d="M6.2 10.4a5.8 5.8 0 1 1 11.6 0c0 3.4.9 5 1.7 5.9H4.5c.8-.9 1.7-2.5 1.7-5.9Z" />
    <path d="M10 19.4a2.2 2.2 0 0 0 4 0" />
  </Svg>
);

export const CheckIcon = (p) => (
  <Svg {...p}>
    <path d="m5.5 12.6 4.3 4.3 8.7-9.8" />
  </Svg>
);

export const ShieldCheckIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3.2 19 6v5.6c0 4.1-2.8 7.4-7 9.2-4.2-1.8-7-5.1-7-9.2V6Z" />
    <path d="m9 11.8 2.2 2.2 4-4.3" />
  </Svg>
);

export const BoltIcon = (p) => (
  <Svg {...p}>
    <path d="M13.4 3 6 13.4h5l-.4 7.6L18 10.6h-5Z" />
  </Svg>
);

export const PillIcon = (p) => (
  <Svg {...p}>
    <rect x="2.6" y="8.6" width="18.8" height="6.8" rx="3.4" transform="rotate(-45 12 12)" />
    <path d="M8.9 8.9l6.2 6.2" />
  </Svg>
);

export const StoreIcon = (p) => (
  <Svg {...p}>
    <path d="M4.4 4.6h15.2l1.2 4a3 3 0 0 1-5.6 1.6 3 3 0 0 1-5.6 0 3 3 0 0 1-5.6-1.6Z" />
    <path d="M5.4 11.4v7.2a1.4 1.4 0 0 0 1.4 1.4h10.4a1.4 1.4 0 0 0 1.4-1.4v-7.2" />
  </Svg>
);

export const ClockIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 7.2V12l3.2 2" />
  </Svg>
);

export const StarIcon = ({ size = 14, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...rest}>
    <path d="m12 3.6 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.8l5.9-.8Z" />
  </svg>
);

import { useEffect, useState } from "react";

/**
 * Progress ring. `value` is 0-100 and animates whenever it changes, which is
 * what carries the 70% -> 100% "goal met" moment.
 */
export default function Ring({
  value,
  from = 0,
  size = 64,
  stroke = 4,
  className = "stroke-brand-500",
  trackClass = "stroke-ink-100",
  duration = 1100,
  delay = 60,
  children,
  rounded = true,
}) {
  const [shown, setShown] = useState(from);
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  useEffect(() => {
    const t = setTimeout(() => setShown(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);

  return (
    <div className="relative grid shrink-0 place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          className={trackClass}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap={rounded ? "round" : "butt"}
          className={className}
          strokeDasharray={c}
          strokeDashoffset={c * (1 - Math.min(shown, 100) / 100)}
          style={{ transition: `stroke-dashoffset ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)` }}
        />
      </svg>
      {children ? (
        <div className="absolute inset-0 grid place-items-center text-center">{children}</div>
      ) : null}
    </div>
  );
}

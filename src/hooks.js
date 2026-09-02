import { useEffect, useRef, useState } from "react";

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Eases a number up to `target`, used for the macro counters. */
export function useCountUp(target, { duration = 1200, delay = 0, start = 0 } = {}) {
  const [value, setValue] = useState(start);
  const frame = useRef(0);

  useEffect(() => {
    if (reduceMotion()) {
      setValue(target);
      return undefined;
    }
    let from = value;
    let startedAt = 0;
    const timer = setTimeout(() => {
      const tick = (now) => {
        if (!startedAt) startedAt = now;
        const t = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(from + (target - from) * eased));
        if (t < 1) frame.current = requestAnimationFrame(tick);
      };
      frame.current = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration, delay]);

  return value;
}

/** Runs a list of [ms, fn] steps in sequence and cleans up on unmount. */
export function useTimeline(steps, deps = []) {
  useEffect(() => {
    const timers = steps.map(([ms, fn]) => setTimeout(fn, ms));
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

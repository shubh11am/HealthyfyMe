import { useState } from "react";
import Ring from "../components/Ring";
import DishArt from "../components/DishArt";
import { PROTEIN } from "../data";
import { useCountUp, useTimeline } from "../hooks";
import {
  ArrowRight,
  BoltIcon,
  CheckIcon,
  ClockIcon,
  ShieldCheckIcon,
  StoreIcon,
} from "../components/Icons";

/**
 * Two beats in one screen: the one-tap "Order placed" confirmation, then the
 * ring closing from 69% to 100% once the meal is auto-logged.
 */
export default function OrderScreen({ dish, onHome, onSupplements }) {
  const [stage, setStage] = useState("placed"); // placed -> logging -> done
  const closed = stage !== "placed";

  useTimeline(
    [
      [1900, () => setStage("logging")],
      [2400, () => setStage("done")],
    ],
    [],
  );

  const grams = useCountUp(closed ? PROTEIN.target : PROTEIN.logged, {
    duration: 1200,
    delay: closed ? 120 : 0,
    start: PROTEIN.logged,
  });

  return (
    <div className="flex flex-1 flex-col overflow-y-auto no-scrollbar px-4 pt-4 pb-6">
      {/* ---- beat 1: order placed ---- */}
      <section className="animate-rise rounded-card bg-white p-5 shadow-card">
        <div className="flex items-center gap-3.5">
          <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
            <span className="absolute inset-0 animate-halo rounded-full bg-brand-500/40" />
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="m5.5 12.6 4.3 4.3 8.7-9.8"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="40"
                className="animate-check"
              />
            </svg>
          </span>
          <div className="min-w-0">
            <h1 className="text-[21px] font-bold tracking-tight">Order placed</h1>
            <p className="text-[13.5px] text-ink-500">
              Paid in-app &middot; no re-entering your address
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-ink-100/70 p-3">
          <DishArt art={dish.art} size={52} />
          <div className="min-w-0 flex-1">
            <p className="text-[14px] leading-tight font-semibold">{dish.name}</p>
            <p className="mt-0.5 text-[12.5px] text-ink-500">
              {dish.kitchen} &middot; +{dish.protein}g protein
            </p>
          </div>
          <span className="text-[15px] font-bold">&#8377;{dish.price}</span>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-[12.5px]">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1.5 font-semibold text-brand-800">
            <ClockIcon size={13} /> Arrives in {dish.eta}
          </span>
          {dish.channel === "ondc" ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-800 px-2.5 py-1.5 font-semibold text-white">
              <BoltIcon size={13} /> Fulfilled over ONDC
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-100 px-2.5 py-1.5 font-semibold text-ink-500">
              <StoreIcon size={13} /> Partner kitchen
            </span>
          )}
        </div>

        {dish.channel === "ondc" && (
          <p className="mt-2.5 text-[12px] leading-snug text-ink-500">
            &#8377;{dish.comparePrice - dish.price} less than the same bowl on {dish.compareOn} —
            an open network has no aggregator commission to fund.
          </p>
        )}
      </section>

      {/* ---- beat 2: the gap closes itself ---- */}
      <section
        className={`mt-4 rounded-card p-6 text-center transition-all duration-700 ${
          closed
            ? "bg-gradient-to-br from-brand-800 to-brand-950 text-white shadow-card"
            : "bg-white/70 text-ink-400 shadow-card"
        }`}
      >
        <Ring
          value={closed ? 100 : PROTEIN.pct}
          from={PROTEIN.pct}
          size={188}
          stroke={14}
          duration={1300}
          delay={120}
          className={closed ? "stroke-brand-400" : "stroke-food-400"}
          trackClass={closed ? "stroke-white/12" : "stroke-ink-100"}
        >
          <div
            className={`leading-none ${closed ? "animate-ring-pop text-white" : "text-ink-900"}`}
          >
            <div className="text-[46px] font-bold tracking-tight">{closed ? 100 : PROTEIN.pct}%</div>
            <div
              className={`mt-1 text-[11px] font-semibold tracking-[0.14em] uppercase ${
                closed ? "text-brand-300" : "text-ink-400"
              }`}
            >
              protein
            </div>
            <div className={`mt-1.5 text-[13px] ${closed ? "text-white/60" : "text-ink-400"}`}>
              {grams}g / {PROTEIN.target}g
            </div>
          </div>
        </Ring>

        <h2
          className={`mt-5 text-[22px] leading-tight font-bold tracking-tight ${
            closed ? "text-white" : "text-ink-500"
          }`}
        >
          {closed ? "Goal met" : "Waiting on delivery…"}
        </h2>
        <p
          className={`mx-auto mt-1.5 max-w-[17rem] text-[14px] leading-snug ${
            closed ? "text-white/70" : "text-ink-400"
          }`}
        >
          {closed
            ? "Logged automatically. You didn’t search a database, weigh a portion, or type a single gram."
            : "Your log updates itself the moment the order is delivered."}
        </p>

        {closed && (
          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/12 pt-4 text-left">
            <div>
              <p className="text-[11px] tracking-wide text-white/50 uppercase">Was</p>
              <p className="text-[15px] font-bold">{PROTEIN.logged}g</p>
            </div>
            <div>
              <p className="text-[11px] tracking-wide text-white/50 uppercase">Added</p>
              <p className="text-[15px] font-bold text-brand-300">+{dish.protein}g</p>
            </div>
            <div>
              <p className="text-[11px] tracking-wide text-white/50 uppercase">Target</p>
              <p className="text-[15px] font-bold">{PROTEIN.target}g</p>
            </div>
          </div>
        )}
      </section>

      {closed && (
        <p className="mt-4 flex items-start gap-2 px-1 text-[12.5px] leading-snug text-ink-500 animate-fade">
          <ShieldCheckIcon size={16} className="mt-px shrink-0 text-brand-600" />
          Logged from the kitchen&rsquo;s verified menu data &mdash; not an estimate. Edit it any
          time from Today&rsquo;s Logs.
        </p>
      )}

      <div className={`mt-auto pt-6 ${closed ? "animate-rise" : "invisible"}`}>
        <button
          type="button"
          onClick={onSupplements}
          className="flex w-full items-center justify-between gap-3 rounded-2xl bg-white p-4 text-left shadow-card transition-transform active:scale-[0.99]"
        >
          <span className="min-w-0">
            <span className="block text-[14.5px] leading-tight font-semibold">
              One gap keeps coming back
            </span>
            <span className="block text-[12.5px] leading-tight text-ink-500">
              Vitamin D was low 5 of the last 7 days
            </span>
          </span>
          <ArrowRight size={20} className="shrink-0 text-brand-700" />
        </button>

        <button
          type="button"
          onClick={onHome}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-800 py-4 text-[15.5px] font-semibold text-white shadow-[0_12px_28px_-10px_rgba(10,74,55,0.7)] transition-transform active:scale-[0.99]"
        >
          <CheckIcon size={18} /> Back to your trackers
        </button>
      </div>
    </div>
  );
}

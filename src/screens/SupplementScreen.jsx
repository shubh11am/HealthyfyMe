import { useState } from "react";
import { SUPPLEMENT, VITAMIN_D_WEEK } from "../data";
import {
  ArrowLeft,
  CheckIcon,
  PillIcon,
  RefreshIcon,
  ShieldCheckIcon,
  StarIcon,
} from "../components/Icons";

export default function SupplementScreen({ onBack, onHome }) {
  const [added, setAdded] = useState(false);
  const lowDays = VITAMIN_D_WEEK.filter((d) => d.low).length;

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <header className="flex shrink-0 items-center gap-3 px-4 pt-2 pb-3">
        <button
          type="button"
          onClick={onBack}
          className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink-700 shadow-card"
          aria-label="Back"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-[19px] font-semibold tracking-tight">Recurring gaps</h1>
      </header>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-6">
        {/* the pattern */}
        <section className="animate-rise rounded-card bg-white p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
              <PillIcon size={22} />
            </span>
            <div className="min-w-0">
              <h2 className="text-[17px] leading-tight font-semibold tracking-tight">
                Vitamin D low {lowDays} of the last 7 days
              </h2>
              <p className="mt-1 text-[13px] leading-snug text-ink-500">
                A meal can fix a protein gap tonight. A pattern this steady is a supplement problem,
                not a dinner problem.
              </p>
            </div>
          </div>

          {/* 7-day trend */}
          <div className="mt-5 flex h-[104px] items-end justify-between gap-2">
            {VITAMIN_D_WEEK.map((d, i) => (
              <div key={d.day} className="flex flex-1 flex-col items-center gap-1.5">
                <div className="flex h-[76px] w-full items-end">
                  <div
                    className={`w-full rounded-t-lg rounded-b-sm ${
                      d.low ? "bg-food-400" : "bg-brand-400"
                    }`}
                    style={{
                      height: `${d.pct}%`,
                      transition: "height 800ms cubic-bezier(0.22,1,0.36,1)",
                      transitionDelay: `${i * 60}ms`,
                    }}
                  />
                </div>
                <span
                  className={`text-[10.5px] font-medium ${d.low ? "text-food-400" : "text-ink-400"}`}
                >
                  {d.day}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex items-center gap-4 border-t border-ink-100 pt-3 text-[11.5px] text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-food-400" /> Below 50% of RDA
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand-400" /> On track
            </span>
          </div>
        </section>

        {/* the fix */}
        <h2 className="px-1 pt-6 pb-2.5 text-[17px] font-semibold tracking-tight">
          Suggested for this gap
        </h2>

        <section
          className="animate-rise rounded-card bg-white p-4 shadow-card"
          style={{ animationDelay: "120ms" }}
        >
          <div className="flex gap-3.5">
            <div className="grid h-[66px] w-[66px] shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700">
              <PillIcon size={30} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-[15.5px] leading-tight font-semibold tracking-tight">
                {SUPPLEMENT.name}
              </h3>
              <p className="text-[12.5px] text-ink-500">{SUPPLEMENT.form}</p>
              <div className="mt-1.5 flex items-center gap-2 text-[12.5px]">
                <span className="inline-flex items-center gap-0.5 rounded-full bg-brand-50 px-2 py-0.5 font-semibold text-brand-700">
                  <StarIcon size={11} /> {SUPPLEMENT.rating}
                </span>
                <span className="text-ink-400">{SUPPLEMENT.reviews} ratings</span>
              </div>
            </div>
          </div>

          <div className="mt-3.5 flex items-center gap-2 border-t border-ink-100 pt-3.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-100 px-2.5 py-1 text-[11.5px] font-semibold text-ink-700">
              Sold &amp; delivered by {SUPPLEMENT.seller}
            </span>
            <span className="ml-auto flex items-baseline gap-1.5">
              <span className="text-[13px] text-ink-400 line-through">
                &#8377;{SUPPLEMENT.strikePrice}
              </span>
              <span className="text-[17px] font-bold tracking-tight">&#8377;{SUPPLEMENT.price}</span>
            </span>
          </div>

          <button
            type="button"
            onClick={() => setAdded(true)}
            className={`mt-3.5 flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-[15px] font-semibold transition-all active:scale-[0.99] ${
              added ? "bg-brand-50 text-brand-800" : "bg-brand-800 text-white"
            }`}
          >
            {added ? (
              <>
                <CheckIcon size={18} /> Added &middot; monthly refill on
              </>
            ) : (
              <>
                <RefreshIcon size={18} /> Add with monthly refill
              </>
            )}
          </button>

          {added && (
            <p className="mt-2.5 animate-fade text-center text-[12px] text-ink-500">
              Next pack ships 1 Oct. Cancel any time from Settings.
            </p>
          )}
        </section>

        <p className="mt-4 flex items-start gap-2 px-1 text-[12.5px] leading-snug text-ink-500">
          <ShieldCheckIcon size={16} className="mt-px shrink-0 text-brand-600" />
          Suggestion based on your logged intake only. This is not medical advice &mdash; check with
          your doctor before starting any supplement.
        </p>

        <button
          type="button"
          onClick={onHome}
          className="mt-5 w-full rounded-2xl bg-white py-3.5 text-[15px] font-semibold text-brand-800 shadow-card transition-transform active:scale-[0.99]"
        >
          Back to your trackers
        </button>
      </div>
    </div>
  );
}

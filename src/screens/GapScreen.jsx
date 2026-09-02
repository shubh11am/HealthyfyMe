import { useState } from "react";
import Ring from "../components/Ring";
import DishArt from "../components/DishArt";
import { DISHES, ONDC, PROTEIN, ondcSaving, ondcWhy } from "../data";
import {
  ArrowLeft,
  BoltIcon,
  CheckIcon,
  ChevronDown,
  ClockIcon,
  ShieldCheckIcon,
  StarIcon,
} from "../components/Icons";

export default function GapScreen({ selectedId, onSelect, onBack, onOrder }) {
  const selected = DISHES.find((d) => d.id === selectedId);
  const [whyOpenId, setWhyOpenId] = useState(null);

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
        <h1 className="text-[19px] font-semibold tracking-tight">Close your gap</h1>
      </header>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-5">
        {/* hero: what you are short */}
        <section className="animate-rise rounded-card bg-gradient-to-br from-brand-800 to-brand-950 p-5 text-white shadow-card">
          <div className="flex items-center gap-4">
            <Ring
              value={PROTEIN.pct}
              size={78}
              stroke={6}
              className="stroke-brand-300"
              trackClass="stroke-white/15"
            >
              <div className="leading-none">
                <div className="text-[19px] font-bold">{PROTEIN.pct}%</div>
                <div className="mt-0.5 text-[8.5px] font-semibold tracking-wide text-white/60 uppercase">
                  protein
                </div>
              </div>
            </Ring>
            <div className="min-w-0">
              <p className="text-[13px] font-medium text-brand-300">Today&rsquo;s shortfall</p>
              <p className="text-[27px] leading-tight font-bold tracking-tight">
                {PROTEIN.short}g protein
              </p>
              <p className="text-[13.5px] text-white/65">
                {PROTEIN.logged}g logged of {PROTEIN.target}g target
              </p>
            </div>
          </div>

          <p className="mt-4 border-t border-white/15 pt-3.5 text-[13.5px] leading-snug text-white/75">
            Dinner is your last window today. These three land before your usual 9:30 PM cut-off.
          </p>
        </section>

        <h2 className="px-1 pt-6 pb-1 text-[17px] font-semibold tracking-tight">
          3 meals that fit your gap
        </h2>
        <p className="px-1 pb-3 text-[13px] leading-snug text-ink-500">
          Ranked by how much of the gap they close, then price. All three are sourced over ONDC,
          so every one of them undercuts {ONDC.compareOn}.
        </p>

        <div className="flex flex-col gap-3">
          {DISHES.map((dish, i) => {
            const fill = Math.min(Math.round((dish.protein / PROTEIN.short) * 100), 100);
            const on = dish.id === selectedId;
            return (
              <div
                key={dish.id}
                role="button"
                tabIndex={0}
                aria-pressed={on}
                onClick={() => onSelect(dish.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect(dish.id);
                  }
                }}
                style={{ animationDelay: `${120 + i * 90}ms` }}
                className={`animate-rise cursor-pointer rounded-card border-2 bg-white p-3.5 text-left shadow-card transition-all active:scale-[0.99] ${
                  on ? "border-brand-600" : "border-transparent"
                }`}
              >
                <div className="flex gap-3.5">
                  <DishArt art={dish.art} size={66} />

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start gap-2">
                      <h3 className="min-w-0 flex-1 text-[15.5px] leading-tight font-semibold tracking-tight">
                        {dish.name}
                      </h3>
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 ${
                          on ? "border-brand-600 bg-brand-600 text-white" : "border-ink-200"
                        }`}
                      >
                        {on && <CheckIcon size={12} />}
                      </span>
                    </div>

                    <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[12.5px] text-ink-500">
                      <span className="truncate">{dish.kitchen}</span>
                      <span className="inline-flex items-center gap-0.5 text-brand-700">
                        <StarIcon size={11} /> {dish.rating}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <ClockIcon size={12} /> {dish.eta}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      <span className="rounded-full bg-brand-100 px-2.5 py-1 text-[12px] font-bold text-brand-800">
                        +{dish.protein}g protein
                      </span>
                      <span className="rounded-full bg-ink-100 px-2.5 py-1 text-[12px] font-medium text-ink-500">
                        {dish.calories} cal
                      </span>
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          dish.veg ? "bg-brand-500" : "bg-alert-500"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* how much of the gap it closes */}
                <div className="mt-3">
                  <div className="flex items-baseline justify-between text-[12.5px]">
                    <span className="font-semibold text-ink-700">
                      {fill >= 100 ? "Closes your full gap" : `Fills ${fill}% of your gap`}
                    </span>
                    <span className="text-ink-400">
                      {Math.min(dish.protein, PROTEIN.short)}g of {PROTEIN.short}g
                    </span>
                  </div>
                  <div className="mt-1.5 h-[6px] w-full overflow-hidden rounded-full bg-ink-100">
                    <div
                      className={`h-full rounded-full ${fill >= 100 ? "bg-brand-600" : "bg-brand-400"}`}
                      style={{
                        width: `${fill}%`,
                        transition: "width 900ms cubic-bezier(0.22,1,0.36,1)",
                      }}
                    />
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2 border-t border-ink-100 pt-3">
                  <button
                    type="button"
                    aria-expanded={whyOpenId === dish.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setWhyOpenId((v) => (v === dish.id ? null : dish.id));
                    }}
                    className="inline-flex items-center gap-1 rounded-full bg-brand-800 py-1 pr-2 pl-2.5 text-[11.5px] font-semibold text-white"
                  >
                    <BoltIcon size={13} /> via ONDC &mdash; &#8377;{ondcSaving(dish)} cheaper
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        whyOpenId === dish.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <span className="ml-auto flex items-baseline gap-1.5">
                    <span className="text-[13px] text-ink-400 line-through">
                      &#8377;{dish.comparePrice}
                    </span>
                    <span className="text-[17px] font-bold tracking-tight">
                      &#8377;{dish.price}
                    </span>
                  </span>
                </div>

                {/* why the open network is cheaper */}
                {whyOpenId === dish.id && (
                  <div className="mt-2.5 animate-fade rounded-2xl bg-brand-50 p-3.5">
                    <p className="text-[13px] font-semibold text-brand-800">
                      Why it&rsquo;s &#8377;{ondcSaving(dish)} less than {ONDC.compareOn}
                    </p>
                    <p className="mt-1 text-[12.5px] leading-snug text-brand-800/75">
                      {ondcWhy(dish)}
                    </p>
                    <p className="mt-2 text-[11px] text-brand-800/50">
                      Illustrative pricing for this concept.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-4 flex items-start gap-2 px-1 text-[12.5px] leading-snug text-ink-500">
          <ShieldCheckIcon size={16} className="mt-px shrink-0 text-brand-600" />
          Macros come from each kitchen&rsquo;s published menu, so the log is exact &mdash; no
          guessing portions.
        </p>
      </div>

      {/* order bar, pinned above the tab bar */}
      <div className="shrink-0 bg-gradient-to-t from-[#eef1ef] via-[#eef1ef]/95 to-transparent px-4 pt-6 pb-3">
        <button
          type="button"
          disabled={!selected}
          onClick={onOrder}
          className={`flex w-full items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left transition-all active:scale-[0.99] ${
            selected
              ? "bg-brand-800 text-white shadow-[0_12px_28px_-10px_rgba(10,74,55,0.7)]"
              : "bg-ink-200 text-ink-400"
          }`}
        >
          <span className="min-w-0">
            <span className="block text-[15.5px] leading-tight font-semibold">
              {selected ? "Order & close the gap" : "Pick a meal to continue"}
            </span>
            <span
              className={`block truncate text-[12.5px] leading-tight ${
                selected ? "text-brand-300" : "text-ink-400"
              }`}
            >
              {selected
                ? `${selected.name} · +${selected.protein}g protein`
                : "Any of the three works"}
            </span>
          </span>
          {selected && <span className="text-[17px] font-bold">&#8377;{selected.price}</span>}
        </button>
      </div>
    </div>
  );
}

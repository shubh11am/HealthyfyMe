import Ring from "../components/Ring";
import { MACROS, PROTEIN, TRACKERS } from "../data";
import {
  ArrowRightCircle,
  CameraPlusIcon,
  CheckIcon,
  ChevronDown,
  ChevronUp,
  CrownIcon,
  CutleryIcon,
  FlameIcon,
  MoonIcon,
  PersonIcon,
  PlusIcon,
  PlusSquare,
  RefreshIcon,
  ScaleIcon,
  StepsIcon,
  WaterIcon,
} from "../components/Icons";

const TRACKER_ICONS = {
  weight: ScaleIcon,
  workout: FlameIcon,
  steps: StepsIcon,
  sleep: MoonIcon,
  water: WaterIcon,
};

export default function HomeScreen({ proteinPct, goalMet, onOpenGap, onRestart }) {
  const macros = MACROS.map((m) =>
    m.key === "protein" ? { ...m, pct: proteinPct } : m,
  );
  const remaining = Math.max(PROTEIN.target - Math.round((proteinPct / 100) * PROTEIN.target), 0);

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-4">
      {/* header */}
      <header className="flex items-center justify-between gap-2 pt-2 pb-5">
        <button
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink-200/70 text-ink-700"
          aria-label="Profile"
        >
          <PersonIcon size={22} />
        </button>
        <div className="flex items-center gap-1.5 rounded-2xl border border-brand-600/50 bg-white/70 px-3 py-2.5 whitespace-nowrap text-brand-700">
          <CrownIcon size={18} />
          <span className="text-[13px] font-semibold">Trial ends in 4 days</span>
        </div>
        <button
          type="button"
          className="flex shrink-0 items-center gap-0.5 rounded-2xl bg-white px-2.5 py-2.5 text-[13.5px] font-semibold whitespace-nowrap shadow-card"
        >
          Today <ChevronDown size={16} />
        </button>
      </header>

      <h1 className="pb-3 text-[21px] font-semibold tracking-tight">Your Trackers</h1>

      {/* ---- Track Food: the macro ring lives here ---- */}
      <section className="rounded-card bg-white p-4 shadow-card">
        <div className="flex items-center gap-3.5">
          <Ring
            value={proteinPct}
            size={62}
            stroke={5}
            className={goalMet ? "stroke-brand-500" : "stroke-food-400"}
            trackClass="stroke-ink-100"
          >
            <div className="leading-none">
              <div className="text-[15px] font-bold tracking-tight">{proteinPct}%</div>
              <div className="mt-0.5 text-[8.5px] font-semibold tracking-wide text-ink-400 uppercase">
                protein
              </div>
            </div>
          </Ring>

          <div className="min-w-0 flex-1">
            <h2 className="text-[18px] font-semibold tracking-tight">Track Food</h2>
            <p className="text-[14px] text-ink-500">
              {goalMet ? "1,932" : "1,420"} of 2,050 Cal
            </p>
          </div>

          <button type="button" className="text-ink-700" aria-label="Snap a meal">
            <CameraPlusIcon size={26} />
          </button>
          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-lg border border-alert-500 text-alert-500"
            aria-label="Add food"
          >
            <PlusIcon size={18} />
          </button>
        </div>

        {/* the feature's in-app entry point */}
        <button
          type="button"
          onClick={goalMet ? undefined : onOpenGap}
          className={`mt-3.5 flex w-full items-center gap-3 rounded-2xl px-3.5 py-3 text-left transition-colors ${
            goalMet ? "bg-brand-50" : "bg-brand-100/80 active:bg-brand-100"
          }`}
        >
          <span
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${
              goalMet ? "bg-brand-600 text-white" : "bg-white text-brand-700"
            }`}
          >
            {goalMet ? <CheckIcon size={19} /> : <CutleryIcon size={19} />}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[14.5px] leading-tight font-semibold text-brand-800">
              {goalMet ? "Protein goal met — logged automatically" : `You're ${remaining}g protein short today`}
            </span>
            <span className="block text-[12.5px] leading-tight text-brand-700/70">
              {goalMet ? "Grilled Chicken Quinoa Bowl · +41g" : "3 meals can close the gap tonight"}
            </span>
          </span>
          {!goalMet && <ArrowRightCircle size={24} className="text-brand-700" />}
        </button>

        {/* macro bars */}
        <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3.5">
          {macros.map((m) => (
            <div key={m.key}>
              <div className="flex items-baseline gap-1.5 text-[14px]">
                <span className="text-ink-500">{m.label}:</span>
                <span className="font-semibold">{m.pct}%</span>
              </div>
              <div className="mt-1.5 h-[5px] w-full overflow-hidden rounded-full bg-ink-100">
                <div
                  className={`h-full rounded-full ${m.tone}`}
                  style={{
                    width: `${m.pct}%`,
                    transition: "width 1100ms cubic-bezier(0.22,1,0.36,1)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- tracker list ---- */}
      <section className="mt-4 rounded-card bg-white px-4 py-2 shadow-card">
        {TRACKERS.map((t) => {
          const Icon = TRACKER_ICONS[t.key];
          return (
            <div key={t.key} className="flex items-center gap-3.5 border-b border-ink-100 py-3.5 last:border-0">
              <Ring value={t.pct} size={48} stroke={2.5} className={t.ring} trackClass="stroke-ink-100">
                <Icon size={20} className="text-ink-700" />
              </Ring>
              <div className="min-w-0 flex-1">
                <h3 className="text-[16.5px] font-semibold tracking-tight">{t.label}</h3>
                <p className="text-[13.5px] text-ink-500">{t.sub}</p>
              </div>
              <button type="button" className="text-ink-700" aria-label={`${t.action} ${t.label}`}>
                {t.action === "add" ? <PlusSquare size={24} /> : <RefreshIcon size={22} />}
              </button>
            </div>
          );
        })}

        <div className="flex items-center gap-3.5 py-3.5">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-50 text-brand-700">
            <PlusIcon size={22} />
          </span>
          <span className="text-[16.5px] font-semibold text-brand-700">Track More</span>
        </div>
        <div className="grid place-items-center pb-2 text-ink-400">
          <ChevronUp size={20} />
        </div>
      </section>

      <h2 className="px-1 pt-5 pb-2 text-[19px] font-semibold tracking-tight text-ink-900/85">
        Today&rsquo;s Logs
      </h2>
      <div className="rounded-card bg-white/70 px-4 py-4 shadow-card">
        <p className="text-[13.5px] leading-snug text-ink-500">
          {goalMet
            ? "Breakfast, lunch, a 4pm snack and dinner logged · 131g protein."
            : "Breakfast, lunch and a 4pm snack logged · 90g protein so far."}
        </p>
        <button
          type="button"
          onClick={onRestart}
          className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-700"
        >
          <RefreshIcon size={14} /> Restart demo
        </button>
      </div>
    </div>
  );
}

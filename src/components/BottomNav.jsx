import { HomeIcon, CutleryIcon, PlusIcon, CoachIcon, TrophyIcon } from "./Icons";

const TABS = [
  { key: "home", label: "Home", Icon: HomeIcon },
  { key: "diet", label: "Diet", Icon: CutleryIcon },
  { key: "coach", label: "Get a Coach", Icon: CoachIcon },
  { key: "results", label: "Results", Icon: TrophyIcon },
];

export default function BottomNav({ active = "home", onFab }) {
  const [left, right] = [TABS.slice(0, 2), TABS.slice(2)];

  const Tab = ({ tab }) => {
    const on = tab.key === active;
    return (
      <div className="flex w-[70px] flex-col items-center gap-1">
        <div
          className={`grid h-9 w-14 place-items-center rounded-full transition-colors ${
            on ? "bg-brand-100 text-brand-700" : "text-ink-400"
          }`}
        >
          <tab.Icon size={22} />
        </div>
        <span
          className={`text-[11px] leading-none ${
            on ? "font-semibold text-brand-700" : "font-medium text-ink-500"
          }`}
        >
          {tab.label}
        </span>
      </div>
    );
  };

  return (
    <nav className="relative z-20 flex shrink-0 items-start justify-between rounded-t-[26px] bg-white px-4 pt-2.5 pb-4 shadow-[0_-8px_30px_-18px_rgba(16,40,32,0.35)]">
      <div className="flex gap-1">{left.map((t) => <Tab key={t.key} tab={t} />)}</div>

      <button
        type="button"
        onClick={onFab}
        aria-label="Add a log"
        className="-mt-1 grid h-[54px] w-[54px] place-items-center rounded-full bg-brand-100/70 text-white transition-transform active:scale-95"
      >
        <span className="grid h-[46px] w-[46px] place-items-center rounded-full bg-brand-800 shadow-[0_6px_14px_-4px_rgba(10,74,55,0.6)]">
          <PlusIcon size={24} />
        </span>
      </button>

      <div className="flex gap-1">{right.map((t) => <Tab key={t.key} tab={t} />)}</div>
    </nav>
  );
}

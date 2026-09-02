export default function StatusBar({ time = "19:05" }) {
  return (
    <div className="flex shrink-0 items-center justify-between px-7 pt-3 pb-1 text-ink-900">
      <span className="text-[15px] font-semibold tracking-tight">{time}</span>
      <div className="flex items-center gap-1.5">
        {/* signal */}
        <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
          <rect x="0" y="7.5" width="3" height="4.5" rx="1" fill="currentColor" />
          <rect x="4.6" y="5" width="3" height="7" rx="1" fill="currentColor" />
          <rect x="9.2" y="2.5" width="3" height="9.5" rx="1" fill="currentColor" opacity="0.3" />
          <rect x="13.8" y="0" width="3" height="12" rx="1" fill="currentColor" opacity="0.3" />
        </svg>
        {/* wifi */}
        <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true" fill="none" stroke="currentColor">
          <path d="M1 4.2a10.5 10.5 0 0 1 14 0" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M3.6 6.9a6.8 6.8 0 0 1 8.8 0" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="8" cy="10" r="1.3" fill="currentColor" stroke="none" />
        </svg>
        {/* battery */}
        <div className="flex items-center gap-0.5">
          <div className="relative h-[13px] w-[25px] rounded-[4px] border border-ink-900/35">
            <div className="absolute inset-[1.5px] w-[11px] rounded-[2px] bg-ink-900" />
            <span className="absolute inset-0 grid place-items-center text-[8.5px] font-semibold">55</span>
          </div>
          <div className="h-[5px] w-[1.5px] rounded-r bg-ink-900/35" />
        </div>
      </div>
    </div>
  );
}

/**
 * Device chrome on desktop; edge-to-edge on a phone. The app itself always
 * renders inside a fixed 390x844-ish column so the layout stays honest.
 */
export default function PhoneFrame({ children }) {
  return (
    <div className="relative mx-auto w-full md:w-[390px]">
      <div className="pointer-events-none absolute -inset-6 hidden rounded-[70px] bg-brand-400/10 blur-2xl md:block" />
      <div className="relative h-[100dvh] w-full overflow-hidden bg-white md:h-[812px] md:max-h-[calc(100dvh-3rem)] md:rounded-[52px] md:border-[9px] md:border-[#0f1c17] md:shadow-frame">
        <div className="app-wash relative flex h-full flex-col overflow-hidden text-ink-900">
          {/* notch */}
          <div className="pointer-events-none absolute top-2 left-1/2 z-50 hidden h-6 w-28 -translate-x-1/2 rounded-full bg-[#0f1c17] md:block" />
          {children}
        </div>
      </div>
    </div>
  );
}

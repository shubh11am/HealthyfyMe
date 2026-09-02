import { PROTEIN } from "../data";
import { CutleryIcon } from "./Icons";

/** Evening push notification, rendered over the tracking screen. */
export default function NudgeBanner({ onOpen, onDismiss }) {
  return (
    <div className="absolute inset-0 z-40">
      <button
        type="button"
        aria-label="Dismiss notification"
        onClick={onDismiss}
        className="absolute inset-0 animate-fade cursor-default bg-ink-900/35 backdrop-blur-[2px]"
      />

      <div className="absolute inset-x-3 top-11 animate-drop-in">
        <button
          type="button"
          onClick={onOpen}
          className="w-full rounded-[26px] bg-white/85 p-3.5 text-left shadow-[0_20px_45px_-18px_rgba(10,40,30,0.55)] backdrop-blur-xl transition-transform active:scale-[0.985]"
        >
          <div className="flex items-center gap-2.5">
            <span className="grid h-[26px] w-[26px] place-items-center rounded-[8px] bg-brand-700 text-white">
              <CutleryIcon size={16} />
            </span>
            <span className="text-[12.5px] font-semibold tracking-wide text-ink-500 uppercase">
              Healthify
            </span>
            <span className="ml-auto text-[12.5px] text-ink-400">now</span>
          </div>

          <p className="mt-2.5 text-[15.5px] leading-snug font-semibold text-ink-900">
            You're {PROTEIN.short}g protein short today
          </p>
          <p className="mt-0.5 text-[14.5px] leading-snug text-ink-700">
            Here are 3 meals that close your gap — one arrives in 32 minutes.
          </p>

          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-3 py-1.5 text-[12.5px] font-semibold text-brand-800">
            Tap to see meals
          </span>
        </button>
      </div>

      <p className="absolute inset-x-0 bottom-28 text-center text-[12.5px] font-medium text-white/80">
        7:05 PM · sent when the day's gap is still closeable
      </p>
    </div>
  );
}

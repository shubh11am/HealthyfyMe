import { useEffect, useState } from "react";
import PhoneFrame from "./components/PhoneFrame";
import StatusBar from "./components/StatusBar";
import BottomNav from "./components/BottomNav";
import NudgeBanner from "./components/NudgeBanner";
import HomeScreen from "./screens/HomeScreen";
import GapScreen from "./screens/GapScreen";
import OrderScreen from "./screens/OrderScreen";
import SupplementScreen from "./screens/SupplementScreen";
import { DEMO_STEPS, DISHES, PROTEIN } from "./data";
import { RefreshIcon, SparkleIcon } from "./components/Icons";

const START = { screen: "home", nudge: false, dishId: "chicken", goalMet: false };

export default function App() {
  const [screen, setScreen] = useState(START.screen);
  const [nudge, setNudge] = useState(START.nudge);
  const [dishId, setDishId] = useState(START.dishId);
  const [goalMet, setGoalMet] = useState(START.goalMet);
  const [nudged, setNudged] = useState(false);

  const dish = DISHES.find((d) => d.id === dishId) ?? DISHES[1];
  const proteinPct = goalMet ? 100 : PROTEIN.pct;
  const activeStep = nudge ? "nudge" : screen;

  // The evening nudge arrives on its own the first time you land on the app.
  useEffect(() => {
    if (nudged || screen !== "home") return undefined;
    const t = setTimeout(() => {
      setNudge(true);
      setNudged(true);
    }, 2200);
    return () => clearTimeout(t);
  }, [nudged, screen]);

  const restart = () => {
    setScreen(START.screen);
    setNudge(START.nudge);
    setDishId(START.dishId);
    setGoalMet(START.goalMet);
    setNudged(false);
  };

  const openGap = () => {
    setNudge(false);
    setScreen("gap");
  };

  const placeOrder = () => {
    setScreen("order");
    setGoalMet(true);
  };

  const jumpTo = (key) => {
    if (key === "nudge") {
      setScreen("home");
      setNudge(true);
      setNudged(true);
      return;
    }
    setNudge(false);
    if (key === "order" || key === "supplement") setGoalMet(true);
    if (key === "home") setNudged(true);
    setScreen(key);
  };

  return (
    <div className="min-h-dvh bg-[#0d1a16] bg-[radial-gradient(90%_60%_at_15%_0%,#17342a_0%,rgba(23,52,42,0)_60%),radial-gradient(70%_50%_at_100%_100%,#123a2d_0%,rgba(18,58,45,0)_60%)] text-white">
      <div className="mx-auto grid min-h-dvh max-w-6xl grid-cols-1 items-center gap-12 px-0 py-0 lg:grid-cols-[1fr_390px] lg:gap-16 lg:px-8 lg:py-12">
        {/* ---------- desktop story rail ---------- */}
        <aside className="order-2 hidden lg:order-1 lg:block">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[12px] font-semibold tracking-wide text-brand-300 uppercase">
            Concept prototype
          </span>
          <h1 className="mt-5 text-[44px] leading-[1.05] font-bold tracking-tight">
            Close The Gap
          </h1>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-white/70">
            The only app that tells you what you&rsquo;re short &mdash; then lets you order it.
            Tracking stops at the number; this closes the loop between the deficit and the meal
            that fixes it.
          </p>

          <ol className="mt-9 flex flex-col gap-1">
            {DEMO_STEPS.map((step, i) => {
              const on = step.key === activeStep;
              return (
                <li key={step.key}>
                  <button
                    type="button"
                    onClick={() => jumpTo(step.key)}
                    className={`flex w-full items-center gap-3.5 rounded-2xl px-3.5 py-3 text-left transition-colors ${
                      on ? "bg-white/10" : "hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[12.5px] font-bold ${
                        on ? "bg-brand-400 text-brand-950" : "bg-white/10 text-white/50"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`text-[15px] font-medium ${on ? "text-white" : "text-white/55"}`}
                    >
                      {step.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <button
            type="button"
            onClick={restart}
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-[14px] font-semibold text-white/80 transition-colors hover:bg-white/5"
          >
            <RefreshIcon size={17} /> Restart the demo
          </button>

          <p className="mt-8 max-w-md text-[12.5px] leading-relaxed text-white/35">
            Student concept work for a proposed feature. Not affiliated with, endorsed by, or
            representative of HealthifyMe, ONDC or Tata 1mg. All data, pricing and partners shown
            are illustrative.
          </p>
        </aside>

        {/* ---------- the phone ---------- */}
        <div className="order-1 lg:order-2">
          <PhoneFrame>
            <StatusBar time={screen === "home" ? "19:05" : "19:07"} />

            {screen === "home" && (
              <HomeScreen
                proteinPct={proteinPct}
                goalMet={goalMet}
                onOpenGap={openGap}
                onRestart={restart}
              />
            )}

            {screen === "gap" && (
              <GapScreen
                selectedId={dishId}
                onSelect={setDishId}
                onBack={() => setScreen("home")}
                onOrder={placeOrder}
              />
            )}

            {screen === "order" && (
              <OrderScreen
                dish={dish}
                onHome={() => setScreen("home")}
                onSupplements={() => setScreen("supplement")}
              />
            )}

            {screen === "supplement" && (
              <SupplementScreen
                onBack={() => setScreen("order")}
                onHome={() => setScreen("home")}
              />
            )}

            {/* AI action pill, home only */}
            {screen === "home" && !nudge && (
              <button
                type="button"
                onClick={() => {
                  if (goalMet) {
                    restart();
                    return;
                  }
                  setNudge(true);
                  setNudged(true);
                }}
                aria-label={goalMet ? "Restart the demo" : "Show tonight's nudge"}
                className="absolute right-4 bottom-[108px] z-30 grid h-[58px] w-[58px] place-items-center rounded-[20px] bg-gradient-to-br from-spark-400 to-spark-500 text-white shadow-float transition-transform active:scale-95"
              >
                <SparkleIcon size={26} />
              </button>
            )}

            {nudge && (
              <NudgeBanner onOpen={openGap} onDismiss={() => setNudge(false)} />
            )}

            {screen !== "order" && (
              <BottomNav
                active={screen === "gap" ? "diet" : "home"}
                onFab={() => setScreen("home")}
              />
            )}
          </PhoneFrame>
        </div>
      </div>
    </div>
  );
}

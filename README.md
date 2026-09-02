# Close The Gap

**A concept prototype for a proposed nutrition-deficit feature.**

> The only app that tells you what you're short — then lets you order it.

Tracking apps are good at telling you that you missed your protein target. None of them
do anything about it. This prototype closes that loop: it spots the deficit while the day
is still salvageable, offers three meals that actually fit the gap, takes the order, and
logs the result without the user typing a gram.

---

## The flow

| # | Screen | What it does |
|---|--------|--------------|
| 1 | **Tracking** | Home screen with the protein ring sitting at 69% — the entry point. |
| 2 | **Deficit nudge** | 7:05 PM push: *"You're 40g protein short today."* Sent while the gap is still closeable. |
| 3 | **Gap-fit meals** | Three dishes, each showing the grams of protein it adds and how much of the gap that closes. One is routed **via ONDC** at ₹50 less. |
| 4 | **Order & close** | One tap to *Order placed*, then the ring animates 69% → 100%: **"Goal met — logged automatically."** |
| 5 | **Recurring gaps** | Vitamin D low 5 of 7 days → a **Tata 1mg** supplement suggestion, because a pattern isn't a dinner problem. |

The numbers are internally consistent: a 130 g target against 90 g logged leaves a 40 g gap,
and the ONDC-routed Grilled Chicken Quinoa Bowl adds 41 g — enough to close it.

## Why it holds together commercially

- **The nudge has a deadline.** It fires at 7:05 PM, not at midnight when nothing can be done.
- **Suggestions are ranked by gap closed, then price** — not by restaurant margin.
- **ONDC is the cost story.** Open-network routing is what makes one option visibly cheaper.
- **Auto-logging is the retention story.** The biggest reason people abandon trackers is manual
  entry; ordering through the app removes it for at least one meal a day.
- **Tata 1mg is the second basket.** Meals fix tonight's gap; supplements fix the repeating one.

## Stack

React 19 + Vite + Tailwind CSS v4. All state is in-memory — there is no backend, no API and
no persistence, by design. It is a clickable story, not a product.

## Run it

```bash
npm install
npm run dev
```

Then open the printed localhost URL. On a desktop viewport you get a device frame plus a
step rail you can click to jump between screens; on a phone it runs edge-to-edge.
"Restart demo" (or the sparkle button once the goal is met) resets the state.

## Build

```bash
npm run build
```

Output lands in `dist/`. It is a static SPA — any static host will serve it. On Vercel the
defaults are correct (build `npm run build`, output `dist`); `vercel.json` pins them.

## Project layout

```
src/
  App.jsx              screen state machine + desktop story rail
  data.js              every number and string in the demo
  hooks.js             count-up + timeline helpers
  components/          PhoneFrame, StatusBar, BottomNav, Ring, NudgeBanner, DishArt, Icons
  screens/             HomeScreen, GapScreen, OrderScreen, SupplementScreen
```

---

Student concept work for a proposed feature. Not affiliated with, endorsed by, or
representative of HealthifyMe, ONDC or Tata 1mg. All partners, pricing, menu items and
nutrition figures shown are illustrative and invented for the prototype. Nothing here is
medical or nutritional advice.

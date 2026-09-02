// Single source of truth for the demo. Everything is in-memory — no backend.

export const USER = {
  name: "Shubham",
  greetingTime: "19:05",
};

// The gap the whole feature is built around.
export const PROTEIN = {
  target: 130,
  logged: 90,
  get short() {
    return this.target - this.logged;
  },
  get pct() {
    return Math.round((this.logged / this.target) * 100);
  },
};

export const MACROS = [
  { key: "protein", label: "Protein", pct: 69, tone: "bg-brand-500" },
  { key: "fats", label: "Fats", pct: 74, tone: "bg-food-400" },
  { key: "carbs", label: "Carbs", pct: 88, tone: "bg-step-400" },
  { key: "fibre", label: "Fibre", pct: 52, tone: "bg-move-400" },
];

export const TRACKERS = [
  { key: "weight", label: "Weight", sub: "72.4 kg · Goal 68 kg", ring: "stroke-ink-200", pct: 0, action: "add" },
  { key: "workout", label: "Workout", sub: "192 of 297 cal burnt", ring: "stroke-move-400", pct: 65, action: "add" },
  { key: "steps", label: "Steps", sub: "4,535 of 10,000 steps", ring: "stroke-step-400", pct: 45, action: "sync" },
  { key: "sleep", label: "Sleep", sub: "6h 40m of 8h", ring: "stroke-rest-400", pct: 83, action: "sync" },
  { key: "water", label: "Water", sub: "5 of 9 glasses", ring: "stroke-hydr-400", pct: 55, action: "add" },
];

// Three gap-fit dishes. Exactly one is routed through ONDC and priced lower.
export const DISHES = [
  {
    id: "paneer",
    name: "Paneer Tikka Protein Bowl",
    kitchen: "Grill & Green",
    rating: 4.4,
    eta: "29 min",
    protein: 32,
    calories: 486,
    carbs: 38,
    fat: 16,
    price: 259,
    veg: true,
    channel: "partner",
    art: "paneer",
  },
  {
    id: "chicken",
    name: "Grilled Chicken Quinoa Bowl",
    kitchen: "Protein Kitchen",
    rating: 4.5,
    eta: "32 min",
    protein: 41,
    calories: 512,
    carbs: 44,
    fat: 14,
    price: 239,
    strikePrice: 289,
    veg: false,
    channel: "ondc",
    channelNote: "via ONDC — ₹50 cheaper",
    art: "chicken",
  },
  {
    id: "parfait",
    name: "Greek Yoghurt & Berry Parfait",
    kitchen: "Bowl Story",
    rating: 4.3,
    eta: "22 min",
    protein: 28,
    calories: 324,
    carbs: 31,
    fat: 9,
    price: 189,
    veg: true,
    channel: "partner",
    art: "parfait",
  },
];

// Seven-day micronutrient trend that unlocks the Tata 1mg suggestion.
export const VITAMIN_D_WEEK = [
  { day: "Mon", pct: 38, low: true },
  { day: "Tue", pct: 44, low: true },
  { day: "Wed", pct: 82, low: false },
  { day: "Thu", pct: 35, low: true },
  { day: "Fri", pct: 41, low: true },
  { day: "Sat", pct: 76, low: false },
  { day: "Sun", pct: 33, low: true },
];

export const SUPPLEMENT = {
  name: "Vitamin D3 1000 IU",
  form: "60 tablets · 2 month supply",
  seller: "Tata 1mg",
  price: 249,
  strikePrice: 320,
  rating: 4.6,
  reviews: "12.4k",
};

export const DEMO_STEPS = [
  { key: "home", label: "Tracking" },
  { key: "nudge", label: "Deficit nudge" },
  { key: "gap", label: "Gap-fit meals" },
  { key: "order", label: "Order & close" },
  { key: "supplement", label: "Micronutrients" },
];

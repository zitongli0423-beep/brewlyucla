import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-washi text-ink font-sans selection:bg-moss/10">
      {/* Navigation */}
      <nav className="w-full border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif text-2xl tracking-tight">Kajima</span>
          <div className="flex items-center gap-4 sm:gap-8">
            <a href="#method" className="hidden sm:inline text-sm font-medium hover:text-moss transition-colors">The Method</a>
            <a href="#pilot" className="hidden sm:inline text-sm font-medium hover:text-moss transition-colors">Pilot Program</a>
            <a
              href="#pilot"
              className="text-sm font-medium bg-ink text-washi px-4 py-2 rounded-full ring-1 ring-ink hover:opacity-90 transition-opacity"
            >
              Join Pilot
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8 max-w-[30ch] text-balance">
            Operate your shop with quiet confidence.
          </h1>
          <p className="text-base sm:text-lg mb-12 max-w-[56ch] text-pretty text-ink/70">
            Kajima turns your POS data into a precise weekly battle plan. No complex dashboards —
            just one simple report every Monday morning to guide your staffing, ordering, and margins.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#pilot"
              className="bg-ink text-washi py-2 pr-4 pl-3 flex items-center gap-2 rounded-full font-medium text-sm ring-1 ring-ink hover:opacity-90 transition-opacity"
            >
              <span className="size-4 shrink-0 bg-washi/20 rounded-full" />
              Apply for the Pilot
            </a>
            <a
              href="#memo"
              className="text-ink py-2 px-4 flex items-center gap-2 rounded-full font-medium text-sm ring-1 ring-ink/10 bg-washi hover:bg-ink/5 transition-colors"
            >
              View Sample Plan
            </a>
          </div>
        </div>
      </section>

      {/* The Weekly Output */}
      <section id="memo" className="py-20 bg-ink/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-moss/60 mb-4 block">
                The Output
              </span>
              <h2 className="text-3xl font-serif mb-6 leading-tight max-w-[35ch] text-balance">
                The Monday Morning Memo
              </h2>
              <p className="text-base text-ink/70 max-w-[48ch] text-pretty mb-8">
                While legacy systems like Toast and Square provide analytics, Kajima provides answers.
                Every week, we deliver a distilled planning document tuned to your shop's rhythm.
              </p>
              <ul className="space-y-4">
                {[
                  "Demand forecasting based on weather, local events, and historical trends.",
                  "Optimized labor schedules to reduce burnout and unnecessary overtime.",
                  "Inventory watch-outs to prevent stockouts on high-margin items.",
                  "Margin and pricing flags drawn from your menu mix.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="size-4 mt-1 shrink-0 bg-moss/20 rounded-sm" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <article className="bg-washi p-8 md:p-12 rounded-3xl ring-1 ring-black/5 shadow-xl">
                <header className="border-b border-ink/10 pb-6 mb-8 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest opacity-40">
                      Kajima Weekly Report
                    </p>
                    <p className="font-serif text-xl">Spring Street Café</p>
                  </div>
                  <p className="text-sm font-medium">Oct 14 — Oct 20</p>
                </header>
                <div className="space-y-10">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <p className="text-xs text-ink/50">Projected Demand</p>
                      <p className="text-2xl font-medium">
                        1,480 <span className="text-xs font-normal text-ink/40">units</span>
                      </p>
                      <p className="text-[10px] text-moss">+12% vs last week (Local Festival)</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-ink/50">Target Labor</p>
                      <p className="text-2xl font-medium">
                        124 <span className="text-xs font-normal text-ink/40">hours</span>
                      </p>
                      <p className="text-[10px] text-ink/40">Optimal coverage: 3 staff @ peak</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-widest opacity-40">
                      Inventory Action
                    </p>
                    <div className="p-4 rounded-lg bg-moss/5 ring-1 ring-black/5 space-y-2">
                      <p className="text-sm font-medium">Order Oat Milk +20% by Tuesday</p>
                      <p className="text-xs text-ink/60">
                        High likelihood of stockout before Friday delivery based on weekend trend.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-widest opacity-40">
                      Margin Watch
                    </p>
                    <p className="text-sm text-pretty">
                      Pastry waste hit 14% on Wednesday. Suggest reducing almond croissant par by 4 units
                      for mid-week shifts.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Intelligence */}
      <section id="inventory" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-moss/60 mb-3 block">
                Inventory Intelligence
              </span>
              <h2 className="text-3xl md:text-4xl font-serif leading-tight max-w-[28ch] text-balance">
                Know exactly what you have, what's moving, and what's about to spoil.
              </h2>
            </div>
            <p className="text-sm text-ink/60 max-w-sm">
              Updated daily from your POS and supplier invoices. No manual counts, no spreadsheets.
            </p>
          </div>

          {/* Stock + Reorder Table */}
          <div className="bg-washi ring-1 ring-black/5 rounded-3xl overflow-hidden shadow-sm mb-8">
            <div className="px-6 md:px-8 py-5 border-b border-ink/5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest opacity-40">Live Stock</p>
                <p className="font-serif text-lg">Reorder Watchlist · Week of Oct 14</p>
              </div>
              <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-moss/10 text-moss uppercase tracking-widest">
                4 items need action
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-[10px] uppercase tracking-widest text-ink/40 bg-ink/[0.02]">
                    <th className="px-6 md:px-8 py-3 font-semibold">Item</th>
                    <th className="py-3 font-semibold">On Hand</th>
                    <th className="py-3 font-semibold">Daily Use</th>
                    <th className="py-3 font-semibold">Days Left</th>
                    <th className="px-6 md:px-8 py-3 font-semibold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/5">
                  {[
                    { item: "Oat Milk (32oz)", unit: "Oatly Barista", hand: "18 ctn", use: "9.4 / day", days: "1.9", tone: "danger", action: "Order today · 24 ctn" },
                    { item: "Espresso Beans", unit: "House Blend", hand: "12.4 lb", use: "4.2 / day", days: "3.0", tone: "warn", action: "Order by Tue · 30 lb" },
                    { item: "12oz Hot Cups", unit: "Eco kraft", hand: "640 ea", use: "210 / day", days: "3.0", tone: "warn", action: "Order by Tue · 1,500" },
                    { item: "Vanilla Syrup", unit: "Monin 750ml", hand: "9 bt", use: "1.1 / day", days: "8.2", tone: "ok", action: "On track" },
                    { item: "Whole Milk", unit: "Local dairy", hand: "26 gal", use: "11.0 / day", days: "2.4", tone: "warn", action: "Order Wed · 40 gal" },
                    { item: "Almond Croissant", unit: "Frozen, par-baked", hand: "84 ea", use: "12 / day", days: "7.0", tone: "ok", action: "Reduce par −4 / day" },
                  ].map((r) => (
                    <tr key={r.item} className="hover:bg-ink/[0.02] transition-colors">
                      <td className="px-6 md:px-8 py-4">
                        <p className="font-medium">{r.item}</p>
                        <p className="text-[11px] text-ink/40">{r.unit}</p>
                      </td>
                      <td className="py-4 font-medium tabular-nums">{r.hand}</td>
                      <td className="py-4 tabular-nums text-ink/70">{r.use}</td>
                      <td className="py-4">
                        <span
                          className={
                            "inline-flex items-center gap-1.5 tabular-nums font-medium " +
                            (r.tone === "danger"
                              ? "text-red-700"
                              : r.tone === "warn"
                              ? "text-amber-700"
                              : "text-moss")
                          }
                        >
                          <span
                            className={
                              "size-1.5 rounded-full " +
                              (r.tone === "danger"
                                ? "bg-red-600"
                                : r.tone === "warn"
                                ? "bg-amber-500"
                                : "bg-moss")
                            }
                          />
                          {r.days}
                        </span>
                      </td>
                      <td className="px-6 md:px-8 py-4 text-right text-ink/80">{r.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Slow movers + KPIs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-washi ring-1 ring-black/5 rounded-3xl overflow-hidden">
              <div className="px-6 md:px-8 py-5 border-b border-ink/5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest opacity-40">
                    Dead Stock
                  </p>
                  <p className="font-serif text-lg">Promote or markdown before spoilage</p>
                </div>
                <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-red-50 text-red-700 uppercase tracking-widest">
                  $312 at risk
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-[10px] uppercase tracking-widest text-ink/40 bg-ink/[0.02]">
                      <th className="px-6 md:px-8 py-3 font-semibold">Item</th>
                      <th className="py-3 font-semibold">Stock</th>
                      <th className="py-3 font-semibold">Spoils In</th>
                      <th className="px-6 md:px-8 py-3 font-semibold text-right">Suggested</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/5">
                    {[
                      { i: "Matcha Scone", s: "22 ea", d: "2 days", a: "BOGO with any latte" },
                      { i: "Cold Brew Concentrate", s: "6 L", d: "4 days", a: "Feature in iced menu" },
                      { i: "Heavy Cream", s: "3 qt", d: "3 days", a: "Push cortado / breve" },
                      { i: "Berry Compote", s: "1.8 kg", d: "5 days", a: "Weekend yogurt special" },
                    ].map((r) => (
                      <tr key={r.i} className="hover:bg-ink/[0.02] transition-colors">
                        <td className="px-6 md:px-8 py-4 font-medium">{r.i}</td>
                        <td className="py-4 tabular-nums text-ink/70">{r.s}</td>
                        <td className="py-4 tabular-nums text-red-700 font-medium">{r.d}</td>
                        <td className="px-6 md:px-8 py-4 text-right text-ink/80">{r.a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4 content-start">
              {[
                { k: "Food cost (week)", v: "28.4%", d: "−1.6 pts vs target", tone: "ok" },
                { k: "Waste %", v: "3.1%", d: "$184 spoiled", tone: "warn" },
                { k: "Stockouts", v: "0", d: "Last 7 days", tone: "ok" },
                { k: "Open POs", v: "5", d: "$1,940 incoming", tone: "ok" },
                { k: "Inventory on hand", v: "$6,820", d: "12.4 days of supply", tone: "ok" },
                { k: "Top SKU sell-through", v: "94%", d: "Oat latte, 12oz", tone: "ok" },
              ].map((c) => (
                <div
                  key={c.k}
                  className="bg-washi ring-1 ring-black/5 rounded-2xl p-5"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest opacity-40">{c.k}</p>
                  <p className="text-2xl font-serif mt-2 tabular-nums">{c.v}</p>
                  <p
                    className={
                      "text-[11px] mt-1 " +
                      (c.tone === "warn" ? "text-amber-700" : "text-moss")
                    }
                  >
                    {c.d}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Consumption table */}
          <div className="mt-8 bg-washi ring-1 ring-black/5 rounded-3xl overflow-hidden">
            <div className="px-6 md:px-8 py-5 border-b border-ink/5">
              <p className="text-[10px] font-semibold uppercase tracking-widest opacity-40">
                Consumption · Last 4 Weeks
              </p>
              <p className="font-serif text-lg">Trend by core SKU</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-[10px] uppercase tracking-widest text-ink/40 bg-ink/[0.02]">
                    <th className="px-6 md:px-8 py-3 font-semibold">SKU</th>
                    <th className="py-3 font-semibold text-right">W−3</th>
                    <th className="py-3 font-semibold text-right">W−2</th>
                    <th className="py-3 font-semibold text-right">W−1</th>
                    <th className="py-3 font-semibold text-right">This wk</th>
                    <th className="px-6 md:px-8 py-3 font-semibold text-right">Δ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/5 tabular-nums">
                  {[
                    ["Oat milk (ctn)", 58, 61, 64, 66, "+3.1%"],
                    ["Espresso beans (lb)", 28, 27, 29, 30, "+3.4%"],
                    ["12oz hot cups", 1320, 1380, 1440, 1470, "+2.1%"],
                    ["Whole milk (gal)", 72, 70, 68, 77, "+13.2%"],
                    ["Pastries (ea)", 410, 395, 388, 372, "−4.1%"],
                  ].map((r) => (
                    <tr key={r[0] as string} className="hover:bg-ink/[0.02] transition-colors">
                      <td className="px-6 md:px-8 py-3.5 font-medium">{r[0]}</td>
                      <td className="py-3.5 text-right text-ink/60">{r[1]}</td>
                      <td className="py-3.5 text-right text-ink/60">{r[2]}</td>
                      <td className="py-3.5 text-right text-ink/60">{r[3]}</td>
                      <td className="py-3.5 text-right font-medium">{r[4]}</td>
                      <td
                        className={
                          "px-6 md:px-8 py-3.5 text-right font-medium " +
                          (String(r[5]).startsWith("−") ? "text-red-700" : "text-moss")
                        }
                      >
                        {r[5]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Audience & Comparison */}
      <section id="method" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-serif mb-6">Built for the independent operator.</h3>
              <p className="text-base text-ink/70 max-w-[48ch] text-pretty">
                Kajima is designed for single and multi-unit coffee shops, boba shops, and boutique
                QSRs. Unlike Nory or enterprise systems, we don't require a 3-month setup or a
                dedicated analyst. We connect to your existing tools and start planning immediately.
              </p>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 border-b border-ink/5 pb-4">
                <p className="text-xs font-semibold uppercase tracking-widest opacity-40">Dimension</p>
                <p className="text-xs font-semibold uppercase tracking-widest opacity-40">
                  Kajima vs POS analytics
                </p>
              </div>
              {[
                ["Focus", "Future planning vs past reporting"],
                ["Effort", "5 mins / week vs hours of manual export"],
                ["Guidance", "Direct action vs raw numbers"],
                ["Setup", "Days vs months"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-2">
                  <p className="text-sm font-medium">{k}</p>
                  <p className="text-sm text-ink/60">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <section id="pilot" className="py-24 px-6 border-t border-ink/5">
        <div className="max-w-7xl mx-auto bg-moss text-washi rounded-3xl p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 max-w-[30ch] mx-auto text-balance">
            Join the Pilot Program
          </h2>
          <p className="text-lg mb-12 max-w-[52ch] mx-auto text-pretty opacity-80">
            We are accepting a small cohort of operators for our pilot. Free access during the pilot,
            then a simple $99/mo per location thereafter. No contracts, ever.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@yourshop.com"
              className="flex-1 bg-washi/10 border border-washi/20 rounded-full px-6 py-3 text-sm placeholder:text-washi/40 focus:outline-none focus:border-washi/60"
            />
            <button
              type="submit"
              className="bg-washi text-ink py-3 px-8 rounded-full font-medium text-sm ring-1 ring-washi hover:opacity-90 transition-opacity"
            >
              Apply
            </button>
          </form>
          <p className="text-xs opacity-50 mt-6">Current onboarding time: ~4 days for data integration</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-ink/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center">
          <p className="text-sm font-serif opacity-40 text-center md:text-left">
            © 2026 Kajima Operations
          </p>
          <div className="flex gap-8 text-sm font-medium opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
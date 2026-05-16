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
          <span className="font-serif text-2xl tracking-tight">Brewly</span>
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
            Brewly turns your POS data into a precise weekly battle plan. No complex dashboards —
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
      <section id="memo" className="py-20 bg-cream">
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
                While legacy systems like Toast and Square provide analytics, Brewly provides answers.
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
                      Brewly Weekly Report
                    </p>
                    <p className="font-serif text-xl">Spring Street Café</p>
                  </div>
                  <p className="text-sm font-medium">Oct 14 — Oct 20</p>
                </header>
                <div className="space-y-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="rounded-2xl bg-sky/25 p-5 space-y-1">
                      <p className="text-xs text-ink/60">You'll likely sell</p>
                      <p className="text-3xl font-serif tabular-nums">
                        1,480 <span className="text-sm text-ink/50">drinks</span>
                      </p>
                      <p className="text-[11px] text-ink/60">
                        About <span className="font-medium">200 more than last week</span> — the street festival on Saturday.
                      </p>
                      <a href="#g-delta" className="inline-flex items-center gap-1 text-[10px] font-medium text-moss hover:text-ink mt-2 underline decoration-dotted underline-offset-4">
                        点我看解释 →
                      </a>
                    </div>
                    <div className="rounded-2xl bg-peach/30 p-5 space-y-1">
                      <p className="text-xs text-ink/60">You'll need staff for</p>
                      <p className="text-3xl font-serif tabular-nums">
                        124 <span className="text-sm text-ink/50">hours</span>
                      </p>
                      <p className="text-[11px] text-ink/60">
                        Roughly <span className="font-medium">3 baristas on the floor</span> during the 9–11am rush.
                      </p>
                      <a href="#g-par" className="inline-flex items-center gap-1 text-[10px] font-medium text-moss hover:text-ink mt-2 underline decoration-dotted underline-offset-4">
                        点我看解释 →
                      </a>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-widest opacity-40">
                      Inventory Action
                    </p>
                    <div className="p-4 rounded-2xl bg-moss/10 ring-1 ring-moss/20 space-y-2">
                      <p className="text-sm font-medium">Order 20% more oat milk by Tuesday.</p>
                      <p className="text-xs text-ink/60">
                        At today's pace you'd run out Thursday — two days before the next delivery.
                      </p>
                      <a href="#g-days-left" className="inline-flex items-center gap-1 text-[10px] font-medium text-moss hover:text-ink underline decoration-dotted underline-offset-4">
                        点我看解释 →
                      </a>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-widest opacity-40">
                      Margin Watch
                    </p>
                    <p className="text-sm text-pretty">
                      You're throwing out about <span className="font-medium">1 in every 7 almond croissants</span> on Wednesdays.
                      Bake 4 fewer mid-week and you'll save roughly $38 a week.
                    </p>
                    <a href="#g-waste" className="inline-flex items-center gap-1 text-[10px] font-medium text-moss hover:text-ink underline decoration-dotted underline-offset-4">
                      点我看解释 →
                    </a>
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
                { k: "Food cost", v: "28.4%", d: "Of every $10, $2.84 goes to ingredients — under your $3 goal.", tint: "bg-moss/10", gid: "food-cost" },
                { k: "Waste", v: "3.1%", d: "About $184 of food thrown out this week.", tint: "bg-peach/30", gid: "waste" },
                { k: "Stockouts", v: "0", d: "Nothing ran out in the last 7 days. Nice.", tint: "bg-sky/25", gid: "stockout" },
                { k: "Orders coming in", v: "5", d: "$1,940 of supplies arriving this week.", tint: "bg-cream", gid: "open-po" },
                { k: "Stock on shelf", v: "$6,820", d: "About 12 days of supply at today's pace.", tint: "bg-sky/25", gid: "days-of-supply" },
                { k: "Best seller", v: "94%", d: "94 of every 100 oat lattes were sold same day.", tint: "bg-moss/10", gid: "sell-through" },
              ].map((c) => (
                <div
                  key={c.k}
                  className={"ring-1 ring-black/5 rounded-2xl p-5 flex flex-col " + c.tint}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest opacity-50">{c.k}</p>
                  <p className="text-2xl font-serif mt-2 tabular-nums">{c.v}</p>
                  <p className="text-[11px] mt-1 text-ink/65 leading-snug">{c.d}</p>
                  <a
                    href={`#g-${c.gid}`}
                    className="mt-3 inline-flex items-center gap-1 text-[10px] font-medium text-moss hover:text-ink underline decoration-dotted underline-offset-4 self-start"
                  >
                    点我看解释 →
                  </a>
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
                Brewly is designed for single and multi-unit coffee shops, boba shops, and boutique
                QSRs. Unlike Nory or enterprise systems, we don't require a 3-month setup or a
                dedicated analyst. We connect to your existing tools and start planning immediately.
              </p>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 border-b border-ink/5 pb-4">
                <p className="text-xs font-semibold uppercase tracking-widest opacity-40">Dimension</p>
                <p className="text-xs font-semibold uppercase tracking-widest opacity-40">
                  Brewly vs POS analytics
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

      {/* Glossary */}
      <section id="glossary" className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-moss/70 mb-3 block">
                数字怎么读 · How to read the numbers
              </span>
              <h2 className="text-3xl md:text-4xl font-serif leading-tight max-w-[32ch] text-balance">
                没有黑话，每个指标都用一句话说清楚。
              </h2>
            </div>
            <p className="text-sm text-ink/60 max-w-sm">
              拿不准某个数字？翻一下这里。所有口径都和你 Monday Memo 里看到的一致。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                term: "Days Left · 还能用几天",
                short: "按现在的消耗速度，这批货还能撑多少天。",
                example: "18 桶燕麦奶 ÷ 每天用 9.4 桶 ≈ 1.9 天 → 今天必须下单。",
                tint: "bg-sky/25",
              },
              {
                term: "Daily Use · 日均消耗",
                short: "过去 14 天平均每天用掉多少，已剔除节假日异常。",
                example: "espresso 豆 4.2 磅 / 天，意味着一袋 5 磅刚好顶一天。",
                tint: "bg-peach/30",
              },
              {
                term: "Food Cost · 食材成本占比",
                short: "你卖出 100 块里，有多少花在了原料上。越低越赚钱。",
                example: "28.4% = 卖 10 元有 2.84 元是食材；行业健康线 25–30%。",
                tint: "bg-moss/10",
              },
              {
                term: "Margin · 毛利",
                short: "卖价减掉原料成本剩下的钱，留给你付房租、人工和自己。",
                example: "一杯拿铁卖 ¥28，奶 + 豆 + 杯 ¥7 → 毛利 ¥21，毛利率 75%。",
                tint: "bg-cream",
              },
              {
                term: "Dead Stock · 挤压库存",
                short: "买回来卖不动、又快到保质期的货。不处理就是垃圾桶。",
                example: "1.8 kg 莓果酱还有 5 天就坏 → 周末做酸奶特惠清掉。",
                tint: "bg-peach/30",
              },
              {
                term: "Waste % · 损耗率",
                short: "进货里被扔掉的比例。3% 以下算优秀，5% 以上要警惕。",
                example: "本周报废 ¥184 / 进货 ¥5,900 = 3.1%。",
                tint: "bg-sky/25",
              },
              {
                term: "Sell-through · 售罄率",
                short: "当天做出来 / 进货的东西，当天卖掉了多少。",
                example: "燕麦拿铁 94% 售罄 = 100 杯做出 94 杯卖掉，6 杯余量正合适。",
                tint: "bg-moss/10",
              },
              {
                term: "Par Level · 备货基准",
                short: "每个时段冰箱/货架上应该放多少，低于它就要补。",
                example: "杏仁可颂周三 par = 16 个，现在还剩 5 个 → 再烤 11 个。",
                tint: "bg-cream",
              },
              {
                term: "Stockout · 断货",
                short: "顾客点单时这个东西没有了。等于直接送钱给隔壁店。",
                example: "上周断货 0 次,意味着没有一单流失。",
                tint: "bg-sky/25",
              },
              {
                term: "Open PO · 在途订单",
                short: "已经下单但还没到货的供货,会在未来几天进入库存。",
                example: "5 张在途 PO 合计 ¥1,940,周三/周五分批到货。",
                tint: "bg-peach/30",
              },
              {
                term: "Days of Supply · 库存天数",
                short: "手上的货按今天速度还够卖多少天。健康区间 7–14 天。",
                example: "库存 ¥6,820 ÷ 每天用 ¥550 ≈ 12.4 天。",
                tint: "bg-moss/10",
              },
              {
                term: "Δ (Delta) · 周环比",
                short: "这周比上周多了/少了多少,看趋势用。",
                example: "全脂奶 +13.2% = 这周比上周多用了 9 加仑,要补订。",
                tint: "bg-cream",
              },
            ].map((g) => (
              <div
                key={g.term}
                className={"rounded-2xl ring-1 ring-black/5 p-5 " + g.tint}
              >
                <p className="font-serif text-lg leading-snug">{g.term}</p>
                <p className="text-sm text-ink/75 mt-2 leading-snug">{g.short}</p>
                <p className="text-[11px] text-ink/55 mt-3 tabular-nums leading-relaxed border-t border-ink/10 pt-3">
                  例 · {g.example}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center">
            <p className="text-xs text-ink/50 max-w-md text-center">
              所有指标都基于你自己门店过去 14 天的实际 POS 数据,不是行业平均。看不懂的随时问,我们会把它加进这里。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-ink/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center">
          <p className="text-sm font-serif opacity-40 text-center md:text-left">
            © 2026 Brewly Operations
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
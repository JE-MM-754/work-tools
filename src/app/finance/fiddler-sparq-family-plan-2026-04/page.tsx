import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Family Financial Plan',
  description: 'Simple family financial plan for Jamie and Vy under the Fiddler + Sparq scenario.',
};

const baseline = {
  name: 'Current baseline',
  gross: '$285K household gross',
  net: '$16K to $18K monthly take-home',
  fixed: '$14K monthly burn',
  takeaway: '$2K to $4K left, often less in practice',
  note: 'This is why things have felt tight. Too many moving debt pieces, not enough breathing room.',
};

const scenarios = [
  {
    title: 'Base win, Fiddler + Sparq + Vy income',
    gross: '$425K gross household income',
    net: '$24.5K monthly take-home planning number',
    housing: '$5.25K housing',
    cars: '$1.4K total car payments',
    other: '$7K other life, debt, food, utilities, travel, misc',
    takeaway: '$10.85K/month left',
    delta: '+$7K to +$9K per month better than today',
  },
  {
    title: 'Downside but still solid, Fiddler + Sparq, Vy leaves job',
    gross: '$370K gross household income',
    net: '$22K monthly take-home planning number',
    housing: '$5.25K housing',
    cars: '$1.4K total car payments',
    other: '$7K other life, debt, food, utilities, travel, misc',
    takeaway: '$8.35K/month left',
    delta: '+$5K to +$7K per month better than today',
  },
  {
    title: 'Upside case, Fiddler + Sparq + 1 more $10K retainer + Vy income',
    gross: '$545K gross household income',
    net: '$30K monthly take-home planning number',
    housing: '$5.25K housing',
    cars: '$1.4K total car payments',
    other: '$7.5K other life, debt, food, utilities, travel, misc',
    takeaway: '$15.85K/month left',
    delta: '+$12K to +$14K per month better than today',
  },
  {
    title: 'Big upside, Fiddler + Sparq + 2 more $10K retainers + Vy income',
    gross: '$665K gross household income',
    net: '$35.5K monthly take-home planning number',
    housing: '$5.5K housing',
    cars: '$1.5K total car payments',
    other: '$8K other life, debt, food, utilities, travel, misc',
    takeaway: '$20.5K/month left',
    delta: '+$16K to +$18K per month better than today',
  },
];

const priorities = [
  'Pay off remaining credit card debt',
  'Pay back Vy’s mom $30K within 6 to 12 months',
  'Build cash cushion fast',
  'Save aggressively for house down payment',
  'Fund Nashville, Colorado, and one more trip in cash',
  'Replace cars carefully, not emotionally',
];

const strategicPlan = [
  'Use Fiddler as the stable foundation, cash flow, benefits, and equity upside.',
  'Use Sparq as a first advisory client and proof point for a future fractional GTM business.',
  'Avoid relying on extra retainers for survival. Treat them as upside that accelerates savings and flexibility.',
  'Spend the next 12 months building safety first, then optionality.',
  'Focus on creating leverage and repeatable value, not random side work.',
];

const reasonable = [
  '$575K to $650K house = conservative and smart',
  '$650K to $725K house = comfortable stretch',
  '$1K to $1.4K total monthly car payments = ideal target',
  '$1.6K total monthly car payments = upper edge',
  'Buy one car first, not both at once, unless cash gets very strong',
];

const biggerHouseRequirements = [
  'Household income needs to be consistently in the $500K+ range, ideally with Fiddler + Sparq + at least one additional durable retainer.',
  'Cash on hand for down payment, closing costs, and furnishing should likely be at least $175K to $250K, not pulled recklessly from retirement accounts.',
  'Emergency reserves should still remain healthy after closing, ideally 6+ months of true living costs.',
  'Remaining consumer debt should be minimal, especially credit card balances and family debt.',
  'Total housing payment should feel manageable even if one retainer disappears or Vy stops working.',
  'Furniture and setup costs should be pre-planned in cash, not casually added to cards after closing.',
  'Two-car payments would need to stay controlled, or one car should be low payment or owned outright.',
  'The house should still leave meaningful monthly surplus for investing, vacations, repairs, and future kids.',
];

const kidsComfort = [
  'Credit card debt should be gone before trying for kids.',
  'Vy’s mom should be paid back or on a very clear final payoff path.',
  'Emergency savings should cover at least 6 to 12 months of real expenses.',
  'The household should still work if Vy leaves her job or pauses work temporarily.',
  'Monthly surplus should remain healthy even after adding baby costs and future childcare.',
  'House payment needs to feel safe, not survivable only if everything goes perfectly.',
];

const kidsBudget = [
  'Baby and medical setup costs: plan for a one-time $5K to $10K buffer.',
  'Ongoing baby costs before daycare: roughly $500 to $1,000/month.',
  'Future daycare could easily add $1.5K to $2.5K+/month depending on timing and location.',
  'Before trying for kids, the plan should still show at least $3K to $5K/month surplus in a conservative case.',
];

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default function FamilyFinancialPlanPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 lg:px-10">
        <div className="mb-6 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Family plan</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">Fiddler + Sparq financial roadmap</h1>
          <p className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-lg leading-8 text-emerald-100">
            The goal is not to instantly upgrade everything. The goal is to use a stronger income base to create safety, flexibility, and a realistic path to a house.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Where we are now">
            <div className="space-y-3 text-slate-300">
              <p><strong className="text-white">Gross:</strong> {baseline.gross}</p>
              <p><strong className="text-white">Monthly take-home:</strong> {baseline.net}</p>
              <p><strong className="text-white">Monthly burn:</strong> {baseline.fixed}</p>
              <p><strong className="text-white">Monthly leftover:</strong> {baseline.takeaway}</p>
              <p className="text-slate-400">{baseline.note}</p>
            </div>
          </Card>

          <Card title="Main priorities for the next 12 months">
            <ul className="space-y-3 text-slate-300">
              {priorities.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-emerald-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-6">
          <Card title="The broader strategy behind this plan">
            <ul className="space-y-3 text-slate-300">
              {strategicPlan.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-emerald-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-6 space-y-6">
          {scenarios.map((scenario) => (
            <Card key={scenario.title} title={scenario.title}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 text-slate-300">
                  <p><strong className="text-white">Gross income:</strong> {scenario.gross}</p>
                  <p><strong className="text-white">Monthly take-home:</strong> {scenario.net}</p>
                  <p><strong className="text-white">Housing assumption:</strong> {scenario.housing}</p>
                  <p><strong className="text-white">Cars assumption:</strong> {scenario.cars}</p>
                  <p><strong className="text-white">Other monthly spending:</strong> {scenario.other}</p>
                </div>
                <div className="space-y-3 rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Monthly takeaway</p>
                  <p className="text-3xl font-bold text-white">{scenario.takeaway}</p>
                  <p className="text-slate-300"><strong className="text-white">Delta vs today:</strong> {scenario.delta}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card title="What is reasonable next year">
            <ul className="space-y-3 text-slate-300">
              {reasonable.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-emerald-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>

          <Card title="What would make an $800K to $1M house responsible">
            <ul className="space-y-3 text-slate-300">
              {biggerHouseRequirements.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-emerald-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card title="What makes kids in the next 2 years feel safe">
            <ul className="space-y-3 text-slate-300">
              {kidsComfort.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-emerald-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>

          <Card title="Kids budget reality">
            <ul className="space-y-3 text-slate-300">
              {kidsBudget.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-emerald-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-6">
          <Card title="Simple message for Vy">
            <div className="space-y-3 text-slate-300">
              <p>
                If Fiddler and Sparq both land, the household should move from tight and stressful to genuinely stable.
              </p>
              <p>
                That should give enough room to pay down debt, pay back family, save for a house, take a few trips, and make smart car moves without feeling financially trapped.
              </p>
              <p>
                The key is using the first year to build safety and flexibility, not to immediately max out the lifestyle.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}

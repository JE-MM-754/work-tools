import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sparq Thesis',
  description: 'A concise strategic thesis for how Sparq can sharpen its GTM around the shift from role-based AI thinking to workflow-based AI transformation.',
};

const thesis = `The old way of thinking about AI is role-based. It asks, how do we make a rep, analyst, operator, or manager more productive? The new way is workflow-based. It asks, which workflows drive the most value in the business, where do decisions, actions, handoffs, and exceptions create friction, and how do we redesign those workflows with AI in a secure, governed, and trusted way? Over the next 12 to 24 months, the market will move hard in that direction. Sparq has a real opportunity to lead that shift.`;

const marketChanges = [
  'The old frame was role productivity. Companies asked how AI could help individual employees move faster. That created a lot of copilots, assistants, and pilot programs, but often not enough measurable business change.',
  'The new frame is workflow transformation. Companies will increasingly ask which workflows drive margin, throughput, uptime, risk control, and growth, then focus AI investment there.',
  'This changes the value conversation. Instead of saving a person 20 minutes, the goal becomes reducing cycle time, improving conversion, lowering errors, speeding decisions, and increasing throughput across an entire system of work.',
  'It also raises the bar for execution. Once AI sits inside real workflows, security, governance, observability, fallback logic, and human control become essential, not optional.',
  'The firms that win will be the ones that can help buyers move from role-based experimentation to workflow-based operationalization and prove measurable outcomes over time.',
];

const sparqPositioning = [
  'Sparq is naturally aligned to the workflow-based future because its brand already points toward the operational core of the enterprise, not surface-level productivity theater.',
  'Its strongest wedge is helping enterprises identify the workflows that matter most, break those workflows down into the actions and decisions that create leverage, and redesign them with AI safely in production.',
  'That lets Sparq sell something much more strategic than AI experimentation. It can sell workflow transformation tied to business outcomes.',
  'Sparq can help customers make the shift by combining consulting, engineering, data, and AI into one motion: identify the workflow, diagnose the friction, redesign the operating model, deploy AI with trust and governance, then measure the result.',
  'In plain English, Sparq can be the partner that helps enterprises stop thinking about AI by role and start thinking about AI by workflow.',
];

const questions = [
  'Where are we still talking about AI through roles when we should be talking about workflows?',
  'Which workflows in the business matter most to margin, throughput, uptime, growth, or risk, and how can Sparq build its message around them?',
  'What are the key decisions, actions, handoffs, and exception paths inside those workflows where AI could create the most leverage?',
  'What would it take for a buyer to trust AI inside that workflow at production scale, from a governance, security, observability, and human-control standpoint?',
  'How should success be measured at the workflow level so that AI is tied to real business outcomes instead of generic productivity claims?',
];

function SectionHeader({ title }: { title: string }) {
  return <h2 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">{title}</h2>;
}

export default function SparqGtmReinventionPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ea] text-stone-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.08),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.92),rgba(248,243,234,0.96))]" />
      <div className="relative mx-auto max-w-5xl px-6 py-10 md:px-10 lg:py-14">
        <section className="rounded-[2rem] border border-orange-200 bg-[linear-gradient(135deg,#fffaf3,#f3e6d5)] px-8 py-10 shadow-[0_24px_80px_rgba(120,53,15,0.10)] md:px-10 md:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700">Sparq strategy thesis</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl md:leading-[1.08]">
            From role-based AI thinking to workflow-based AI transformation
          </h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-stone-700">{thesis}</p>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-stone-200 bg-white/85 p-8 shadow-[0_12px_40px_rgba(120,53,15,0.05)]">
          <SectionHeader title="How the market is changing" />
          <div className="mt-6 space-y-4">
            {marketChanges.map((item) => (
              <div key={item} className="rounded-2xl border border-stone-200 bg-[#fffdf9] px-5 py-4 text-base leading-8 text-stone-700">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-stone-200 bg-white/85 p-8 shadow-[0_12px_40px_rgba(120,53,15,0.05)]">
          <SectionHeader title="How Sparq can help customers get there" />
          <div className="mt-6 space-y-4">
            {sparqPositioning.map((item) => (
              <div key={item} className="rounded-2xl border border-stone-200 bg-[#fffdf9] px-5 py-4 text-base leading-8 text-stone-700">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-orange-200 bg-[#fff4e8] p-8 shadow-[0_12px_40px_rgba(249,115,22,0.08)]">
          <SectionHeader title="Questions to think about" />
          <div className="mt-6 space-y-4">
            {questions.map((item, index) => (
              <div key={item} className="rounded-2xl border border-orange-100 bg-white/85 px-5 py-4">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-700">Question 0{index + 1}</p>
                <p className="mt-2 text-base leading-8 text-stone-800">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

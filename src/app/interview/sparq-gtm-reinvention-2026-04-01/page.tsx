import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sparq Thesis',
  description: 'A concise strategic thesis for how Sparq can sharpen its GTM around the next phase of enterprise AI adoption.',
};

const thesis = `The AI services market is shifting from experimentation to operationalization. Over the next 12 to 24 months, the winners will not be the firms that simply help enterprises explore AI. They will be the firms that help enterprises identify the workflows that matter most, move AI safely into production inside those workflows, and prove measurable business outcomes over time. Sparq is uniquely positioned to own that story.`;

const marketChanges = [
  'AI is moving from curiosity to accountability. Enterprises are being pushed to show real business value, not just pilot activity.',
  'The conversation is shifting from role productivity to workflow redesign. The biggest gains will come from changing how the business operates, not from adding lightweight assistants to individual jobs.',
  'Prototype-to-production is becoming the real bottleneck. Most companies can get a demo working. Far fewer can operationalize AI in live environments with confidence.',
  'Security, governance, observability, and trust are becoming front-end buying criteria, not back-end implementation details.',
  'Return on AI will matter more. Buyers will increasingly demand measurable impact on cycle time, throughput, margin, revenue, service levels, and risk.',
];

const sparqPositioning = [
  'Sparq already has brand permission to play in hard operational work, not generic transformation theater.',
  'Its strongest lane is helping enterprises modernize the systems and workflows that determine margin, throughput, uptime, and growth.',
  'That gives Sparq a credible wedge around workflow-level AI transformation, not just AI strategy or engineering capacity.',
  'Sparq can differentiate by positioning around trusted production, secure deployment, governed decisioning, and measurable outcomes.',
  'In plain English, Sparq can become the partner that helps enterprises move AI from prototype to trusted production in the workflows that matter most.',
];

const questions = [
  'What AI problem do enterprise buyers most urgently need solved in the next 12 to 24 months, more experimentation or trusted operationalization?',
  'Which workflows are most economically important in the enterprise, and how should Sparq anchor its message there?',
  'Why do most AI initiatives stall before production, and how can Sparq build a GTM motion around solving those blockers?',
  'What does a trusted production-grade AI deployment actually require from a security, governance, observability, and human-control standpoint?',
  'How should Sparq help buyers measure Return on AI in business terms that matter to operators and executives?',
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
            How Sparq can sharpen its go to market for the next phase of AI
          </h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-stone-700">{thesis}</p>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-stone-200 bg-white/85 p-8 shadow-[0_12px_40px_rgba(120,53,15,0.05)]">
          <SectionHeader title="How the AI market is changing over the next 12 to 24 months" />
          <div className="mt-6 space-y-4">
            {marketChanges.map((item) => (
              <div key={item} className="rounded-2xl border border-stone-200 bg-[#fffdf9] px-5 py-4 text-base leading-8 text-stone-700">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-stone-200 bg-white/85 p-8 shadow-[0_12px_40px_rgba(120,53,15,0.05)]">
          <SectionHeader title="Sparq's unique positioning" />
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

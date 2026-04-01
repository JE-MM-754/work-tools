import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sparq Thesis',
  description: 'A concise strategic thesis for how Sparq can sharpen its GTM around the shift from hiring roles to designing workflows.',
};

const thesisBlocks = {
  kicker: 'Old way: add headcount. New way: build better workflows.',
  intro: 'For years, leaders scaled by asking: who is the next hire that gives us the most leverage?',
  rationale: 'That made sense when work was manual, fragmented, and constrained by human bandwidth.',
  transition: 'Now the better question is:',
  bullets: [
    'which workflows drive the business outcomes that matter most',
    'which actions inside them can be automated or improved with AI',
    'where AI can detect signals and patterns better than humans',
    'which workflows we should build next to create the most leverage',
  ],
  goal: 'The point is not automation for its own sake. It is to give strong people better systems so they can produce much more output with better control.',
  close: 'The biggest AI shift over the next 12 to 24 months will be a shift in management thinking, from adding headcount to building smarter operating systems. The companies that win will improve the business outcomes that matter most because their workflows are designed better. Sparq can lead that conversation.',
};

const operatingPrinciples = [
  {
    title: 'Start with KPIs, not org charts',
    body: 'The first question should be which KPIs matter most, not which team needs another headcount line. That forces the conversation toward leverage, not staffing reflexes.',
  },
  {
    title: 'Go one level deeper than the workflow name',
    body: 'Once a high-value workflow is identified, the real leverage comes from finding the specific actions, signals, decisions, and exception paths inside it that AI can improve.',
  },
  {
    title: 'Use AI where it is structurally stronger',
    body: 'AI is especially valuable when it can detect patterns, surface signals, route work, identify anomalies, and recommend next-best actions across fragmented systems faster than humans can.',
  },
  {
    title: 'Leverage people through better systems',
    body: 'The goal is not automation for its own sake. It is to give strong people better systems so they can manage more surface area, make better decisions, and move KPIs faster.',
  },
];

const sparqPositioning = [
  'Sparq helps customers find the workflows most tied to the business outcomes that matter most, then identify the specific actions, signals, and decisions inside them where AI creates the most leverage.',
  'That gives Sparq a stronger story than generic AI services. It is not helping clients experiment. It is helping them build smarter operating systems.',
  'Sparq can help determine what AI should detect, what it should automate, what should remain human, and what workflow should be prioritized next.',
  'The result is simple: better systems, more output per strong operator, and faster improvement in the business outcomes that matter most.',
];

const questions = [
  'Which business outcomes matter most right now, and which workflows drive them?',
  'What specific granular actions inside those workflows can be automated or improved with AI?',
  'How can Sparq create a repeatable GTM playbook to workshop the highest-leverage workflows with customers quickly, estimate ROI, implement fast, and do it in a trusted way?',
  'What signals, patterns, anomalies, or next-best actions can AI detect better or faster than humans?',
  'How should success be measured so the conversation stays tied to better business outcomes, not generic AI efficiency claims?',
  'Once those outcomes are tracked, how can Sparq price against them in a way that aligns with customer success?',
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
            Old way: hire for the role. New way: design for the workflow.
          </h1>
          <div className="mt-6 rounded-[1.5rem] border border-orange-100 bg-white/70 px-6 py-5 shadow-[0_10px_30px_rgba(120,53,15,0.06)]">
            <p className="text-lg font-medium leading-8 text-stone-900 md:text-xl md:leading-9">
              {thesisBlocks.kicker}
            </p>
          </div>
          <div className="mt-6 max-w-4xl space-y-4 text-lg leading-8 text-stone-700 md:text-xl md:leading-9">
            <p>{thesisBlocks.intro}</p>
            <p>{thesisBlocks.rationale}</p>
            <p className="font-medium text-stone-900">{thesisBlocks.transition}</p>
            <ul className="space-y-3 rounded-[1.25rem] border border-stone-200 bg-white/60 px-6 py-5 text-base leading-8 text-stone-800 md:text-lg">
              {thesisBlocks.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-[13px] h-2 w-2 rounded-full bg-orange-500" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p>{thesisBlocks.goal}</p>
            <p className="font-medium text-stone-900">{thesisBlocks.close}</p>
          </div>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-stone-200 bg-white/85 p-8 shadow-[0_12px_40px_rgba(120,53,15,0.05)]">
          <SectionHeader title="What changes once you adopt the new lens" />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {operatingPrinciples.map((item) => (
              <div key={item.title} className="rounded-2xl border border-stone-200 bg-[#fffdf9] p-5">
                <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-3 text-base leading-8 text-stone-700">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-stone-200 bg-white/85 p-8 shadow-[0_12px_40px_rgba(120,53,15,0.05)]">
          <SectionHeader title="Why Sparq fits this shift" />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {sparqPositioning.map((item) => (
              <div key={item} className="rounded-2xl border border-stone-200 bg-[#fffdf9] px-5 py-4 text-base leading-8 text-stone-700">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-orange-200 bg-[#fff7ef] p-8 shadow-[0_12px_40px_rgba(249,115,22,0.08)]">
          <SectionHeader title="What happens for Sparq after the first workflow lands" />
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-orange-100 bg-white/85 px-5 py-4 text-base leading-8 text-stone-700">
              Sparq gets entrenched in the account quickly because it is tied to an important workflow and an immediate business outcome. That creates trust fast.
            </div>
            <div className="rounded-2xl border border-orange-100 bg-white/85 px-5 py-4 text-base leading-8 text-stone-700">
              From there, Sparq can track ongoing outcomes, help price toward success, and identify the next highest-leverage workflows to build so the value compounds over time.
            </div>
            <div className="rounded-2xl border border-orange-100 bg-white/85 px-5 py-4 text-base leading-8 text-stone-700">
              This expands Sparq from point implementation into the service arm for responsible AI growth, trust and governance, AI control plane design, model tuning, reliability, and cost tracking across multiple LLM vendors and multi-agent workflows.
            </div>
            <div className="rounded-2xl border border-orange-100 bg-white/85 px-5 py-4 text-base leading-8 text-stone-700">
              That is what makes the relationship durable. Sparq is not just helping launch AI. It is helping customers modernize responsibly and keep improving the operating system over time.
            </div>
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

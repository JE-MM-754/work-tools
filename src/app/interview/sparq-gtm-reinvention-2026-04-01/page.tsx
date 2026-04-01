import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sparq GTM Reinvention',
  description: 'A strategy site for reinventing Sparq\'s go to market around workflow-first, production-grade AI services.',
};

const marketShift = [
  {
    title: 'From AI experimentation to AI accountability',
    body: 'The market is moving beyond pilots, demos, and role-based productivity stories. Buyers now need trusted production systems tied to real business outcomes.',
  },
  {
    title: 'From role augmentation to workflow redesign',
    body: 'The most valuable AI opportunities sit inside workflows that determine margin, throughput, uptime, growth, and risk, not in shallow user-level productivity boosts.',
  },
  {
    title: 'From technical possibility to operational trust',
    body: 'Security, governance, observability, auditability, and fail-safe design are no longer implementation details. They are part of the commercial story.',
  },
  {
    title: 'From services menu to category wedge',
    body: 'Generic consulting, engineering, and AI capability language gets commoditized fast. A sharper category story creates pricing power and executive urgency.',
  },
];

const northStar = [
  'Own the category of trusted, production-grade AI workflow transformation.',
  'Shift the market conversation from roles to workflows and from pilots to operating systems.',
  'Make trust architecture, governance, and observability part of front-end positioning.',
  'Sell outcomes and Return on AI, not activity, deliverables, or AI theater.',
  'Create a repeatable land-and-expand motion around high-value workflow families.',
];

const coreThesis = `Sparq can become the most compelling AI services company in the market if it positions around a simple truth: enterprises do not need more AI experimentation. They need help identifying the workflows that matter most, moving AI safely into production inside those workflows, and proving measurable business outcomes over time.`;

const whyNow = [
  'Most enterprise AI programs are still stuck between prototype and production.',
  'Executive buyers are increasingly accountable for proving value, not just launching pilots.',
  'Governance, observability, and trust requirements are becoming purchase blockers and vendor differentiators.',
  'The services vendors that solve operationalization will outrun the ones still selling strategy theater.',
];

const pillars = [
  {
    id: 'workflow',
    eyebrow: 'Pillar 01',
    title: 'Lead with workflows, not roles',
    body: 'The AI opportunity is not helping each employee do a little more. It is redesigning the workflows that determine business performance. Sparq should orient discovery, messaging, and solutions around quote-to-cash, claims, onboarding, service resolution, underwriting, exception handling, and other mission-critical workflows.',
    bullets: [
      'Anchor on workflows tied to margin, throughput, uptime, growth, and risk',
      'Break workflows into decisions, actions, handoffs, and exception paths',
      'Use workflow diagnosis as the front door to larger strategic engagements',
    ],
  },
  {
    id: 'production',
    eyebrow: 'Pillar 02',
    title: 'Own the prototype-to-production gap',
    body: 'This is the highest-value AI services wedge in the next 12 to 18 months. Most firms can help clients experiment. Very few can help them operationalize AI reliably in live enterprise environments.',
    bullets: [
      'Production readiness, orchestration, integration, and operating model design',
      'Exception handling, fallback logic, and human-in-the-loop controls',
      'Repeatable approach for moving from proof to live deployment',
    ],
  },
  {
    id: 'trust',
    eyebrow: 'Pillar 03',
    title: 'Make trust architecture part of the sales story',
    body: 'Trust can no longer sit in the appendix. The strongest AI services vendors will lead directly with secure deployment, governed decisioning, explainability, observability, auditability, and measurable reliability in production.',
    bullets: [
      'Position governance as a value driver, not a constraint',
      'Show how controls, approvals, and visibility reduce buyer risk',
      'Package trust as part of the transformation system, not an afterthought',
    ],
  },
  {
    id: 'roi',
    eyebrow: 'Pillar 04',
    title: 'Sell on outcomes and Return on AI',
    body: 'The market is moving past pilot vanity metrics. Sparq should tie every opportunity to workflow-level business outcomes that operators and finance leaders respect.',
    bullets: [
      'Cycle time, throughput, conversion, margin, service levels, and error reduction',
      'Baseline metrics before deployment and outcome tracking after go-live',
      'Commercial language centered on business impact, not feature count or model novelty',
    ],
  },
  {
    id: 'packaging',
    eyebrow: 'Pillar 05',
    title: 'Productize the front end of GTM',
    body: 'To scale growth, the message has to become a repeatable motion. Sparq should package clear entry offers that create urgency, improve qualification, and establish a stronger land-and-expand path.',
    bullets: [
      'AI workflow diagnostic',
      'AI production-readiness assessment',
      'Trusted AI architecture sprint',
      'Workflow redesign and Return on AI mapping',
    ],
  },
];

const questions = [
  'What AI problem do enterprise buyers most urgently need solved right now, experimentation or operationalization?',
  'Which workflows matter most economically and operationally, and how should Sparq anchor its message there?',
  'Why do AI initiatives stall before production, and how can Sparq become the partner that removes those blockers?',
  'What does trusted production-grade AI actually require, technically, operationally, and commercially?',
  'How should Return on AI be measured so that COOs, CIOs, CFOs, and business leaders all believe it?',
];

const offers = [
  {
    title: 'AI Workflow Diagnostic',
    body: 'Identify the workflow with the highest strategic value, map where friction and exceptions exist, and define the outcome metrics that matter.',
  },
  {
    title: 'Production-Readiness Assessment',
    body: 'Evaluate architecture, controls, governance, data boundaries, observability, and operating model gaps standing in the way of production deployment.',
  },
  {
    title: 'Trusted AI Architecture Sprint',
    body: 'Design a secure, governed, explainable, and observable deployment pattern aligned to enterprise trust requirements.',
  },
  {
    title: 'Pilot-to-Production Acceleration',
    body: 'Turn isolated proofs of concept into live workflow systems with measurable business impact and clear expansion paths.',
  },
];

const differentiation = [
  'Not generic digital transformation',
  'Not AI strategy theater',
  'Not prompt engineering labor dressed up as consulting',
  'Not commodity engineering capacity',
  'Not disconnected AI point-solution implementation',
];

const destination = [
  'Higher-quality pipeline and more executive-level conversations',
  'A sharper, more defensible market position',
  'Cleaner qualification and stronger deal conversion',
  'Larger, more strategic engagements with stronger expansion potential',
  'Premium pricing power grounded in credibility and outcomes',
];

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">{title}</h2>
      {copy ? <p className="mt-4 text-lg leading-8 text-stone-600">{copy}</p> : null}
    </div>
  );
}

export default function SparqGtmReinventionPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ea] text-stone-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.10),transparent_32%),radial-gradient(circle_at_top_right,rgba(120,53,15,0.08),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(248,243,234,0.96))]" />
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12 lg:py-14">
        <section className="overflow-hidden rounded-[2rem] border border-orange-200 bg-[linear-gradient(135deg,#fffaf3,#f4eadb)] shadow-[0_30px_90px_rgba(120,53,15,0.12)]">
          <div className="grid gap-10 px-8 py-10 md:px-10 lg:grid-cols-[1.35fr_0.9fr] lg:px-12 lg:py-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-700">Sparq strategy brief</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl md:leading-[1.04]">
                Reinventing Sparq&apos;s go to market to become the world&apos;s best AI services vendor
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600 md:text-xl md:leading-9">
                A sharper commercial story for the next wave of enterprise AI demand, built around workflow redesign,
                trusted production deployment, measurable outcomes, and Return on AI.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-stone-700">
                <span className="rounded-full border border-orange-200 bg-white px-4 py-2">Workflow-first AI</span>
                <span className="rounded-full border border-orange-200 bg-white px-4 py-2">Trusted production</span>
                <span className="rounded-full border border-orange-200 bg-white px-4 py-2">Governance + observability</span>
                <span className="rounded-full border border-orange-200 bg-white px-4 py-2">Outcome-led GTM</span>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-orange-200 bg-white/90 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-700">The core thesis</p>
              <p className="mt-4 text-lg leading-8 text-stone-700">{coreThesis}</p>
              <div className="mt-8 space-y-3">
                {northStar.map((item) => (
                  <div key={item} className="rounded-2xl border border-stone-200 bg-[#fffaf5] px-4 py-3 text-sm leading-7 text-stone-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-stone-200 bg-white/85 p-8 shadow-[0_12px_40px_rgba(120,53,15,0.05)]">
            <SectionHeader
              eyebrow="The market shift"
              title="The market is splitting fast"
              copy="Enterprise buyers are moving from AI curiosity to AI accountability. That changes what wins in services."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {marketShift.map((item) => (
                <div key={item.title} className="rounded-2xl border border-stone-200 bg-[#fffdf9] p-5">
                  <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-orange-200 bg-[#fff5e8] p-8 shadow-[0_12px_40px_rgba(249,115,22,0.08)]">
            <SectionHeader eyebrow="Why now" title="This window is open right now" />
            <div className="mt-8 space-y-4">
              {whyNow.map((item) => (
                <div key={item} className="rounded-2xl border border-orange-100 bg-white/80 px-5 py-4 text-sm leading-7 text-stone-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <SectionHeader
            eyebrow="The reinvention blueprint"
            title="Five GTM pillars that create separation"
            copy="This is the strategic operating system for making Sparq the most compelling AI services firm in the market."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.id} className="rounded-[1.6rem] border border-stone-200 bg-white/85 p-6 shadow-[0_16px_50px_rgba(120,53,15,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-700">{pillar.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-semibold text-stone-900">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{pillar.body}</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-700">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-[10px] h-2 w-2 rounded-full bg-orange-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.75rem] border border-stone-200 bg-white/85 p-8 shadow-[0_12px_40px_rgba(120,53,15,0.05)]">
            <SectionHeader eyebrow="Key strategic questions" title="The questions that should reshape GTM" />
            <div className="mt-8 space-y-4">
              {questions.map((question, index) => (
                <div key={question} className="rounded-2xl border border-stone-200 bg-[#fffdf9] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-700">Question 0{index + 1}</p>
                  <p className="mt-3 text-base leading-8 text-stone-800">{question}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-stone-200 bg-[#f7efe2] p-8 shadow-[0_12px_40px_rgba(120,53,15,0.06)]">
            <SectionHeader
              eyebrow="Packaged entry offers"
              title="Turn the message into a repeatable commercial motion"
              copy="A stronger category story needs a stronger way to land and expand."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {offers.map((offer) => (
                <div key={offer.title} className="rounded-2xl border border-stone-200 bg-white/85 p-5">
                  <h3 className="text-lg font-semibold text-stone-900">{offer.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{offer.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[1.75rem] border border-orange-200 bg-[#fff3e2] p-8 shadow-[0_12px_40px_rgba(249,115,22,0.08)]">
            <SectionHeader eyebrow="What Sparq is not" title="The category contrast matters" />
            <div className="mt-8 space-y-4">
              {differentiation.map((item) => (
                <div key={item} className="rounded-2xl border border-orange-100 bg-white/80 px-5 py-4 text-sm leading-7 text-stone-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-stone-200 bg-white/85 p-8 shadow-[0_12px_40px_rgba(120,53,15,0.05)]">
            <SectionHeader
              eyebrow="The new market statement"
              title="A message Sparq can actually own"
            />
            <div className="mt-8 rounded-[1.5rem] border border-stone-200 bg-[#fffdf9] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-700">Short version</p>
              <p className="mt-4 text-2xl font-medium leading-10 text-stone-900">
                Sparq helps enterprises move AI from prototype to trusted production inside the workflows that matter most to business performance.
              </p>
            </div>
            <div className="mt-5 rounded-[1.5rem] border border-stone-200 bg-[#fffdf9] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-700">Expanded version</p>
              <p className="mt-4 text-base leading-8 text-stone-700">
                The next wave of AI value will not come from scattered pilots or generic productivity tools. It will come from redesigning the workflows that determine margin, throughput, uptime, risk, and growth. Sparq helps enterprises identify those workflows, operationalize AI securely inside them, and prove measurable business outcomes over time.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-stone-200 bg-white/85 p-8 shadow-[0_12px_40px_rgba(120,53,15,0.05)] md:p-10">
          <SectionHeader
            eyebrow="What winning looks like"
            title="The 12 to 18 month destination"
            copy="If Sparq reworks GTM around this strategy, the outcome should be much bigger than a nicer website."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {destination.map((item) => (
              <div key={item} className="rounded-2xl border border-stone-200 bg-[#fffdf9] p-5 text-sm leading-7 text-stone-700">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-orange-200 bg-[linear-gradient(135deg,#fff7ee,#f3e5d4)] p-8 shadow-[0_20px_60px_rgba(249,115,22,0.10)] md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700">Bottom line</p>
          <p className="mt-5 max-w-5xl text-2xl font-medium leading-10 text-stone-950 md:text-3xl md:leading-[1.5]">
            Sparq should not try to win by being louder about AI. It should win by being sharper about the specific problem it solves: helping enterprises move AI from experimentation into trusted production inside the workflows that matter most to business outcomes.
          </p>
        </section>
      </div>
    </main>
  );
}

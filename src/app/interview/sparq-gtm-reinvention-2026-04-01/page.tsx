import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sparq Thesis',
  description: 'A concise strategic thesis for how Sparq can sharpen its GTM around the shift from hiring roles to designing workflows.',
};

const thesis = `The old way of scaling a company was headcount-first because output was limited by human bandwidth. Leaders were always asking the same question: who is the next hire that gives us the most leverage? That made sense in a world where most workflows were manual, fragmented, and dependent on people to move work across the business. The new way is workflow-first. The better question is which workflows drive the most important KPIs, which specific actions inside those workflows can be automated or improved with AI, what kinds of signal detection and pattern recognition AI can perform better than humans, and which workflows should be built next to create the most leverage. The goal is not automation for its own sake. It is to give strong people better systems so they can generate much more output with better control. The biggest AI shift over the next 12 to 24 months will not just be better models. It will be this change in management thinking, from adding headcount to building smarter operating systems. The companies that win will move their KPIs faster because their workflows are designed better. Sparq has a real opportunity to lead that conversation.`;

const oldVsNew = [
  {
    title: 'Old way: Find the next hire',
    body: 'When growth stalled or demand increased, leaders usually asked who they needed to hire next to create the most leverage. More capacity meant more people layered into the system.',
  },
  {
    title: 'New way: Find the next workflow',
    body: 'The better question is which workflow moves the KPI, which specific actions inside it can be improved with AI, and which workflow should be built next to create the most leverage.',
  },
  {
    title: 'Old way: Scale through human bandwidth',
    body: 'Output was constrained by how much work people could manually process, coordinate, route, review, and follow up on across the business.',
  },
  {
    title: 'New way: Scale through smarter operating systems',
    body: 'Output grows when AI handles the right actions, detects the right signals and patterns, and gives each strong operator better systems to direct and improve.',
  },
];

const marketChanges = [
  'Companies will increasingly stop asking how to make each individual role slightly more productive and start asking which workflows most directly move their core KPIs.',
  'This shifts investment away from shallow role-based assistants and toward workflow systems that improve cycle time, throughput, conversion, quality, margin, service levels, and speed of execution.',
  'The real AI advantage will come from getting more granular, identifying the specific actions inside a workflow that can be accelerated, automated, or improved with AI.',
  'Another major advantage will come from signal detection and pattern recognition. AI can surface patterns, anomalies, timing signals, and next-best actions across fragmented systems faster than humans can on their own.',
  'Once the right workflows are built, the role becomes more leveraged. One strong operator can supervise, direct, and continuously improve AI-powered workflows and generate far more output than the old model allowed.',
  'That is why some AI-native companies can run surprisingly lean. A useful signal is Anthropic, where public commentary has pointed to an extremely small marketing function relative to the scale of the company. The point is not the exact number. The point is that better workflows create disproportionate output.',
  'As AI moves into real workflows, governance, security, observability, and human control become more important because the stakes rise when AI is tied to live operations and KPI movement.',
];

const sparqPositioning = [
  'Sparq is well positioned because its brand already points toward the hard operational work inside enterprises, not surface-level productivity theater.',
  'Its wedge is helping customers identify the workflows most tied to growth, margin, throughput, uptime, and risk, then going one level deeper into the specific actions, signals, and decisions inside those workflows.',
  'That gives Sparq a stronger story than generic AI services. It is not just helping clients experiment with AI. It is helping them build smarter operating systems.',
  'Sparq can help customers determine what AI should detect, what AI should automate, what should remain human, and what workflow should be prioritized next for the highest leverage.',
  'The goal is not to replace people. It is to make each strong person far more effective by surrounding them with better workflows, better signals, and better control.',
  'In plain English, Sparq can help enterprises move from asking what role to hire next to asking what workflow to build next, so the business moves its KPIs faster with better outcomes.',
];

const questions = [
  'Which workflows drive the most important KPIs in the business today?',
  'What specific granular actions inside those workflows can be automated or improved with AI?',
  'What signals, patterns, anomalies, or next-best actions can AI detect better or faster than humans?',
  'Which workflows should be built next to create the highest leverage for the business and the people running it?',
  'How should success be measured so the conversation stays tied to KPI movement and better business outcomes, not generic AI efficiency claims?',
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
              The operating model of growth is shifting from headcount-first to workflow-first.
            </p>
          </div>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-stone-700">{thesis}</p>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-stone-200 bg-white/85 p-8 shadow-[0_12px_40px_rgba(120,53,15,0.05)]">
          <SectionHeader title="Old way versus new way" />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {oldVsNew.map((item) => (
              <div key={item.title} className="rounded-2xl border border-stone-200 bg-[#fffdf9] p-5">
                <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-3 text-base leading-8 text-stone-700">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[1.75rem] border border-stone-200 bg-white/85 p-8 shadow-[0_12px_40px_rgba(120,53,15,0.05)]">
          <SectionHeader title="How the market is changing over the next 12 to 24 months" />
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

        <section className="mt-10 rounded-[1.75rem] border border-orange-200 bg-[#fff7ef] p-8 shadow-[0_12px_40px_rgba(249,115,22,0.08)]">
          <SectionHeader title="What happens to the role after the workflow is built" />
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-orange-100 bg-white/85 px-5 py-4 text-base leading-8 text-stone-700">
              The role becomes more leveraged, not less important. Once the workflow exists, the person in that role can direct, supervise, refine, and improve AI-powered execution instead of manually carrying every step themselves.
            </div>
            <div className="rounded-2xl border border-orange-100 bg-white/85 px-5 py-4 text-base leading-8 text-stone-700">
              That means one strong operator can often produce much more output, manage more surface area, and make better decisions because the surrounding system is doing more of the repetitive, fragmented, and low-leverage work.
            </div>
            <div className="rounded-2xl border border-orange-100 bg-white/85 px-5 py-4 text-base leading-8 text-stone-700">
              A useful signal is Anthropic, where public commentary has pointed to an extremely lean marketing function relative to the scale of the company. Whether that specific ratio holds over time is less important than the principle: once workflows are designed well, a small number of strong people can create disproportionate output.
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

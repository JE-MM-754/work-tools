import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sparq Thesis',
  description: 'A concise strategic thesis for how Sparq can sharpen its GTM around the shift from hiring roles to designing workflows.',
};

const thesis = `The old way of growing a company is role-based. Leaders ask, what kind of role do we need to hire next? The new way is workflow-based. Leaders ask, what workflows do we need to build, redesign, and automate to create the highest-leverage output? Over the next 12 to 24 months, the most important AI shift will not just be better models. It will be this change in management thinking, from adding headcount to building smarter operating systems. Sparq has a real opportunity to own that message.`;

const oldVsNew = [
  {
    title: 'Old way: Hire for the role',
    body: 'Growth has traditionally meant adding people. Another SDR. Another analyst. Another coordinator. Another ops hire. The assumption is that more output comes from more headcount layered into the system.',
  },
  {
    title: 'New way: Design for the workflow',
    body: 'The better question is not who else should be added. It is which workflows matter most, where they break, and how they should be redesigned using AI, automation, and human judgment to create more output with better control.',
  },
  {
    title: 'Old way: Optimize the org chart',
    body: 'The focus stays on functions, roles, and reporting lines. That often increases cost faster than leverage and does not force enough thinking about how work actually moves.',
  },
  {
    title: 'New way: Optimize the operating system',
    body: 'The focus shifts to decisions, actions, handoffs, approvals, exception paths, and the places where work slows down. That is where AI can create real leverage.',
  },
];

const marketChanges = [
  'Companies will increasingly stop asking, how do we make each employee a little more productive, and start asking, which workflows drive the most important outcomes in the business?',
  'This means AI budgets will move away from shallow role-based assistants and toward systems that improve cycle time, throughput, conversion, quality, margin, service levels, and speed of execution.',
  'It also means workflow design will matter more than prompt design. The biggest gains will come from understanding how work flows across teams and systems, not from isolated AI features.',
  'As AI moves into real workflows, security, governance, observability, and human control become critical because the stakes are higher when AI touches live operations.',
  'The winners in AI services will be the firms that help enterprises make this shift in thinking, from headcount-first scaling to workflow-first scaling.',
];

const sparqPositioning = [
  'Sparq is well positioned because its brand already points toward the hard operational work inside enterprises, not surface-level productivity tools.',
  'Its wedge is helping customers identify the workflows most tied to growth, margin, throughput, uptime, and risk, then redesigning those workflows with AI and automation.',
  'That lets Sparq sell something much more strategic than AI experimentation. It can help customers build a smarter operating model.',
  'Sparq can guide customers through a clear motion: identify the workflow, break it into decisions and actions, find the friction, decide what should be automated or governed, deploy safely, and measure the business result.',
  'In plain English, Sparq can help enterprises move from asking what role to hire next to asking what workflow to build next.',
];

const questions = [
  'Where are companies still thinking about growth through headcount when they should be thinking through workflows?',
  'Which workflows in a customer environment matter most to revenue, margin, throughput, service, or risk?',
  'Inside those workflows, what decisions, actions, handoffs, and exceptions create the most friction or waste?',
  'What parts of those workflows should remain human, what parts should be AI-assisted, and what parts should be automated outright?',
  'How should success be measured at the workflow level so the conversation stays tied to real business outcomes instead of generic efficiency claims?',
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
            The old way is role-based. The new way is workflow-based.
          </h1>
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

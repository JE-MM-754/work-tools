import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sparq Interview Prep',
  description: 'Live-call prep for Jamie Erickson ahead of Sparq conversations with Derek Perry and Brian Carter.',
};

const topMessage = 'I can do the Senior Client Partner job, but the bigger value is helping Sparq modernize GTM for the AI agentic wave.';

const opener = [
  'I am excited by Sparq because the market is shifting from staffing work manually to redesigning workflows with AI.',
  'That creates a need for a different GTM motion, one built around workflow reinvention, agentic systems, and trusted execution.',
  'I can help grow strategic accounts, but I also think I can help Barry and the team sharpen that broader motion.'
];

const derek = {
  objective: 'Get Derek thinking: Jamie can help us shape GTM for AI, not just manage accounts.',
  push: [
    'workflow reinvention over headcount',
    'agentic systems tied to real business outcomes',
    'bridge field signal, solution design, and delivery confidence',
    'help Sparq define a stronger AI-native enterprise story',
  ],
  ask: [
    'Where does Sparq need the most GTM reinvention for the AI wave?',
    'Where do strategic deals get hardest today, executive alignment, solution shaping, or delivery confidence?',
    'If this hire were a force multiplier, where would you want them creating leverage beyond account ownership?',
  ],
};

const brian = {
  objective: 'Get Brian thinking: Jamie can help grow revenue in a way that is more repeatable and operationally sound.',
  push: [
    'quality of revenue, not just bookings',
    'repeatable GTM and cleaner qualification',
    'strategic accounts plus broader commercial leverage',
    'help leadership define a role with wider impact',
  ],
  ask: [
    'Where is the biggest opportunity to make the commercial motion more repeatable?',
    'What would make this hire a clear win in the first 6 to 12 months?',
    'How are you thinking about account ownership versus broader strategic leverage in this role?',
  ],
};

const proof = [
  'Built multi-agent GTM systems, not just talked about them',
  'Used AI workflows to improve top-of-funnel and create leverage',
  'Can explain agentic systems in commercial language buyers understand',
  'Strong at turning technical capability into buyer conviction',
];

const punchyAnswers = [
  {
    q: 'Why Sparq?',
    a: 'Because Sparq can win in the next wave of AI by helping enterprises redesign workflows, not just buy tools.',
  },
  {
    q: 'Why you?',
    a: 'Because I can sell, build credibility with technical teams, and help shape a more repeatable GTM motion around where the market is going.',
  },
  {
    q: 'What is bigger than the current role?',
    a: 'Helping Sparq refine how it positions, qualifies, and sells workflow-level AI transformation, not just managing strategic accounts one by one.',
  },
];

const reminders = [
  'Keep it practical, not theoretical.',
  'Do not sound title-driven.',
  'The frame is: I can do the role, and I can create more leverage than the normal version of this hire.',
  'Come back to workflow reinvention, repeatability, and AI-driven GTM evolution.',
];

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default function SparqInterviewPrepPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-5 py-8 md:px-8 lg:px-10">
        <div className="mb-6 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Live call prep</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">Sparq, Derek + Brian</h1>
          <p className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-3 text-lg font-medium leading-8 text-cyan-100">
            {topMessage}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Opening 30 seconds">
            <ul className="space-y-3 text-slate-300">
              {opener.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>

          <Card title="Your proof points">
            <ul className="space-y-3 text-slate-300">
              {proof.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card title="Derek, CTO">
            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Objective</p>
                <p className="mt-2 text-slate-200">{derek.objective}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Push these themes</p>
                <ul className="mt-2 space-y-2 text-slate-300">
                  {derek.push.map((item) => (
                    <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Best questions</p>
                <ul className="mt-2 space-y-2 text-slate-300">
                  {derek.ask.map((item) => (
                    <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          <Card title="Brian, COO">
            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Objective</p>
                <p className="mt-2 text-slate-200">{brian.objective}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Push these themes</p>
                <ul className="mt-2 space-y-2 text-slate-300">
                  {brian.push.map((item) => (
                    <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Best questions</p>
                <ul className="mt-2 space-y-2 text-slate-300">
                  {brian.ask.map((item) => (
                    <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card title="Punchy answers">
            <div className="space-y-4">
              {punchyAnswers.map((item) => (
                <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <h3 className="text-lg font-semibold text-cyan-300">{item.q}</h3>
                  <p className="mt-2 text-slate-300">{item.a}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Live reminders">
            <ul className="space-y-3 text-slate-300">
              {reminders.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </main>
  );
}

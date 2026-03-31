import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fiddler AI Interview Prep',
  description: 'Interview prep plan for Jamie Erickson ahead of his Fiddler AI interview sequence with Fahad, Nick, and Alex.',
};

const sequence = [
  'Wed 4/1, 1:30 to 2:00 PM ET, Executive Interview with Fahad',
  'Thu 4/2, 9:00 to 9:45 AM ET, Hiring Manager Screen with Nick',
  'Thu 4/2, 4:30 to 5:00 PM ET, Executive Interview with Alex',
];

const companySignals = [
  {
    title: 'Current wedge',
    body: 'Fiddler has evolved from explainability into observability, guardrails, governance, and now an AI control plane for enterprise agents. That is a sharper and bigger story than generic model monitoring.',
  },
  {
    title: 'Recent momentum',
    body: 'In January 2026, Fiddler announced a $30M Series C and said total funding reached $100M. The company also claims revenue grew more than 4x in the last 18 months, which signals real traction behind the category shift.',
  },
  {
    title: 'What they want buyers to believe',
    body: 'As AI agents become more autonomous, enterprises need visibility, context, and control. Fiddler is pitching itself as the operating layer that helps companies monitor, diagnose, govern, and intervene before costly failures happen.',
  },
  {
    title: 'Why enterprises care',
    body: 'The business case is not abstract AI trust. It is performance, risk reduction, compliance, auditability, and time-to-value for enterprise AI systems that are actually affecting revenue and operations.',
  },
  {
    title: 'Go-to-market clues',
    body: 'The pricing page shows a free entry point, a usage-based developer tier, and enterprise packaging. That suggests a blended motion across technical adoption, platform proof, and executive expansion.',
  },
  {
    title: 'Ecosystem credibility',
    body: 'Their partner surface includes AWS SageMaker, Google Cloud, NVIDIA, Databricks, Datadog, Domino, and Carahsoft. This is a serious enterprise ecosystem story, not a toy AI startup.',
  },
  {
    title: 'Your wedge',
    body: 'Your best angle is technical-commercial leadership. You can speak credibly to enterprise transformation, solution selling, SE partnership, and process rigor without pretending to be an ML researcher.',
  },
];

const interviewerReadouts = [
  {
    name: 'Fahad Rizqi',
    role: 'President',
    focus: [
      'Enterprise GTM builder with deep cybersecurity and infrastructure sales DNA',
      'Likely tests category timing, market maturity, and executive credibility',
      'Will care whether you can help create trust in an emerging category and build repeatable revenue motion',
    ],
  },
  {
    name: 'Nick Nolan',
    role: 'Solutions Engineering Manager',
    focus: [
      'SE leadership lens with implementation, process, privacy, and customer-facing technical delivery depth',
      'Likely tests discovery quality, technical communication, demo credibility, and partnership with solutions teams',
      'Will care whether you elevate the SE org or create chaos for it',
    ],
  },
  {
    name: 'Alex',
    role: 'Executive Interview',
    focus: [
      'Likely sales leadership or exec lens based on sequence and web clues',
      'Will likely care about field execution, value communication, and whether your technical-commercial hybrid profile fits the motion',
      'Profile still needs confirmation from Jamie because the folder did not include Alex clearly',
    ],
  },
];

const whyFiddler = [
  'This is not generic AI hype. Fiddler is attached to a painful enterprise need: if AI systems are driving decisions, teams need observability, control, and governance before those systems create reputational, operational, or regulatory damage.',
  'The category matters because enterprises are moving from model experiments to deployed agents and high-impact AI applications. That creates a real need for monitoring, intervention, and accountable operation.',
  'Fiddler is now explicitly trying to own the control plane layer, not only the observability layer. That is a stronger and more strategic story if they can execute it.',
  'The company also sits in a strong ecosystem position through partners like Databricks, Google Cloud, AWS, NVIDIA, and Datadog, which helps validate both the category and the buyer urgency.',
];

const likelyQuestions = [
  {
    q: 'Why Fiddler?',
    a: 'Because this is a real enterprise problem with urgency. Once AI systems start affecting revenue, operations, compliance, or customer experience, you cannot treat observability and governance as optional. Fiddler is building the control layer enterprises need as AI gets more autonomous, and that is a much more strategic wedge than a point feature story.',
  },
  {
    q: 'Why are you a fit here?',
    a: 'My edge is that I can operate at the intersection of product depth, technical customer conversations, and commercial execution. I have led sales and solution engineering, sold enterprise transformation, improved process rigor, and helped teams turn complexity into repeatable execution. That maps well to a category that needs both education and disciplined enterprise selling.',
  },
  {
    q: 'How would you sell this category?',
    a: 'Start with concrete business risk and operational value, not AI philosophy. Tie Fiddler to visibility, diagnosis, guardrails, compliance, and executive accountability. Then map the buying center across ML teams, platform teams, security, risk, and executives. This is a multi-threaded enterprise sale and the story has to travel across technical and business stakeholders.',
  },
  {
    q: 'How do you work with SE?',
    a: 'As a force multiplier, not a burden. Good enterprise motions win when discovery is crisp, roles are clear, demos are tied to buyer pain, and technical depth is used strategically. I respect SE and know how to build with that team, because I have lived in that world too.',
  },
];

const questionsByInterviewer = {
  Fahad: [
    'Where do you think the market is today, still heavy education, or are buyers now actively budgeting for observability, guardrails, and governance?',
    'What separates the deals you win fastest from the ones that stall?',
    'What does the next stage of GTM maturity need most, pipeline creation, sharper messaging, better technical proof, or tighter execution?',
  ],
  Nick: [
    'What does great partnership between sales and SE look like at Fiddler today?',
    'Where do technical evaluations usually get stuck, instrumentation, data access, stakeholder alignment, or proving ROI?',
    'If someone joined this team and made your life easier in 60 days, what would they actually be doing?',
  ],
  Alex: [
    'How are you thinking about scaling field execution as the category shifts from explainability toward control plane and agentic observability?',
    'What traits do your best customer-facing people share today?',
    'What would make you confident in the first 90 days that this was the right hire?',
  ],
};

const storyPlan = [
  {
    title: 'Story 1: Enterprise AI transformation sale',
    body: 'Use a story that shows you can sell technical transformation to executive stakeholders with business clarity, not just feature enthusiasm.',
  },
  {
    title: 'Story 2: Win-rate or process improvement',
    body: 'Use the MEDDPICC and operating rigor story to show you are not only a seller, you are a builder of repeatable execution.',
  },
  {
    title: 'Story 3: Sales + SE hybrid credibility',
    body: 'Use a story that shows you can bridge commercial and technical teams without creating friction, especially in complex buyer environments.',
  },
];

const redFlags = [
  'Do not oversell yourself as a pure AI infrastructure expert if you cannot back it up technically.',
  'Do not make this only about model monitoring. Their story is broader now.',
  'Do not talk about Fiddler like it is still only explainability or classic MLOps monitoring. The recent control plane repositioning matters.',
  'Do not use vague AI buzzwords. Stay tied to observability, guardrails, governance, and business impact.',
  'Do not sound like a seller who treats SE as demo support.',
  'Do not give the same answer to Fahad and Nick. They are looking for different things.',
];

export default function FiddlerInterviewPrepPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 lg:px-12">
        <div className="mb-10 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-8 shadow-2xl shadow-cyan-950/20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Interview prep</p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Fiddler AI interview sequence</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Three interviews across two days, with three different lenses. Your job is not to repeat one canned pitch.
            It is to show executive market judgment, SE partnership, and technical-commercial selling discipline.
          </p>
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold text-white">Sequence</h2>
          <ol className="mt-4 space-y-3 text-slate-300">
            {sequence.map((item, index) => (
              <li key={item} className="flex gap-3"><span className="mt-0.5 font-semibold text-cyan-300">{index + 1}.</span><span>{item}</span></li>
            ))}
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">Company signals to know cold</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {companySignals.map((signal) => (
              <div key={signal.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-lg font-semibold text-cyan-300">{signal.title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{signal.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-6">
          <h2 className="text-2xl font-semibold text-white">Best Why Fiddler framing</h2>
          <div className="mt-4 space-y-4">
            {whyFiddler.map((item) => (
              <p key={item} className="leading-7 text-slate-200">{item}</p>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-violet-500/20 bg-violet-950/20 p-6">
            <h2 className="text-2xl font-semibold text-white">Recent achievements to know</h2>
            <ul className="mt-4 space-y-3 text-slate-200">
              <li className="flex gap-3"><span className="mt-1 text-violet-300">•</span><span>Raised a $30M Series C in January 2026 and says total funding is now $100M.</span></li>
              <li className="flex gap-3"><span className="mt-1 text-violet-300">•</span><span>Claims revenue grew more than 4x in the last 18 months.</span></li>
              <li className="flex gap-3"><span className="mt-1 text-violet-300">•</span><span>Highlights rapid adoption in regulated industries like healthcare, financial services, insurance, and government.</span></li>
              <li className="flex gap-3"><span className="mt-1 text-violet-300">•</span><span>Mentions AWS Pattern Partner status and CB Insights recognition in AI Agent Security and Risk Management.</span></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-amber-500/20 bg-amber-950/20 p-6">
            <h2 className="text-2xl font-semibold text-white">Competitive frame</h2>
            <ul className="mt-4 space-y-3 text-slate-200">
              <li className="flex gap-3"><span className="mt-1 text-amber-300">•</span><span>Legacy or broader AI observability peers: Arize, WhyLabs, Arthur, TruEra, Aporia.</span></li>
              <li className="flex gap-3"><span className="mt-1 text-amber-300">•</span><span>LLM and agent observability tools: Langfuse, LangSmith, Braintrust, Galileo, Helicone, Maxim AI.</span></li>
              <li className="flex gap-3"><span className="mt-1 text-amber-300">•</span><span>Security and guardrails adjacent players: Patronus AI, Robust Intelligence, Lakera, Protect AI.</span></li>
              <li className="flex gap-3"><span className="mt-1 text-amber-300">•</span><span>Fiddler wants to win by being more enterprise, more unified, and more governance-first than fragmented point tools.</span></li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold text-white">Interviewer lenses</h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {interviewerReadouts.map((person) => (
              <div key={person.name} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-widest text-slate-500">{person.role}</p>
                <ul className="mt-4 space-y-3 text-slate-300">
                  {person.focus.map((item) => (
                    <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold text-white">Likely questions and answer direction</h2>
          <div className="mt-4 space-y-5">
            {likelyQuestions.map((item) => (
              <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <h3 className="text-lg font-semibold text-cyan-300">{item.q}</h3>
                <p className="mt-2 leading-7 text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold text-white">Ask Fahad</h2>
            <ol className="mt-4 space-y-3 text-slate-300">
              {questionsByInterviewer.Fahad.map((item, index) => (
                <li key={item} className="flex gap-3"><span className="mt-0.5 font-semibold text-cyan-300">{index + 1}.</span><span>{item}</span></li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold text-white">Ask Nick</h2>
            <ol className="mt-4 space-y-3 text-slate-300">
              {questionsByInterviewer.Nick.map((item, index) => (
                <li key={item} className="flex gap-3"><span className="mt-0.5 font-semibold text-emerald-300">{index + 1}.</span><span>{item}</span></li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold text-white">Ask Alex</h2>
            <ol className="mt-4 space-y-3 text-slate-300">
              {questionsByInterviewer.Alex.map((item, index) => (
                <li key={item} className="flex gap-3"><span className="mt-0.5 font-semibold text-violet-300">{index + 1}.</span><span>{item}</span></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold text-white">Three stories to rehearse</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {storyPlan.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <h3 className="text-lg font-semibold text-cyan-300">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-rose-500/20 bg-rose-950/20 p-6">
            <h2 className="text-2xl font-semibold text-white">Red flags</h2>
            <ul className="mt-4 space-y-3 text-slate-200">
              {redFlags.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-rose-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold text-white">Sequence strategy</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>With Fahad, emphasize market judgment, enterprise selling, and why the category matters now.</span></li>
              <li className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>With Nick, emphasize discovery quality, SE respect, technical translation, and implementation realism.</span></li>
              <li className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>With Alex, emphasize field execution, value communication, and how you fit a technical-commercial sales motion.</span></li>
              <li className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>Do not answer all three interviews the same way. Same core story, different angle.</span></li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

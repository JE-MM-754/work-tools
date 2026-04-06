import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sparq Interview Prep',
  description: 'Call prep for Jamie Erickson ahead of Sparq conversations with Derek Perry and Brian Carter.',
};

const sequence = [
  'Mon 4/6, Derek Perry, CTO',
  'Mon 4/6, Brian Carter, COO',
];

const northStar = [
  'Show that you can help sell, shape, and scale the enterprise motion.',
  'Make the Senior Client Partner role feel too narrow for the full value you can bring.',
  'Position yourself as a bridge across sales, delivery, solutions, and executive clients.',
  'Leave both leaders thinking you can create leverage beyond carrying a number.',
];

const openingPositioning = `I tend to be most valuable where enterprise growth depends on more than just selling. My background sits at the intersection of commercial leadership, technical credibility, and building more repeatable go-to-market systems. I can absolutely help drive strategic account growth, but I also tend to create leverage by tightening qualification, improving executive alignment, and helping teams make the enterprise motion more consistent.`;

const companyAngle = [
  'Sparq is compelling because it sits in a strong lane, helping enterprises execute digital and AI work with less risk and more delivery credibility.',
  'The real opportunity is not just winning more work, it is making the commercial motion sharper, more repeatable, and more trusted at the executive level.',
  'That is where Jamie can matter beyond a standard client partner role.'
];

const peoplePlans = [
  {
    id: 'derek',
    name: 'Derek Perry',
    title: 'CTO',
    goal: 'Make Derek see you as someone who can help drive enterprise growth while strengthening the bridge between field signal, solution design, and delivery reality.',
    tone: 'Commercially sharp, technically credible, builder-to-builder.',
    openingMove: 'Lead with the idea that your value is not just winning deals, it is helping organizations make the enterprise motion more repeatable across sales, solutions, and delivery.',
    whatHeLikelyCaresAbout: [
      'How well you understand complex client problems.',
      'Whether you can bridge commercial conversations and solution credibility.',
      'How you think about repeatability, not just hero selling.',
      'Whether you can help tighten the feedback loop between the field and the technical organization.',
    ],
    anglesToHit: [
      'You can help improve strategic deal quality, not just deal volume.',
      'You know how to translate buyer pain into solution-shaping conversations.',
      'You can help productize parts of the enterprise motion through better process and reusable patterns.',
      'You are strongest when the role includes both account growth and broader GTM leverage.',
    ],
    strongQuestions: [
      'As Sparq grows, where do you think the enterprise motion needs the most strengthening?',
      'Where do strategic opportunities tend to get hardest today, executive alignment, solution definition, or delivery confidence?',
      'If this hire were a real force multiplier, where would you want them creating leverage beyond just managing accounts?',
    ],
    risk: 'Do not sound like you are avoiding the core selling role. The frame is: I can do that, and more.',
  },
  {
    id: 'brian',
    name: 'Brian Carter',
    title: 'COO',
    goal: 'Make Brian believe you can help Sparq grow revenue in a way that is operationally sound, strategically useful, and repeatable.',
    tone: 'Operator-minded, practical, commercially mature.',
    openingMove: 'Lead with the idea that strong growth comes from better alignment between account strategy, delivery confidence, and repeatable execution.',
    whatHeLikelyCaresAbout: [
      'Whether you understand how growth and delivery have to reinforce each other.',
      'Whether you can help shape a role that drives revenue without creating operational mess.',
      'Whether you know how to build process and consistency in strategic accounts.',
      'Whether you can help leadership make better decisions about where to focus.',
    ],
    anglesToHit: [
      'You care about quality of revenue, not just bookings.',
      'You have built systems and process, not just closed business.',
      'You understand how to improve multi-threading, qualification, and executive deal strategy.',
      'You can help define a role that creates leverage across enterprise growth, not just individual account management.',
    ],
    strongQuestions: [
      'As you think about scaling Sparq, where is the biggest opportunity to make the commercial motion more repeatable?',
      'What would make this hire a clear win in the first 6 to 12 months?',
      'How are you thinking about the balance between account ownership, new growth, and broader strategic leverage in this role?',
    ],
    risk: 'Do not get too abstract. Brian will likely respond well to practical talk about execution, focus, and operating leverage.',
  },
];

const talkingPoints = [
  'I can drive strategic accounts, but I also help improve the system around how complex deals get won.',
  'My best work usually happens where sales, solutions, and delivery all need to stay tightly aligned.',
  'I am very comfortable in roles where the job is not just revenue, but making the enterprise motion more repeatable.',
  'I tend to create leverage by tightening qualification, improving executive alignment, and translating field signal into better decisions.',
  'I would want to be measured not just on account growth, but on whether I help the broader motion get stronger.'
];

const likelyQuestions = [
  'Why Sparq?',
  'Why this role?',
  'How do you think about strategic account growth?',
  'How do you work across sales, delivery, and leadership?',
  'What would you do beyond a standard client partner motion?',
  'How do you make enterprise growth more repeatable?',
];

const answers = [
  {
    q: 'Why Sparq?',
    a: 'Sparq looks compelling because it combines strong delivery credibility with a real opportunity to sharpen how enterprise opportunities are shaped and won. That is interesting to me because I am most valuable where commercial growth depends on trust, solution quality, and repeatable execution.',
  },
  {
    q: 'Why this role?',
    a: 'I can absolutely help in the client partner lane, but what makes this especially interesting is the chance to create broader leverage. I think I can help not only grow strategic accounts, but also strengthen the system around qualification, executive alignment, and enterprise deal execution.',
  },
  {
    q: 'What do you bring beyond a normal senior client partner?',
    a: 'I bring a mix of commercial leadership, technical fluency, and process-building. I do not just focus on winning business. I look at where the motion breaks, where deals lose momentum, and how to make the overall system more consistent and scalable.',
  },
  {
    q: 'How do you work with technical and delivery leaders?',
    a: 'I try to create clarity early by aligning buyer pain, solution direction, and delivery confidence. The goal is not just to sell something, it is to sell the right thing in a way the organization can execute well and expand from later.',
  },
];

const finalReminders = [
  'Do not sell yourself into a smaller box than necessary.',
  'Keep returning to repeatability, strategic leverage, and cross-functional value.',
  'Make both conversations feel grounded and practical, not title-driven.',
  'Your frame is: I can do the role, and I can help shape something broader.',
  'Listen for signals on scope, urgency, and how they describe success.'
];

export default function SparqInterviewPrepPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 lg:px-12">
        <div className="mb-10 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-8 shadow-2xl shadow-cyan-950/20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Interview prep</p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Sparq, Derek + Brian prep</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            The goal is not to fit neatly into Senior Client Partner. The goal is to make both leaders see broader leverage.
          </p>
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold text-white">Today&apos;s conversations</h2>
          <ol className="mt-4 space-y-3 text-slate-300">
            {sequence.map((item, index) => (
              <li key={item} className="flex gap-3"><span className="mt-0.5 font-semibold text-cyan-300">{index + 1}.</span><span>{item}</span></li>
            ))}
          </ol>
        </section>

        <section className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-6">
          <h2 className="text-2xl font-semibold text-white">North star</h2>
          <ol className="mt-4 space-y-3 text-slate-200">
            {northStar.map((item, index) => (
              <li key={item} className="flex gap-3"><span className="mt-0.5 font-semibold text-emerald-300">{index + 1}.</span><span>{item}</span></li>
            ))}
          </ol>
        </section>

        <section className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-950/20 p-6">
          <h2 className="text-2xl font-semibold text-white">Opening positioning</h2>
          <p className="mt-4 leading-7 text-slate-200">{openingPositioning}</p>
        </section>

        <section className="mt-10 rounded-2xl border border-violet-500/20 bg-violet-950/20 p-6">
          <h2 className="text-2xl font-semibold text-white">How to frame Sparq</h2>
          <div className="mt-4 space-y-4">
            {companyAngle.map((item) => (
              <p key={item} className="leading-7 text-slate-200">{item}</p>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold text-white">Conversation focus</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {peoplePlans.map((person) => (
              <a
                key={person.id}
                href={`#${person.id}`}
                className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
              >
                {person.name} · {person.title}
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10 space-y-6">
          {peoplePlans.map((person) => (
            <section key={person.id} id={person.id} className="scroll-mt-24 rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-2xl font-semibold text-white">{person.name}</h2>
              <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">{person.title}</p>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                  <h3 className="text-lg font-semibold text-cyan-300">Main goal</h3>
                  <p className="mt-2 leading-7 text-slate-200">{person.goal}</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                  <h3 className="text-lg font-semibold text-cyan-300">Tone</h3>
                  <p className="mt-2 leading-7 text-slate-200">{person.tone}</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                  <h3 className="text-lg font-semibold text-cyan-300">Opening move</h3>
                  <p className="mt-2 leading-7 text-slate-200">{person.openingMove}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300">What they likely care about</h3>
                  <ul className="mt-3 space-y-3 text-slate-300">
                    {person.whatHeLikelyCaresAbout.map((item) => (
                      <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300">Angles to hit</h3>
                  <ul className="mt-3 space-y-3 text-slate-300">
                    {person.anglesToHit.map((item) => (
                      <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300">Best questions to ask</h3>
                  <ol className="mt-3 space-y-3 text-slate-300">
                    {person.strongQuestions.map((item, index) => (
                      <li key={item} className="flex gap-3"><span className="mt-0.5 font-semibold text-cyan-300">{index + 1}.</span><span>{item}</span></li>
                    ))}
                  </ol>
                </div>
                <div className="rounded-2xl border border-rose-500/20 bg-rose-950/20 p-5">
                  <h3 className="text-lg font-semibold text-white">Risk to avoid</h3>
                  <p className="mt-2 leading-7 text-slate-200">{person.risk}</p>
                </div>
              </div>
            </section>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold text-white">Core talk track</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {talkingPoints.map((item) => (
              <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
            ))}
          </ul>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold text-white">Likely questions</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              {likelyQuestions.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold text-white">Short answers in your voice</h2>
            <div className="mt-4 space-y-4">
              {answers.map((item) => (
                <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <h3 className="text-lg font-semibold text-cyan-300">{item.q}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-950/20 p-6">
          <h2 className="text-2xl font-semibold text-white">Final reminders</h2>
          <ol className="mt-4 space-y-3 text-slate-200">
            {finalReminders.map((item, index) => (
              <li key={item} className="flex gap-3"><span className="mt-0.5 font-semibold text-cyan-300">{index + 1}.</span><span>{item}</span></li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}

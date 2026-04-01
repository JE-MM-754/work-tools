import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fiddler AI Interview Prep',
  description: 'SE-first interview prep plan for Jamie Erickson ahead of his Fiddler AI interview sequence.',
};

const sequence = [
  'Wed 4/1, 1:30 to 2:00 PM ET, Executive Interview with Fahad',
  'Thu 4/2, 9:00 to 9:45 AM ET, SE: Hiring Manager Screen with Nick Nolan',
  'Thu 4/2, 4:30 to 5:00 PM ET, Executive Interview with Alex',
];

const northStar = [
  'Lead as a killer SE, not as a sales leader trying to force a title match.',
  'Show that you can turn technical proof into buyer conviction.',
  'Make them trust your discovery, demo judgment, and technical-commercial credibility.',
  'Keep the conversation tied to customer pain, business impact, and how deals move forward.',
];

const openingPositioning = `I’ve spent the last several years working at the intersection of solution engineering, enterprise sales, and AI. My edge is that I can get technical enough to earn trust with serious buyers, but I’m also focused on how that technical work connects to business value, deal momentum, and adoption. At Unsupervised I helped improve win rates, support complex AI deals, and build more repeatable technical-sales motions.`;

const whyFiddler = [
  `What I’m seeing right now is a lot of AI agents and AI applications getting stuck between prototype and production. The next 12 to 24 months are the market window for companies that can help enterprises move into production with trust, governance, and real confidence. That’s why Fiddler is compelling to me.`,
  `If AI is actually going into production, observability and governance stop being nice-to-have and become buying criteria. That means the SE role matters a lot.`,
  `You need someone who can earn technical credibility quickly, uncover what the buyer actually needs to believe, and then turn technical proof into buyer conviction.`,
];

const fiveAnswers = [
  {
    q: 'Why Fiddler?',
    a: 'A lot of AI agents are still stuck in development, and the next 12 to 24 months are the market window to help enterprises move into production safely. That makes Fiddler compelling because trust, governance, and observability become real buying criteria.',
  },
  {
    q: 'Why are you a fit here?',
    a: 'My background matters here because I know how to earn technical credibility, run sharp discovery, and connect the product to what the buyer actually needs to believe. You need someone who can turn technical proof into buyer conviction.',
  },
  {
    q: 'What makes a great SE?',
    a: 'A great SE makes complex buying decisions feel clear. They run surgical discovery, uncover the real evaluation criteria early, and shape the technical story around the customer’s specific pain instead of giving a generic feature tour.',
  },
  {
    q: 'What makes a great demo?',
    a: 'A great demo is earned through discovery. Ask the right questions first, uncover MEDDPICC early, then shape the story to the customer’s world. The goal is not to show more features. The goal is to get the customer talking, create clarity, and leave the AE with better qualification.',
  },
  {
    q: 'How do you work with AEs?',
    a: 'The best AE-SE partnership is tight on discovery, honest on qualification, and aligned on what the customer actually needs to believe to move forward. I want the customer leaving with confidence, and the AE leaving with more signal.',
  },
];

const demoFramework = [
  'Ask surgical questions up front to earn the right to tailor the demo.',
  'Uncover MEDDPICC criteria early, especially pain, decision criteria, and evaluation process.',
  'Shape the story around the customer’s exact world instead of giving a feature tour.',
  'Pause often and get the customer talking more than you are talking.',
  'Use silence well so the AE can probe and gather more qualification signal.',
  'Leave the customer feeling understood and helped, and leave the AE with better deal clarity.',
];

const strongestStories = [
  {
    title: 'Story 1: Win-rate improvement',
    body: 'Rebuilt qualification and POC frameworks, improved win rates from 16% to 43%, and made technical proof more aligned to customer decision criteria.',
  },
  {
    title: 'Story 2: Top-five global banks',
    body: 'Won approval to deploy LLMs at two top-five global banks through strong technical credibility, risk handling, and disciplined enterprise process.',
  },
  {
    title: 'Story 3: $1.5M F50 expansion',
    body: 'Helped support a strategic expansion by tying solution scope, ROI, and delivery plans to customer outcomes and executive priorities.',
  },
  {
    title: 'Story 4: AI workflow leverage',
    body: 'Built a multi-agent AI GTM stack that improved top-of-funnel 38%, which shows you understand both AI systems and how to create commercial leverage.',
  },
];

const likelyQuestions = [
  'How technical are you really?',
  'Why move into an SE-centric role now?',
  'How do you approach complex AI sales cycles?',
  'What does great discovery look like?',
  'How do you handle demos, POVs, and technical validation?',
  'What does a strong AE-SE partnership look like?',
];

const strongQuestionsToAsk = [
  'What usually makes a strong SE at Fiddler stand out quickly?',
  'Where do deals get hardest today, technical trust, business justification, or internal customer alignment?',
  'What does the best discovery look like in this role?',
  'How much of the SE motion is demo-driven versus architecture and evaluation-driven?',
  'What would make this hire a clear win in the first 6 months?',
];

const toneRules = [
  'Be technical, calm, and commercially sharp.',
  'Do not sound title-defensive.',
  'Do not try to be the smartest AI infra person in the room.',
  'Sound like someone who helps customers make clear decisions.',
  'Tie answers back to trust, value, and how deals move forward.',
];

const finalCram = [
  'Say your opening out loud twice.',
  'Review the 5 short answers.',
  'Review the 4 stories.',
  'Memorize: You need someone who can turn technical proof into buyer conviction.',
  'Pick 3 questions to ask and stop cramming.',
];

export default function FiddlerInterviewPrepPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 lg:px-12">
        <div className="mb-10 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-8 shadow-2xl shadow-cyan-950/20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Interview prep</p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Fiddler AI, SE-first prep</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            This is not product trivia prep. This is customer-facing SE prep. Lead with discovery, technical credibility,
            demo judgment, and your ability to turn technical proof into buyer conviction.
          </p>
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold text-white">Interview sequence</h2>
          <ol className="mt-4 space-y-3 text-slate-300">
            {sequence.map((item, index) => (
              <li key={item} className="flex gap-3"><span className="mt-0.5 font-semibold text-cyan-300">{index + 1}.</span><span>{item}</span></li>
            ))}
          </ol>
        </section>

        <section className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-6">
          <h2 className="text-2xl font-semibold text-white">North star for every interview</h2>
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
          <h2 className="text-2xl font-semibold text-white">Why Fiddler</h2>
          <div className="mt-4 space-y-4">
            {whyFiddler.map((item) => (
              <p key={item} className="leading-7 text-slate-200">{item}</p>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold text-white">5 short answers in your voice</h2>
          <div className="mt-4 space-y-5">
            {fiveAnswers.map((item) => (
              <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <h3 className="text-lg font-semibold text-cyan-300">{item.q}</h3>
                <p className="mt-2 leading-7 text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold text-white">Great demo framework</h2>
            <ol className="mt-4 space-y-3 text-slate-300">
              {demoFramework.map((item, index) => (
                <li key={item} className="flex gap-3"><span className="mt-0.5 font-semibold text-cyan-300">{index + 1}.</span><span>{item}</span></li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold text-white">Likely questions today</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              {likelyQuestions.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold text-white">4 stories to have ready</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {strongestStories.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <h3 className="text-lg font-semibold text-cyan-300">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-amber-500/20 bg-amber-950/20 p-6">
            <h2 className="text-2xl font-semibold text-white">Questions to ask them</h2>
            <ol className="mt-4 space-y-3 text-slate-200">
              {strongQuestionsToAsk.map((item, index) => (
                <li key={item} className="flex gap-3"><span className="mt-0.5 font-semibold text-amber-300">{index + 1}.</span><span>{item}</span></li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-rose-500/20 bg-rose-950/20 p-6">
            <h2 className="text-2xl font-semibold text-white">Tone rules</h2>
            <ul className="mt-4 space-y-3 text-slate-200">
              {toneRules.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-rose-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-950/20 p-6">
          <h2 className="text-2xl font-semibold text-white">Last 10-minute cram plan</h2>
          <ol className="mt-4 space-y-3 text-slate-200">
            {finalCram.map((item, index) => (
              <li key={item} className="flex gap-3"><span className="mt-0.5 font-semibold text-cyan-300">{index + 1}.</span><span>{item}</span></li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}

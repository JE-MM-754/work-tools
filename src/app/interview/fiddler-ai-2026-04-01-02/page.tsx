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
  'Leave the customer feeling understood and helped, and the AE with better deal clarity.',
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

const interviewerPlans = [
  {
    id: 'fahad',
    name: 'Fahad',
    title: 'President',
    focus: 'Executive lens, category timing, market opportunity, why Fiddler matters now.',
    goal: 'Make Fahad believe you understand the market window, can speak credibly with enterprise buyers, and can help Fiddler turn a technical category into commercial urgency.',
    tone: 'Executive, sharp, calm, and category-aware. Less demo talk, more market and buyer judgment.',
    whatHeCaresAbout: [
      'Why this market matters now, not eventually.',
      'Whether Fiddler is selling into a real budget line or still a science project.',
      'Whether you can help enterprise buyers connect technical trust to business risk and ROI.',
      'Whether you understand how a young category gets won in the field.',
    ],
    openingMove: 'Lead with the market point of view. AI agents are still stuck between prototype and production, and the next 12 to 24 months are the market window to help enterprises move safely into production.',
    approach: [
      'Start at the market level, not with your resume bullets.',
      'Frame Fiddler as a company helping enterprises move from AI experimentation to trusted deployment.',
      'Talk about observability, governance, and control as buying criteria, not just technical nice-to-haves.',
      'Show that you understand enterprise buyers need trust, accountability, and explainable intervention before broad rollout.',
      'Use one or two strong stories to prove you know how to support complex AI sales and executive conversations.',
    ],
    strongestStories: [
      'Top-five global bank approval story for technical trust and risk handling.',
      '$1.5M F50 expansion story for executive business case and multi-stakeholder deal judgment.',
    ],
    likelyQuestions: [
      'Why Fiddler now?',
      'Why this category?',
      'How would you position Fiddler against a noisy AI tooling market?',
      'What makes you effective in technical enterprise sales?',
      'How do you think about moving new categories into budgeted projects?',
    ],
    greatAnswerShape: [
      'Start with market timing.',
      'Tie to enterprise pain and budget reality.',
      'Show your technical-commercial edge.',
      'End with why that matters specifically for Fiddler now.',
    ],
    risks: [
      'Sounding too generic on AI.',
      'Talking like a pure seller instead of someone who understands technical trust.',
      'Getting lost in product details instead of the business case.',
    ],
    keyLine: 'You need someone who can turn technical proof into buyer conviction.',
    bestQuestion: 'Where do you think the market is right now, still education-heavy, or have buyers started actively budgeting for observability, guardrails, and governance?',
  },
  {
    id: 'nick',
    name: 'Nick',
    title: 'SE Hiring Manager',
    focus: 'How you think as an SE, how you run discovery, demo judgment, collaboration, and startup readiness.',
    goal: 'Make Nick believe you are a real SE operator who understands discovery, demos, qualification, and how to work tightly with AEs and technical buyers.',
    tone: 'Practical, detailed, thoughtful, and collaborative. Less executive theory, more how you actually work.',
    whatHeCaresAbout: [
      'How you run discovery.',
      'How you shape demos and POVs.',
      'Whether you understand qualification and MEDDPICC in a technical sales motion.',
      'Whether you are startup-ready, coachable, and strong cross-functionally.',
    ],
    openingMove: 'Lead as a strong SE with commercial range, not as a sales leader taking a detour. Make the whole conversation about customer clarity, technical credibility, and deal movement.',
    approach: [
      'Talk about discovery as the thing that earns the right to demo.',
      'Explain how a great SE uncovers decision criteria, pain, and evaluation process early.',
      'Talk about demos as tailored story-shaping, not feature tours.',
      'Show that you understand how to help the AE leave with more qualification signal, not just a happy customer.',
      'Use real stories where technical-sales process improvement changed outcomes.',
    ],
    strongestStories: [
      'Win-rate improvement from 16% to 43% via stronger qualification and POCs.',
      'Top-five banks story for technical trust and enterprise scrutiny.',
      'AI workflow leverage story to show you understand AI systems and process leverage.',
    ],
    likelyQuestions: [
      'How technical are you really?',
      'What makes a great SE?',
      'What makes a great demo?',
      'How do you work with AEs?',
      'How do you run discovery?',
      'How do you handle a customer who wants to jump straight into a demo?',
      'What does good qualification look like in a technical sale?',
    ],
    greatAnswerShape: [
      'Start with the customer problem.',
      'Explain your process clearly.',
      'Tie it to qualification and deal progression.',
      'Show you know how to balance technical depth with commercial value.',
    ],
    risks: [
      'Sounding like a VP trying to force relevance.',
      'Being too abstract and not concrete enough on your SE craft.',
      'Sounding like demos are performance instead of discovery tools.',
    ],
    keyLine: 'A great SE makes complex buying decisions feel clear.',
    bestQuestion: 'What usually makes a strong SE at Fiddler stand out quickly?',
  },
  {
    id: 'alex',
    name: 'Alex',
    title: 'Executive Interview',
    focus: 'Field fit, team fit, execution quality, and how your technical-commercial profile helps the broader motion.',
    goal: 'Make Alex believe you will help the field get more signal, more clarity, and more technical-commercial leverage in hard deals.',
    tone: 'Balanced, commercially sharp, and grounded in field execution. Somewhere between Fahad and Nick.',
    whatHeCaresAbout: [
      'How you improve field execution.',
      'How you work with AEs and the broader go-to-market motion.',
      'Whether your profile helps the team win better, faster, and more consistently.',
      'Whether you understand the difference between activity and real qualification.',
    ],
    openingMove: 'Position yourself as someone who helps customer-facing teams make better decisions in complex deals by combining technical credibility, qualification discipline, and better proof.',
    approach: [
      'Emphasize the AE-SE partnership and how you create leverage for the field.',
      'Talk about qualification signal, not just technical explanation.',
      'Use the demo framework to show how you help the customer and the AE at the same time.',
      'Speak to consistency, process, and repeatability, not just one-off heroics.',
      'Show that your technical-commercial range helps move hard deals forward with more confidence.',
    ],
    strongestStories: [
      'Win-rate improvement story for field leverage.',
      '$1.5M F50 expansion for complex deal support and executive alignment.',
      'Partner-led product and services motions for cross-functional selling and expansion.',
    ],
    likelyQuestions: [
      'How do you think about AE-SE partnership?',
      'How do you help move deals forward?',
      'What does good qualification look like to you?',
      'What would you bring to this team quickly?',
      'How do you balance technical detail with business clarity?',
    ],
    greatAnswerShape: [
      'Start with customer and field clarity.',
      'Show how you create signal for the AE and confidence for the buyer.',
      'Tie back to process, discipline, and repeatability.',
      'Land on how that helps the broader motion scale.',
    ],
    risks: [
      'Talking too much like Fahad and not enough like a field operator.',
      'Over-indexing on market theory instead of execution.',
      'Missing the partnership and qualification angle.',
    ],
    keyLine: 'The best AE-SE partnership is tight on discovery, honest on qualification, and aligned on what the buyer needs to believe.',
    bestQuestion: 'What traits do your best customer-facing people share today?',
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

const nextRoundPlans = [
  {
    title: 'Tomorrow morning, AE panel with Alex + AEs',
    objective: 'Show that you make AEs better. They should leave thinking you improve discovery, qualification, technical storytelling, and deal movement.',
    tone: 'Collaborative, field-oriented, sharp, and practical. Less theory, more what helps the field win.',
    whatToEmphasize: [
      'You help earn the right to demo through strong discovery.',
      'You use technical conversations to create qualification signal, not just customer excitement.',
      'You understand MEDDPICC and how to uncover decision criteria, pain, and process early.',
      'You care about whether the AE leaves with a more qualified, more actionable opportunity.',
      'You know how to speak in the customer’s language instead of giving a harbor-cruise demo.',
    ],
    likelyQuestions: [
      'What makes a strong AE-SE partnership?',
      'How do you decide when a deal is actually qualified?',
      'What do you do when an AE wants to jump too fast to demo?',
      'How do you help move technical deals forward?',
      'What do you want AEs to know about working with you?',
    ],
    strongestStories: [
      'Win-rate improvement from 16% to 43% through stronger qualification and POCs.',
      'F50 expansion story to show business-value alignment and deal support.',
      'Partner-led product and services motion to show cross-functional selling and expansion leverage.',
    ],
    keyMessage: 'I make the field motion sharper by turning technical work into deal signal, customer clarity, and stronger qualification.',
  },
  {
    title: 'Tomorrow afternoon, SE panel with the team',
    objective: 'Show that you are actually one of them. They should leave thinking you are credible, low-ego, customer-facing, and strong enough technically to win trust fast.',
    tone: 'Technical, calm, thoughtful, and low-ego. More peer-level and operator-level than executive-level.',
    whatToEmphasize: [
      'A great SE makes complex buying decisions feel clear.',
      'Discovery earns the right to demo.',
      'Demos should be shaped to the customer’s world, not driven by a feature tour.',
      'A strong SE balances technical credibility with business clarity.',
      'The customer should leave with confidence, and the internal team should leave with more signal.',
    ],
    likelyQuestions: [
      'How technical are you really?',
      'What makes a great SE?',
      'What makes a great demo?',
      'How do you handle skeptical technical buyers?',
      'How do you balance technical depth with customer clarity?',
    ],
    strongestStories: [
      'Top-five global banks story for technical trust, governance, and scrutiny.',
      'Win-rate improvement story for discovery, demos, and repeatability.',
      'AI workflow leverage story to show you understand systems and how to create operational leverage.',
    ],
    keyMessage: 'I turn technical proof into buyer conviction while keeping the customer, the AE, and the technical team aligned on what matters.',
  },
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

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold text-white">Click into each interview</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {interviewerPlans.map((person) => (
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

        <section className="mt-10 rounded-2xl border border-violet-500/20 bg-violet-950/20 p-6">
          <h2 className="text-2xl font-semibold text-white">Why Fiddler</h2>
          <div className="mt-4 space-y-4">
            {whyFiddler.map((item) => (
              <p key={item} className="leading-7 text-slate-200">{item}</p>
            ))}
          </div>
        </section>

        <section className="mt-10 space-y-6">
          {interviewerPlans.map((person) => (
            <section
              key={person.id}
              id={person.id}
              className="scroll-mt-24 rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h2 className="text-2xl font-semibold text-white">Full call plan, {person.name}</h2>
              <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">{person.title}</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
                  <h3 className="text-lg font-semibold text-cyan-300">What this person likely cares about</h3>
                  <ul className="mt-3 space-y-3 text-slate-300">
                    {person.whatHeCaresAbout.map((item) => (
                      <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300">How to approach the conversation</h3>
                  <ol className="mt-3 space-y-3 text-slate-300">
                    {person.approach.map((item, index) => (
                      <li key={item} className="flex gap-3"><span className="mt-0.5 font-semibold text-cyan-300">{index + 1}.</span><span>{item}</span></li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300">Best stories to use</h3>
                  <ul className="mt-3 space-y-3 text-slate-300">
                    {person.strongestStories.map((item) => (
                      <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300">Likely questions</h3>
                  <ul className="mt-3 space-y-3 text-slate-300">
                    {person.likelyQuestions.map((item) => (
                      <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr]">
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                  <h3 className="text-lg font-semibold text-cyan-300">How to structure your answers</h3>
                  <ol className="mt-3 space-y-3 text-slate-300">
                    {person.greatAnswerShape.map((item, index) => (
                      <li key={item} className="flex gap-3"><span className="mt-0.5 font-semibold text-cyan-300">{index + 1}.</span><span>{item}</span></li>
                    ))}
                  </ol>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                  <h3 className="text-lg font-semibold text-cyan-300">Key line</h3>
                  <p className="mt-2 leading-7 text-slate-200">{person.keyLine}</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                  <h3 className="text-lg font-semibold text-cyan-300">Best question to ask</h3>
                  <p className="mt-2 leading-7 text-slate-200">{person.bestQuestion}</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-rose-500/20 bg-rose-950/20 p-5">
                <h3 className="text-lg font-semibold text-white">Biggest risks to avoid with {person.name}</h3>
                <ul className="mt-3 space-y-3 text-slate-200">
                  {person.risks.map((item) => (
                    <li key={item} className="flex gap-3"><span className="mt-1 text-rose-300">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
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
            <h2 className="text-2xl font-semibold text-white">Likely questions across the sequence</h2>
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

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold text-white">Next round game plans</h2>
          <div className="mt-5 space-y-6">
            {nextRoundPlans.map((plan) => (
              <div key={plan.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <h3 className="text-xl font-semibold text-cyan-300">{plan.title}</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                    <h4 className="font-semibold text-white">Objective</h4>
                    <p className="mt-2 leading-7 text-slate-300">{plan.objective}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                    <h4 className="font-semibold text-white">Tone</h4>
                    <p className="mt-2 leading-7 text-slate-300">{plan.tone}</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-6 lg:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-white">What to emphasize</h4>
                    <ul className="mt-3 space-y-3 text-slate-300">
                      {plan.whatToEmphasize.map((item) => (
                        <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Likely questions</h4>
                    <ul className="mt-3 space-y-3 text-slate-300">
                      {plan.likelyQuestions.map((item) => (
                        <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                  <div>
                    <h4 className="font-semibold text-white">Best stories to use</h4>
                    <ul className="mt-3 space-y-3 text-slate-300">
                      {plan.strongestStories.map((item) => (
                        <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-cyan-500/20 bg-cyan-950/20 p-4">
                    <h4 className="font-semibold text-white">Key message</h4>
                    <p className="mt-2 leading-7 text-slate-200">{plan.keyMessage}</p>
                  </div>
                </div>
              </div>
            ))}
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

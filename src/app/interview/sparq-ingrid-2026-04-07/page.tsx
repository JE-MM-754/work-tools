import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sparq Ingrid Prep',
  description: 'Prep for Jamie Erickson ahead of his conversation with Ingrid Curtis at Sparq.',
};

const topMessage = 'The goal is to make Ingrid see a high-leverage operator role that can sharpen Sparq’s AI-first GTM, not force-fit Jamie into a narrow box.';

const opener = [
  'What stood out to me from the conversations today is that Sparq has a real opportunity to sharpen how it goes to market in this AI-first era, not just by selling AI services, but by helping clients redesign important workflows and operating systems around outcomes.',
  'The value I can bring feels broader than a standard open role. I can help shape GTM systems, sharpen field playbooks, improve how winning language gets captured and reused, and support strategic deals directly.',
  'That is why I think the right structure may be something more flexible and high-leverage than trying to fit into a traditional box.'
];

const whatIngridLikelyCaresAbout = [
  'Can Jamie help create long-term value, not just fill a seat?',
  'Does he understand Sparq as an outcomes-focused consultancy, not just a services vendor?',
  'Can he strengthen GTM while still supporting real client growth and execution?',
  'Is there a clean way to use him without forcing a bad organizational fit?',
  'Will this make Sparq stronger for clients and for the internal team?',
];

const ingridSpecific = [
  'She has grown Sparq over more than 15 years and now leads it as CEO with a strong emphasis on outcomes, talent, and long-term value creation.',
  'She has lived multiple chapters of the company, client services, operations, president, now CEO, so she will care about leverage across the whole system, not just one function.',
  'She is likely to respond to practical ideas that improve growth, differentiation, team enablement, and client outcomes at the same time.',
  'She will probably care less about a perfect title and more about whether the arrangement makes Sparq stronger and more scalable.',
];

const operatorThesis = [
  'Redefine Sparq GTM to be AI first, workflow-first, and outcome-oriented.',
  'Build sharper playbooks for sales, solution consultants, and post-sales around customer archetypes and industry-specific pain points.',
  'Use AI agents to extract winning language from real calls and push it back into messaging, enablement, GTM assets, and marketing.',
  'Reduce GTM admin drag using AI for call prep, personalized call plans, MEDDPICC rigor, and forecasting hygiene.',
  'Help customers identify the highest-leverage AI workflows to implement, estimate ROI, break them into tasks, and move toward agentic operating models.',
  'Productize what works across industries so Sparq improves speed, margins, and repeatability across clients.',
];

const advisoryAngle = [
  'Do not pitch this as a fallback because the current openings are not perfect.',
  'Pitch it as a cleaner, faster, and higher-leverage way to work together around a real strategic need.',
  'Be explicit that advisory or consulting is the structure, not the limit of the work.',
  'Frame it as operational, not just strategic, designing GTM systems, sharpening messaging, supporting strategic deals, and acting as a fractional sales operator where useful.',
  'Say clearly that you can still operate on the team while helping define the system around it.',
  'The clean structure is a fractional GTM and AI advisory role with defined priorities, clear workstreams, and measurable value.',
  'If pricing comes up, a $10K/month retainer is the right anchor for a defined high-value scope.',
];

const likelyQuestions = [
  'What exactly would you do for us in this role or arrangement?',
  'Why is this better than hiring into one of our existing openings?',
  'How would you make this practical and measurable?',
  'How would you prioritize where to start?',
  'What would success look like in the first 90 days?',
];

const answerAngles = [
  'I would start where the current GTM motion has the most friction, where messaging is inconsistent, where solutioning is losing leverage, and where AI can immediately create repeatability.',
  'This is better than forcing an open role because the value is inherently cross-functional. The opportunity is to sharpen the system, not just fill a seat.',
  'I would keep it measurable by focusing on concrete outputs, playbooks, winning-language capture, GTM workflows, strategic deal support, and one or two repeatable workflow patterns.',
  'A strong first 90 days should create clearer messaging, better enablement, more disciplined GTM execution, and reusable workflow patterns that improve future client work.',
];

const questionsToAsk = [
  'As you think about Sparq’s next chapter as an AI-first consultancy, where do you feel the GTM motion needs the most reinvention?',
  'Where do you think Sparq has the biggest opportunity to differentiate commercially over the next 12 to 24 months?',
  'What would make an engagement like this feel obviously valuable to you in the first 90 days?',
  'If the goal is to create leverage across growth, client outcomes, and internal enablement, where would you want that to show up first?',
];

const close = [
  'The cleanest framing is that I can help in a way that is broader than the open roles and more immediately useful than forcing a narrow fit.',
  'If there is mutual interest, a fractional GTM and AI advisory or consulting structure gives Sparq a way to capture that value quickly.',
  'That structure is simply the vehicle. The work itself can still be operational, GTM systems, playbooks, strategic deal support, and even fractional selling where useful.',
  'That is what makes this a flexible high-leverage operator role, not just generic consulting hours.',
];

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function ExpandableSection({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <details className="rounded-2xl border border-slate-800 bg-slate-900 p-5" open>
      <summary className="cursor-pointer list-none">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
          </div>
          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
            Expand
          </span>
        </div>
      </summary>
      <div className="mt-5">{children}</div>
    </details>
  );
}

export default function SparqIngridPrepPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-5 py-8 md:px-8 lg:px-10">
        <div className="mb-6 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Live call prep</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">Sparq, Ingrid prep</h1>
          <p className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-3 text-lg font-medium leading-8 text-cyan-100">
            {topMessage}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Opening 60 seconds">
            <ul className="space-y-3 text-slate-300">
              {opener.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>

          <Card title="What Ingrid likely cares about">
            <ul className="space-y-3 text-slate-300">
              {whatIngridLikelyCaresAbout.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-6">
          <ExpandableSection title="Ingrid-specific read" subtitle="How to tune the conversation to her profile">
            <ul className="space-y-3 text-slate-300">
              {ingridSpecific.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </ExpandableSection>
        </div>

        <div className="mt-6">
          <Card title="Your operator thesis for Sparq">
            <ul className="space-y-3 text-slate-300">
              {operatorThesis.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card title="How to position the advisory idea">
            <ul className="space-y-3 text-slate-300">
              {advisoryAngle.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>

          <Card title="Likely questions">
            <ul className="space-y-3 text-slate-300">
              {likelyQuestions.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card title="Good answer angles">
            <ul className="space-y-3 text-slate-300">
              {answerAngles.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>

          <Card title="Great questions to ask Ingrid">
            <ul className="space-y-3 text-slate-300">
              {questionsToAsk.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-6">
          <Card title="How to close">
            <ul className="space-y-3 text-slate-300">
              {close.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </main>
  );
}

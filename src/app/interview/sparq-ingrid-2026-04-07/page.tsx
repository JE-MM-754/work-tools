import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sparq Ingrid Prep',
  description: 'Prep for Jamie Erickson ahead of his conversation with Ingrid Curtis at Sparq.',
};

const topMessage = 'The goal is to make Ingrid see a broader AI-first GTM advisory role, not force-fit Jamie into an open box.';

const opener = [
  'The biggest thing I took away from my conversations today is that Sparq has a real opportunity to lead the market in an AI-first GTM motion, not just by selling AI services, but by helping clients redesign important workflows and operational systems.',
  'What stood out to me is that the value I can bring is broader than a standard solutions or client partner role.',
  'I can help shape the GTM strategy, sharpen the field playbooks, operationalize winning language, and use AI systems to make the whole motion more repeatable and more effective.',
];

const whatIngridLikelyCaresAbout = [
  'Can Jamie create strategic leverage beyond a single role?',
  'Is there a realistic way to use him without forcing a bad full-time fit?',
  'Can he help the company get sharper, faster, and more differentiated?',
  'Does he think like an operator, not just a candidate?',
];

const operatorThesis = [
  'Redefine Sparq GTM to be AI first, workflow-first, and outcome-oriented.',
  'Build playbooks for sales, solution consultants, and post-sales around vertical archetypes and buyer problems.',
  'Use AI agents to extract winning language from calls and feed it back into messaging, playbooks, marketing, and enablement.',
  'Reduce GTM admin drag through AI support for call prep, personalized call plans, MEDDPICC rigor, and forecasting hygiene.',
  'Help customers workshop the highest-leverage AI workflows to implement, estimate ROI, break them into tasks, and build toward agentic solutions.',
  'Productize repeatable workflows by industry so Sparq improves margins, speed to implementation, and consistency across customers.',
];

const advisoryAngle = [
  'Do not pitch this as a fallback because a full-time role is messy.',
  'Pitch it as a high-leverage way to work together now around a strategic need that clearly exists.',
  'The clean framing is a fractional GTM and AI advisory role focused on strategy, playbooks, messaging, workflow packaging, and strategic deal support.',
  'If she engages, suggest a monthly retainer structure with clear scope and outcomes, not vague availability.',
  'Anchor at $10K/month if pricing comes up, tied to defined scope and measurable strategic value.',
];

const likelyQuestions = [
  'What exactly would you do for us in this kind of role?',
  'Why is this better than hiring into one of our current openings?',
  'How would you make this practical and not just strategic theory?',
  'How would you prioritize what to work on first?',
  'How would you define success in the first 90 days?',
];

const answerAngles = [
  'I would start by identifying where the current GTM motion breaks, where messaging is inconsistent, where sales and solutioning are losing leverage, and where AI can immediately create repeatability.',
  'This is broader than one open role because the value is cross-functional. The opportunity is to sharpen the system, not just fill a seat.',
  'I would keep it practical by focusing on a few immediate outputs, playbooks, winning-language extraction, AI-supported GTM workflows, and strategic customer workshop design.',
  'The first 90 days should create visible leverage, clearer messaging, better enablement, stronger forecasting rigor, and one or two repeatable workflow patterns that can be reused.',
];

const questionsToAsk = [
  'Where do you feel the current GTM motion has the most friction today?',
  'If Sparq were going to lead in this next AI wave, what would need to change about how the company positions and sells?',
  'Where do you think the greatest opportunity is to create more repeatability across sales, solutioning, and delivery?',
  'If we designed a focused advisory engagement around those priorities, what outcomes would feel most valuable to you in the first 90 days?',
];

const close = [
  'The cleanest way to land this is: I can help in a way that is broader than the open roles and more immediately useful than trying to force-fit me.',
  'If there is mutual interest, I would frame a fractional GTM and AI advisory engagement around a few clear priorities and workstreams.',
  'This should feel strategic, bounded, and useful, not like random consulting hours.',
];

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
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

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TrueFoundry Chris Merritt Prep',
  description: 'Live call prep for Jamie Erickson ahead of his conversation with Chris Merritt about TrueFoundry.',
};

const topMessage = 'This is an operator-to-operator conversation. Use it to pressure-test TrueFoundry, not to chase reassurance.';

const opener = [
  'I have spent a lot of time thinking about TrueFoundry and building a point of view on where it can win commercially.',
  'What I wanted to do in this conversation was pressure-test that thinking with someone who has actually built and scaled field organizations at a much larger level.',
  'The biggest thing I am trying to understand is what is real versus fragile as a company like this tries to scale beyond founder-led momentum.',
];

const whatChrisCaresAbout = [
  'Can the GTM motion scale beyond founder energy?',
  'Is there real repeatability, or just promising early traction?',
  'Does Jamie think like a serious field operator?',
  'Can Jamie separate signal from startup storytelling?',
  'What usually breaks between early traction and a real commercial engine?',
];

const yourPOV = [
  'TrueFoundry has strong technical credibility and real timing tailwinds.',
  'The next level of growth depends on better GTM discipline, playbooks, and repeatability.',
  'The opportunity is not just more selling. It is building a real commercial system.',
  'The role only makes sense if the company is ready to move from founder-led momentum toward a scalable field motion.',
];

const likelyQuestions = [
  'What do you think of the company?',
  'What would you do first if you joined?',
  'What do you see as the biggest GTM opportunity?',
  'How would you think about scaling from here?',
  'Why are you interested in this role?',
];

const answerAngles = [
  'I think the opportunity is real, but the question is whether the company is ready to translate technical strength into repeatable commercial execution.',
  'The first priorities would be packaging, qualification discipline, POC rigor, and reducing founder dependence in the field motion.',
  'The reason I have stayed engaged is that if this gets built correctly, it could become a very powerful commercial engine around a real technical product.',
  'I am not looking for a title exercise. I am trying to understand whether this is a real platform to build from.',
];

const bestQuestions = [
  'When you look at companies at this stage, what usually breaks first as they try to scale beyond founder-led momentum?',
  'What signals tell you a GTM motion is truly repeatable versus still fragile?',
  'From your perspective, what matters most in building the field around a technical product like this, packaging, enablement, talent profile, or qualification discipline?',
  'What would you want to see proven in the next 6 to 12 months to have real conviction in the growth path?',
  'When you think about someone stepping into a GTM leadership role here, what would make that person most likely to succeed?',
];

const doNotDo = [
  'Do not make it a reassurance call.',
  'Do not oversell yourself.',
  'Do not ask weak candidate questions.',
  'Do not sound like you have already mentally accepted the role.',
  'Use the call to get signal, not just approval.',
];

const close = [
  'This has been really helpful. I wanted to use this conversation to get a sharper read on how you think about the company and the role at this stage.',
  'I appreciate the candor. It is useful to hear from someone who has actually built at scale and knows what tends to break.',
  'I will reflect on this as I think through the opportunity more carefully.',
];

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default function TrueFoundryChrisPrepPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-5 py-8 md:px-8 lg:px-10">
        <div className="mb-6 rounded-3xl border border-violet-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950/30 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Live call prep</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">TrueFoundry, Chris Merritt</h1>
          <p className="mt-4 rounded-2xl border border-violet-400/20 bg-violet-500/10 px-4 py-3 text-lg font-medium leading-8 text-violet-100">
            {topMessage}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Opening 30 seconds">
            <ul className="space-y-3 text-slate-300">
              {opener.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-violet-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>

          <Card title="What Chris likely cares about">
            <ul className="space-y-3 text-slate-300">
              {whatChrisCaresAbout.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-violet-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card title="Your point of view">
            <ul className="space-y-3 text-slate-300">
              {yourPOV.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-violet-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>

          <Card title="Likely questions and answer angles">
            <div className="space-y-4">
              {likelyQuestions.map((item, index) => (
                <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                  <h3 className="text-lg font-semibold text-violet-300">{item}</h3>
                  <p className="mt-2 text-slate-300">{answerAngles[index]}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card title="Best questions to ask Chris">
            <ul className="space-y-3 text-slate-300">
              {bestQuestions.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-violet-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>

          <Card title="Do not do this">
            <ul className="space-y-3 text-slate-300">
              {doNotDo.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-violet-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-6">
          <Card title="Close the call like this">
            <ul className="space-y-3 text-slate-300">
              {close.map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-violet-300">•</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </main>
  );
}

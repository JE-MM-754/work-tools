'use client';

import { useState } from 'react';

export default function BarryCROPrepPage() {
  const [mode, setMode] = useState<'prep' | 'plan'>('prep');

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="mx-auto max-w-4xl px-5 py-8">

        {/* Header */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-1">Sparq &mdash; CRO / SVP Sales</p>
          <h1 className="text-3xl font-extrabold text-slate-900">Barry&apos;s PE &amp; Board Interview Prep</h1>
          <p className="mt-2 text-slate-500 text-sm">Final two conversations before the offer. Harvest Partners PE leader + Chairman of the Board.</p>
        </div>

        {/* Toggle */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setMode('prep')}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${mode === 'prep' ? 'bg-violet-600 text-white shadow' : 'bg-white border border-slate-300 text-slate-600 hover:border-violet-400'}`}
          >
            📚 Call Prep
          </button>
          <button
            onClick={() => setMode('plan')}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${mode === 'plan' ? 'bg-violet-600 text-white shadow' : 'bg-white border border-slate-300 text-slate-600 hover:border-violet-400'}`}
          >
            ⚡ Live Call Plan
          </button>
        </div>

        {/* CALL PREP MODE */}
        {mode === 'prep' && (
          <div className="space-y-8">

            {/* Opening thesis */}
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-extrabold text-violet-700 mb-3">How Barry Enters the Room</h2>
              <p className="text-slate-700 mb-3">
                Barry is not walking in as a candidate hoping to impress. He is walking in as a <strong>peer operator who has already diagnosed the business</strong> and wants to pressure-test his thesis with someone who knows it from the inside.
              </p>
              <div className="bg-violet-50 border-l-4 border-violet-500 rounded-r-xl px-4 py-3 mb-3">
                <p className="text-sm font-semibold text-violet-800 italic">&ldquo;I&rsquo;ve spent real time learning the business and I have a point of view on what&rsquo;s working and what needs to change. I&rsquo;d love to share that and get your honest reaction.&rdquo;</p>
              </div>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>✅ He is a <strong>carry-the-bag operator</strong> who loves being with customers and can activate a large network</li>
                <li>✅ He is also a <strong>systems thinker</strong> who can see how revenue, margin, hiring, and playbooks connect</li>
                <li>✅ PE firms want to know: <strong>is this the guy who thinks like we think?</strong> The answer is yes.</li>
              </ul>
            </section>

            {/* The diagnostic framework */}
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-extrabold text-violet-700 mb-3">The Diagnostic Framework: Supply vs Demand</h2>
              <p className="text-slate-600 text-sm mb-4">Lead with this when asked how you read a business. It shows operator credibility immediately.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <h3 className="font-bold text-amber-800 mb-2">Supply Constrained</h3>
                  <p className="text-sm text-amber-900">Delivery capacity is the bottleneck. If you 5x pipeline, the org breaks. Fix the throughput before accelerating demand.</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h3 className="font-bold text-blue-800 mb-2">Demand Constrained</h3>
                  <p className="text-sm text-blue-900">Top of funnel and conversion are the bottleneck. Not enough qualified pipeline. Fix the message, the playbook, and the archetype targeting.</p>
                </div>
              </div>
              <div className="mt-4 bg-slate-100 rounded-xl p-4">
                <p className="text-sm font-bold text-slate-800">Barry&apos;s read on Sparq:</p>
                <p className="text-sm text-slate-700 mt-1"><strong>Demand constrained.</strong> Pipeline is sparse and skewed toward staff augmentation deals that are hard to land and harder to expand. The delivery team is actually healthy (too many green accounts is a positive signal, not a problem). The bottleneck is differentiated messaging, a repeatable playbook, and the AI workflow productization needed to flip from commodity to transformational partner.</p>
              </div>
            </section>

            {/* Barry's Unsupervised story */}
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-extrabold text-violet-700 mb-3">If They Ask: Tell Me About Unsupervised</h2>
              <p className="text-slate-500 text-sm mb-4">Tell it as a 4-phase operator story. Each phase = identify friction, fix it, move to next.</p>

              <div className="space-y-4">
                <div className="border-l-4 border-violet-400 pl-4">
                  <p className="text-sm font-bold text-slate-800">Phase 1: Fix the leaky bucket first</p>
                  <p className="text-sm text-slate-600 mt-1">We were closing fast but churning hard. Root cause: the product required our own data scientists to operate. Customers couldn&rsquo;t self-serve or expand. I took that voice of the customer to engineering. Triggered a full product redesign.</p>
                  <p className="text-xs font-semibold text-violet-700 mt-1">&ldquo;I never let a supply problem get hidden behind strong top-of-funnel numbers.&rdquo;</p>
                </div>

                <div className="border-l-4 border-violet-400 pl-4">
                  <p className="text-sm font-bold text-slate-800">Phase 2: Compress the sales cycle friction</p>
                  <p className="text-sm text-slate-600 mt-1">POC duration fell from 8-10 months to 2 weeks. New bottleneck: infosec and data stack approvals. Built a cross-functional red team, created industry approval packets, submitted them at peak customer excitement. Forecasting got tight. Delivery team stayed ahead of it.</p>
                </div>

                <div className="border-l-4 border-violet-400 pl-4">
                  <p className="text-sm font-bold text-slate-800">Phase 3: Attack demand with signal</p>
                  <p className="text-sm text-slate-600 mt-1">Once supply was stable, went back into Salesforce and used an agentic tool to find signal: best roles, best industries, top pain points, top 3 use cases per vertical. Identified BFSI, healthcare payer, and telco as the highest-conviction verticals. Stopped spreading. Doubled down.</p>
                  <p className="text-xs font-semibold text-violet-700 mt-1">&ldquo;We used AI to find what was already working, then bet on it.&rdquo;</p>
                </div>

                <div className="border-l-4 border-violet-400 pl-4">
                  <p className="text-sm font-bold text-slate-800">Phase 4: Build the playbook machine</p>
                  <p className="text-sm text-slate-600 mt-1">Role-specific playbooks for AEs, SEs, CSMs. Weekly 30-min role-play on the hardest moments: how to open, how to pitch, how to run a business value assessment, how to objection handle, how to close. Built a BVA workshop to co-author ROI with customers on-site. Result: deals stopped getting lost to feature comparisons and started closing on outcomes.</p>
                  <p className="text-xs font-semibold text-violet-700 mt-1">&ldquo;We spoke how customers want to buy, not how salespeople want to sell.&rdquo;</p>
                </div>
              </div>

              <div className="mt-4 bg-violet-50 border border-violet-200 rounded-xl p-4">
                <p className="text-sm font-bold text-violet-800">The operator framework in one line:</p>
                <p className="text-sm text-violet-900 italic mt-1">&ldquo;Identify the next friction point. Extract signal with agentic tools. Call your bets. Execute. Iterate.&rdquo;</p>
              </div>
            </section>

            {/* Barry's Sparq read */}
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-extrabold text-violet-700 mb-3">Barry&apos;s Read on Sparq (Pressure-Test This With Them)</h2>
              <p className="text-slate-500 text-sm mb-4">Present this as a hypothesis, not a verdict. Invite them to poke holes.</p>

              <ul className="space-y-3 text-slate-700 text-sm">
                <li><strong>The pipeline is demand constrained.</strong> Sparse pipeline and staff augmentation skew are symptoms, not root causes. The root cause is that the message is not differentiated enough to capture Fortune 100 budget at scale.</li>
                <li><strong>The delivery team is actually an asset, not a problem.</strong> Too many green accounts means we have strong relationships we have not monetized. That is a demand generation asset waiting to be activated.</li>
                <li><strong>Staff augmentation is a race to the bottom.</strong> The path forward is transformational AI partnership positioning. When Sparq owns the agentic infrastructure, the governance layer, the guardrails, and the institutional knowledge, they become very hard to rip out.</li>
                <li><strong>The playbook is not repeatable yet.</strong> Winning messaging is not systematized. The fix is a coaching-forward culture with weekly role-play, role-specific scripts, and a business value assessment framework as the anchor of every deal.</li>
              </ul>

              <div className="mt-4 bg-slate-100 rounded-xl p-4">
                <p className="text-sm font-bold text-slate-800">How Barry says this:</p>
                <p className="text-sm text-slate-700 mt-1 italic">&ldquo;This is my early hypothesis based on the conversations I&rsquo;ve had. I could be wrong on some of it. What&rsquo;s your read?&rdquo;</p>
              </div>
            </section>

            {/* The Sparq transformation thesis */}
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-extrabold text-violet-700 mb-3">The Transformation Thesis</h2>
              <p className="text-slate-500 text-sm mb-4">This is the narrative that makes Barry sound like the right CRO for the AI-forward era.</p>

              <div className="bg-slate-900 text-white rounded-xl p-5 space-y-3 text-sm">
                <p><strong className="text-violet-300">Step 1:</strong> Use agentic tools to analyze the full CRM and identify ICP archetypes by industry, role, pain, and use case.</p>
                <p><strong className="text-violet-300">Step 2:</strong> Map current open pipeline to those archetypes and identify where the message is not landing.</p>
                <p><strong className="text-violet-300">Step 3:</strong> Build AI workflow packages tied to outcomes those archetypes care about. Lead with the business value assessment, not the product demo.</p>
                <p><strong className="text-violet-300">Step 4:</strong> Sell transformation. When Sparq manages the agentic security, the guardrails, the governance, and the institutional muscle memory of the account, they are impossible to rip out.</p>
                <p><strong className="text-violet-300">Step 5:</strong> Build the playbook machine: role-specific scripts, weekly coaching, BVA workshops. Make winning repeatable, not talent-dependent.</p>
              </div>

              <div className="mt-4 bg-violet-50 border border-violet-200 rounded-xl p-4">
                <p className="text-sm font-bold text-violet-800">The PE-resonant version:</p>
                <p className="text-sm text-violet-900 italic">&ldquo;The PE investment thesis only works if the GTM engine is repeatable. Right now it&rsquo;s not. I&rsquo;ve built repeatable GTM engines before. That&rsquo;s what I&rsquo;m here to do.&rdquo;</p>
              </div>
            </section>

            {/* Questions to ask */}
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-extrabold text-violet-700 mb-3">7 Best Questions to Ask</h2>
              <p className="text-slate-500 text-sm mb-4">Pick 4-5 based on where the conversation goes. Never ask all 7.</p>

              <ol className="space-y-4 text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="font-bold text-violet-600 min-w-[24px]">1.</span>
                  <div>
                    <p className="font-semibold">&ldquo;What does success look like for the business in the next 24 months from your perspective?&rdquo;</p>
                    <p className="text-slate-500 mt-1">Gets them to name the target. Lets Barry align everything he says to that target for the rest of the call.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-violet-600 min-w-[24px]">2.</span>
                  <div>
                    <p className="font-semibold">&ldquo;Where do you think the biggest commercial leverage point is right now?&rdquo;</p>
                    <p className="text-slate-500 mt-1">Forces them to diagnose the business themselves. Reveals alignment or gap with Barry&rsquo;s thesis.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-violet-600 min-w-[24px]">3.</span>
                  <div>
                    <p className="font-semibold">&ldquo;What has held the GTM back in the past from your vantage point?&rdquo;</p>
                    <p className="text-slate-500 mt-1">PE and board have seen the inside. This question gets real. It shows Barry is not afraid of the hard truth.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-violet-600 min-w-[24px]">4.</span>
                  <div>
                    <p className="font-semibold">&ldquo;What would give you the most confidence in the next CRO in the first 90 days?&rdquo;</p>
                    <p className="text-slate-500 mt-1">Makes them name what winning looks like. Barry can then validate or commit to exactly that.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-violet-600 min-w-[24px]">5.</span>
                  <div>
                    <p className="font-semibold">&ldquo;How do you think about the competitive differentiation as the market moves toward AI-first workflows?&rdquo;</p>
                    <p className="text-slate-500 mt-1">Opens the strategic conversation. This is where Barry&rsquo;s transformation thesis lands most naturally.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-violet-600 min-w-[24px]">6.</span>
                  <div>
                    <p className="font-semibold">&ldquo;What does the board most want to see proven in the next 12 to 18 months?&rdquo;</p>
                    <p className="text-slate-500 mt-1">Board-specific question. Shows Barry thinks at the governance level, not just the field level.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-violet-600 min-w-[24px]">7.</span>
                  <div>
                    <p className="font-semibold">&ldquo;Where do you think the company has the most untapped value right now?&rdquo;</p>
                    <p className="text-slate-500 mt-1">Gets them thinking about upside, not just problems. Often reveals where the PE firm is most excited.</p>
                  </div>
                </li>
              </ol>
            </section>

          </div>
        )}

        {/* LIVE CALL PLAN MODE */}
        {mode === 'plan' && (
          <div className="space-y-5">

            <div className="bg-violet-600 text-white rounded-2xl p-5">
              <h2 className="text-lg font-extrabold mb-1">Your Frame Walking In</h2>
              <p className="text-sm opacity-90">You are a peer operator who has already diagnosed the business. You are here to pressure-test your thesis, not to audition.</p>
              <p className="mt-3 text-sm font-semibold italic">&ldquo;I&rsquo;ve spent real time learning the business. I have a POV on what&rsquo;s working and what needs to change. I&rsquo;d love your honest reaction.&rdquo;</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <h2 className="text-base font-extrabold text-slate-800 mb-3">Opening Move</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✅ Thank them briefly. One line.</li>
                <li>✅ Set the frame: &ldquo;I want to share my read of the business and get your reaction.&rdquo;</li>
                <li>✅ Ask: <strong>&ldquo;What does success look like for the business in the next 24 months from your perspective?&rdquo;</strong></li>
                <li>✅ Listen fully. Take a mental note. Return to their answer at every inflection point.</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <h2 className="text-base font-extrabold text-slate-800 mb-3">If They Ask About Unsupervised</h2>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>📌 <strong>Phase 1:</strong> Supply constraint. Churn from non-self-serve product. Took VoC to engineering. Fixed the leak.</li>
                <li>📌 <strong>Phase 2:</strong> Infosec red team. Approval packets at peak excitement. POC from 9 months to 2 weeks.</li>
                <li>📌 <strong>Phase 3:</strong> Agentic signal extraction. Found BFSI, healthcare payer, telco. Stopped spreading. Doubled down.</li>
                <li>📌 <strong>Phase 4:</strong> Playbook machine. Weekly role-play. BVA workshops. Closed on outcomes, not features.</li>
                <li className="pt-1 italic text-violet-700 font-semibold text-xs">&ldquo;Identify the friction. Extract signal. Call your bets. Execute. Iterate.&rdquo;</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <h2 className="text-base font-extrabold text-slate-800 mb-2">Barry&apos;s Read on Sparq</h2>
              <p className="text-xs text-slate-500 mb-3">Present as hypothesis. Invite them to poke holes.</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>📌 <strong>Demand constrained.</strong> Thin pipeline, staff augmentation skew.</li>
                <li>📌 <strong>Delivery is strong.</strong> Too many green accounts = untapped expansion, not a problem.</li>
                <li>📌 <strong>Staff aug is a race to the bottom.</strong> The play is AI-first transformational partnerships.</li>
                <li>📌 <strong>Playbook is not repeatable yet.</strong> That is the first 90-day priority.</li>
              </ul>
              <p className="text-xs italic text-violet-700 font-semibold mt-3">&ldquo;This is my early hypothesis. Where am I wrong?&rdquo;</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <h2 className="text-base font-extrabold text-slate-800 mb-3">The Transformation Thesis (30 sec version)</h2>
              <p className="text-sm text-slate-700 italic">&ldquo;If we productize AI workflows tied to real outcomes, stop selling hours, and build a repeatable playbook machine, we flip the script from commodity to trusted AI operator. When Sparq is managing the agentic infrastructure and the guardrails inside an account, we become very hard to rip out. That&rsquo;s the PE thesis I&rsquo;m here to execute.&rdquo;</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <h2 className="text-base font-extrabold text-slate-800 mb-3">Questions to Fire</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>❓ <strong>&ldquo;What&rsquo;s the biggest commercial leverage point right now?&rdquo;</strong></li>
                <li>❓ <strong>&ldquo;What has held GTM back from your vantage point?&rdquo;</strong></li>
                <li>❓ <strong>&ldquo;What would give you the most confidence in the first 90 days?&rdquo;</strong></li>
                <li>❓ <strong>&ldquo;How do you see competitive differentiation as the market goes AI-first?&rdquo;</strong></li>
                <li>❓ <strong>&ldquo;Where does the board see the most untapped value?&rdquo;</strong></li>
              </ul>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-5">
              <h2 className="text-base font-extrabold mb-2">Close the Call Like This</h2>
              <p className="text-sm opacity-90">&ldquo;This conversation reinforced my conviction. I have built this system before. I know the friction points, I know the playbook, and I know how to bring this team with me. I&rsquo;m excited about what Sparq can become and I want to be the person who builds it.&rdquo;</p>
            </div>

          </div>
        )}

      </div>
    </main>
  );
}

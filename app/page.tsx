/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="min-h-screen">

      <header className="site-header sticky z-20 bg-cream/90 backdrop-blur border-b border-line/70">
        <div className="mx-auto max-w-6xl px-5 md:px-8 h-[72px] flex items-center justify-between gap-4">
          <a href="#top" className="min-w-0">
            <span className="block font-serif text-xl font-medium text-navy leading-tight">Nsikak Udoh</span>
            <span className="hidden sm:block text-xs text-muted">Technology operations for lean teams</span>
          </a>
          <nav className="flex items-center gap-6">
            <a href="#sprint" className="hidden md:inline text-sm font-medium text-body hover:text-green">The sprint</a>
            <a href="#proof" className="hidden md:inline text-sm font-medium text-body hover:text-green">Results</a>
            <a href="#how" className="hidden md:inline text-sm font-medium text-body hover:text-green">How it works</a>
            <a href="https://calendly.com/nsikak-impactflow/lets_connect" target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-lg bg-green text-cream text-sm font-medium px-4 py-2.5 hover:bg-green/90">Book a 20-minute call</a>
          </nav>
        </div>
      </header>

      <main id="top">

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 md:px-8 pt-14 md:pt-24 pb-16 md:pb-24 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full bg-greensoft text-green text-xs font-semibold px-3 py-1.5">For solo and small law firms</p>
            <h1 className="mt-6 font-serif font-medium text-navy text-[clamp(2.5rem,5.6vw,4.4rem)] leading-[1.04] tracking-[-0.02em]">Someone called Tuesday. Nobody got back to them until Friday.</h1>
            <p className="mt-6 font-serif text-2xl text-navy/90">By then they had hired whoever answered first.</p>
            <p className="mt-6 text-lg leading-relaxed max-w-[58ch]">I build and run the workflows between “someone called” and “the money landed.” Intake, retainers, documents, payments, and the systems underneath them. You keep practicing law and approving what goes out. The pipeline keeps moving while you’re in court.</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href="https://calendly.com/nsikak-impactflow/lets_connect" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green text-cream font-medium px-6 py-3.5 hover:bg-green/90">Book a 20-minute call</a>
              <a href="#sprint" className="font-medium text-green underline underline-offset-4 decoration-green/30 hover:decoration-green">See the 30-day sprint</a>
            </div>
          </div>

          {/* Signature visual: the lost week vs. the system */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-line bg-card shadow-[0_24px_60px_-30px_rgba(20,36,61,0.35)] overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-line">
                <p className="font-serif text-lg text-navy">One new inquiry</p>
                <p className="text-xs text-muted">This week</p>
              </div>
              <ol className="divide-y divide-line">
                <li className="log-row flex items-start gap-4 px-5 py-4">
                  <p className="w-12 shrink-0 text-xs font-semibold text-muted pt-0.5">Tue</p>
                  <p className="flex-1 text-sm text-navy">Calls at 2:14 pm. You’re in a hearing.</p>
                  <span className="shrink-0 rounded-full bg-sandsoft text-muted text-xs font-medium px-2.5 py-1">Waiting</span>
                </li>
                <li className="log-row flex items-start gap-4 px-5 py-4">
                  <p className="w-12 shrink-0 text-xs font-semibold text-muted pt-0.5">Wed</p>
                  <p className="flex-1 text-sm text-navy">Message still unread in your inbox.</p>
                  <span className="shrink-0 rounded-full bg-sandsoft text-muted text-xs font-medium px-2.5 py-1">Waiting</span>
                </li>
                <li className="log-row flex items-start gap-4 px-5 py-4">
                  <p className="w-12 shrink-0 text-xs font-semibold text-muted pt-0.5">Thu</p>
                  <p className="flex-1 text-sm text-navy">Signs with the firm that answered first.</p>
                  <span className="shrink-0 rounded-full bg-navy text-cream text-xs font-medium px-2.5 py-1">Lost</span>
                </li>
                <li className="log-row flex items-start gap-4 px-5 py-4">
                  <p className="w-12 shrink-0 text-xs font-semibold text-muted pt-0.5">Fri</p>
                  <p className="flex-1 text-sm text-muted line-through decoration-muted/50">You call back.</p>
                  <span className="shrink-0 rounded-full bg-sandsoft text-muted text-xs font-medium px-2.5 py-1">Too late</span>
                </li>
              </ol>
              <div className="log-fix bg-greensoft px-5 py-4 border-t border-green/20">
                <p className="text-xs font-semibold text-green">With a system in place</p>
                <div className="mt-2 flex items-start gap-4">
                  <p className="w-12 shrink-0 text-xs font-semibold text-green pt-0.5">Tue</p>
                  <p className="flex-1 text-sm text-navy">2:15 pm. Logged, conflict details captured, consult booked.</p>
                  <span className="shrink-0 rounded-full bg-green text-cream text-xs font-medium px-2.5 py-1">Booked</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial + tools strip */}
        <section className="border-y border-line bg-sandsoft">
          <div className="mx-auto max-w-6xl px-5 md:px-8 py-10 grid md:grid-cols-12 gap-8 items-center">
            <figure className="md:col-span-6 border-l-[3px] border-green pl-5">
              <blockquote className="font-serif italic text-xl md:text-2xl text-green leading-snug">“The firm’s trust account has doubled since collaborating with Impact Flow.”</blockquote>
              <figcaption className="mt-2 text-sm text-muted">Brian Agandi, Esq., Managing Partner, Agandi Law LLC</figcaption>
            </figure>
            <div className="md:col-span-6">
              <p className="text-xs font-semibold text-muted">Works with the tools you already pay for</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                <li className="rounded-md bg-card border border-line px-3 py-1.5 text-sm text-navy">Clio</li>
                <li className="rounded-md bg-card border border-line px-3 py-1.5 text-sm text-navy">MyCase</li>
                <li className="rounded-md bg-card border border-line px-3 py-1.5 text-sm text-navy">LawPay</li>
                <li className="rounded-md bg-card border border-line px-3 py-1.5 text-sm text-navy">Stripe</li>
                <li className="rounded-md bg-card border border-line px-3 py-1.5 text-sm text-navy">Google Workspace</li>
                <li className="rounded-md bg-card border border-line px-3 py-1.5 text-sm text-navy">Microsoft 365</li>
                <li className="rounded-md bg-card border border-line px-3 py-1.5 text-sm text-navy">QuickBooks</li>
                <li className="rounded-md bg-card border border-line px-3 py-1.5 text-sm text-navy">DocuSign</li>
                <li className="rounded-md bg-card border border-line px-3 py-1.5 text-sm text-navy">Calendly</li>
                <li className="rounded-md bg-card border border-line px-3 py-1.5 text-sm text-navy">Zapier</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="font-serif font-medium text-navy text-4xl md:text-5xl leading-[1.08] tracking-[-0.015em] lg:sticky lg:top-32">If any of this sounds like your week</h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              <li className="flex gap-4 rounded-xl bg-card border border-line p-5"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green" aria-hidden="true" /><p className="leading-relaxed">An inquiry sits in your inbox for three days, because reading it properly means thirty minutes you don’t have between hearings.</p></li>
              <li className="flex gap-4 rounded-xl bg-card border border-line p-5"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green" aria-hidden="true" /><p className="leading-relaxed">Every retainer gets drafted from scratch. Same clauses, same rates, rewritten each time, waiting on you to open the laptop at 9pm.</p></li>
              <li className="flex gap-4 rounded-xl bg-card border border-line p-5"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green" aria-hidden="true" /><p className="leading-relaxed">Documents take longer than they should and still come back with a name spelled wrong.</p></li>
              <li className="flex gap-4 rounded-xl bg-card border border-line p-5"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green" aria-hidden="true" /><p className="leading-relaxed">Payments get chased by hand, or not at all. You know there’s money out there. Finding out how much takes an afternoon.</p></li>
              <li className="flex gap-4 rounded-xl bg-card border border-line p-5"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green" aria-hidden="true" /><p className="leading-relaxed">You’ve already bought the software. Case management, a payment processor, a scheduling link, a form somewhere. None of them talk to each other, so you’re the integration.</p></li>
            </ul>
            <p className="mt-10 text-lg leading-relaxed max-w-[60ch]">None of this is a discipline problem. It’s what happens when the person closing the work is also the person doing the work. Firms don’t stall because the owner is disorganized.</p>
            <p className="mt-4 font-serif text-2xl md:text-[1.75rem] text-navy leading-snug max-w-[34ch]">They stall because nobody’s actual job is moving a client from interested to paid.</p>
          </div>
        </section>

        {/* Offer */}
        <section id="sprint" className="on-dark bg-band text-onband">
          <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-onband/60">The offer</p>
              <h2 className="mt-4 font-serif font-medium text-4xl md:text-6xl leading-[1.04] tracking-[-0.02em]">The Intake-to-Paid Sprint</h2>
              <p className="mt-6 text-lg leading-relaxed text-onband/75 max-w-[52ch]">I map your inquiry-to-payment path, build the three workflows below, and run them with you until they hold.</p>
              <p className="mt-4 text-lg leading-relaxed text-onband/75 max-w-[52ch]">If we keep working together after the sprint, the full fee credits against your first month.</p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="rounded-2xl bg-cream text-body p-7 md:p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
                <p className="inline-block rounded-full bg-greensoft text-green text-xs font-semibold px-3 py-1.5">Introductory price for my first three clients</p>
                <p className="mt-6 font-serif text-6xl font-medium text-navy tracking-tight">$2,500</p>
                <p className="mt-1 text-muted">Fixed fee. No hourly surprises.</p>
                <dl className="mt-7 divide-y divide-line border-y border-line text-sm">
                  <div className="flex justify-between gap-4 py-3"><dt className="text-muted">Length</dt><dd className="font-medium text-navy">30 days</dd></div>
                  <div className="flex justify-between gap-4 py-3"><dt className="text-muted">Payment</dt><dd className="font-medium text-navy text-right">Half to start, half when live</dd></div>
                  <div className="flex justify-between gap-4 py-3"><dt className="text-muted">Built for you</dt><dd className="font-medium text-navy">3 workflows</dd></div>
                  <div className="flex justify-between gap-4 py-3"><dt className="text-muted">After the sprint</dt><dd className="font-medium text-navy text-right">Fee credits to month one</dd></div>
                </dl>
                <a href="https://calendly.com/nsikak-impactflow/lets_connect" target="_blank" rel="noopener noreferrer" className="mt-7 flex w-full justify-center rounded-lg bg-green text-cream font-medium px-6 py-3.5 hover:bg-green/90">Book a 20-minute call</a>
              </div>
            </div>
          </div>
        </section>

        {/* Workflows 1-3 */}
        <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-green">Built in the sprint</p>
            <h2 className="mt-4 font-serif font-medium text-navy text-4xl md:text-5xl leading-[1.08] tracking-[-0.015em]">Three workflows, each named after what the firm owner says out loud</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            <article className="flex flex-col rounded-2xl bg-card border border-line p-7">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-greensoft text-green font-serif text-lg font-medium">1</span>
              <h3 className="mt-6 font-serif text-2xl font-medium text-navy leading-snug">Intake that doesn’t drop</h3>
              <p className="mt-4 font-serif italic text-lg text-green leading-snug">“Someone called Tuesday and nobody got back to them until Friday.”</p>
              <p className="mt-4 leading-relaxed">Every inquiry, from the phone, the website form, or a referral text, lands in one place with a scoping questionnaire attached. The matter record is created, the details your conflict check process needs are captured up front, and the consult is on the calendar before anyone opens a laptop.</p>
              <div className="mt-auto pt-6">
                <div className="rounded-xl bg-sandsoft p-4">
                  <p className="text-xs font-semibold text-navy">What you get</p>
                  <p className="mt-1.5 text-sm leading-relaxed">One intake form, one matter record per lead, a consult booked automatically, and a daily list of who is still waiting.</p>
                </div>
              </div>
            </article>
            <article className="flex flex-col rounded-2xl bg-card border border-line p-7">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-greensoft text-green font-serif text-lg font-medium">2</span>
              <h3 className="mt-6 font-serif text-2xl font-medium text-navy leading-snug">Retainer out the same day</h3>
              <p className="mt-4 font-serif italic text-lg text-green leading-snug">“The engagement letter sat in my drafts for a week.”</p>
              <p className="mt-4 leading-relaxed">Scope answers from intake fill the retainer. The agreement is generated from your template, sent for signature, and countersigned without anyone rebuilding a Word doc from the last client’s file. You own the legal terms. The system moves the paper.</p>
              <div className="mt-auto pt-6">
                <div className="rounded-xl bg-sandsoft p-4">
                  <p className="text-xs font-semibold text-navy">What you get</p>
                  <p className="mt-1.5 text-sm leading-relaxed">Retainer templates by matter type, signature routing, and a signed copy filed to the matter the moment it comes back.</p>
                </div>
              </div>
            </article>
            <article className="flex flex-col rounded-2xl bg-card border border-line p-7">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-greensoft text-green font-serif text-lg font-medium">3</span>
              <h3 className="mt-6 font-serif text-2xl font-medium text-navy leading-snug">One screen that says where the firm stands</h3>
              <p className="mt-4 font-serif italic text-lg text-green leading-snug">“I have no real idea how many matters are open right now.”</p>
              <p className="mt-4 leading-relaxed">Inquiry, consult booked, engagement sent, signed, paid. A single weekly view shows where every matter stands, without asking anyone. Delivered, not logged into.</p>
              <div className="mt-5 flex gap-1" aria-hidden="true">
                <span className="h-1.5 flex-1 rounded-full bg-green" />
                <span className="h-1.5 flex-1 rounded-full bg-green/80" />
                <span className="h-1.5 flex-1 rounded-full bg-green/60" />
                <span className="h-1.5 flex-1 rounded-full bg-green/40" />
                <span className="h-1.5 flex-1 rounded-full bg-green/20" />
              </div>
              <div className="mt-auto pt-6">
                <div className="rounded-xl bg-sandsoft p-4">
                  <p className="text-xs font-semibold text-navy">What you get</p>
                  <p className="mt-1.5 text-sm leading-relaxed">The dashboard, plus a Monday summary that tells you what moved and what stalled.</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Workflows 4-5 */}
        <section className="bg-sand">
          <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-24">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <p className="text-xs font-semibold tracking-[0.12em] uppercase text-green">After the sprint</p>
                <h2 className="mt-4 font-serif font-medium text-navy text-4xl leading-[1.1] tracking-[-0.015em]">Two more, when the first three hold</h2>
              </div>
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
                <article className="rounded-2xl bg-cream p-7">
                  <p className="text-xs font-semibold text-muted">Workflow 4</p>
                  <h3 className="mt-2 font-serif text-2xl font-medium text-navy">Documents that fill themselves</h3>
                  <p className="mt-3 font-serif italic text-lg text-green leading-snug">“Every document takes longer than it should and still comes back wrong.”</p>
                  <p className="mt-4 leading-relaxed">Client and matter data lives in one system of record and flows into every standard document: letters, notices, filings, closing packets. No retyping a name three times and misspelling it once.</p>
                  <p className="mt-5 pt-5 border-t border-line text-sm leading-relaxed"><span className="font-semibold text-navy">What you get:</span> your existing templates wired to live matter data, filed to the right folder, with version history.</p>
                </article>
                <article className="rounded-2xl bg-cream p-7">
                  <p className="text-xs font-semibold text-muted">Workflow 5</p>
                  <h3 className="mt-2 font-serif text-2xl font-medium text-navy">Money that collects itself</h3>
                  <p className="mt-3 font-serif italic text-lg text-green leading-snug">“I’m chasing invoices instead of billing hours.”</p>
                  <p className="mt-4 leading-relaxed">Deposits are collected at signing. Invoices go out on a schedule. Reminders run without anyone deciding to send them, with payments routed to the accounts you set.</p>
                  <p className="mt-5 pt-5 border-t border-line text-sm leading-relaxed"><span className="font-semibold text-navy">What you get:</span> payment links in the retainer flow, scheduled invoicing, automatic follow-up on anything unpaid, and a running picture of what’s outstanding.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* What this isn't */}
        <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
          <h2 className="font-serif font-medium text-navy text-4xl md:text-5xl tracking-[-0.015em]">What this isn’t</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-dashed border-line p-7 md:p-8">
              <p className="text-sm font-semibold text-muted">A weekend automation install</p>
              <p className="mt-4 text-lg leading-relaxed text-muted">The automation playbooks going around sell you prompts and a weekend of setup. That works until the firm gets busy and nobody maintains it. Six weeks later the form is broken, the reminder stopped firing, and nobody noticed until a client did.</p>
            </div>
            <div className="rounded-2xl bg-greensoft border border-green/20 p-7 md:p-8">
              <p className="text-sm font-semibold text-green">Technology operations for lean teams</p>
              <p className="mt-4 text-lg leading-relaxed text-navy">This is the opposite. Not a one-time install. I build the workflows, run them, and stay responsible for them after setup.</p>
              <p className="mt-4 font-serif text-2xl text-navy leading-snug">The workflows have an owner, and it isn’t you.</p>
            </div>
          </div>
          <p className="mt-8 max-w-[75ch] text-sm leading-relaxed text-muted">You and your attorneys own every legal and ethics decision: engagement terms, conflict checks, trust and operating account rules. The systems support those processes. They do not replace judgment.</p>
        </section>

        {/* Proof */}
        <section id="proof" className="bg-sand">
          <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-green">Proof</p>
            <h2 className="mt-4 font-serif font-medium text-navy text-4xl md:text-5xl leading-[1.08] tracking-[-0.015em] max-w-[22ch]">Agandi Law: from scattered to a single system in 90 days</h2>

            <dl className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col-reverse gap-1 rounded-2xl bg-cream p-6"><dt className="text-sm text-muted">From scattered tools to one system</dt><dd className="font-serif text-4xl font-medium text-navy">90 days</dd></div>
              <div className="flex flex-col-reverse gap-1 rounded-2xl bg-cream p-6"><dt className="text-sm text-muted">From first call to signed retainer</dt><dd className="font-serif text-4xl font-medium text-navy">Same day</dd></div>
              <div className="flex flex-col-reverse gap-1 rounded-2xl bg-green text-cream p-6"><dt className="text-sm text-cream/75">Trust account at Agandi Law LLC</dt><dd className="font-serif text-4xl font-medium">Doubled</dd></div>
              <div className="flex flex-col-reverse gap-1 rounded-2xl bg-cream p-6"><dt className="text-sm text-muted">Consult requests in month one</dt><dd className="font-serif text-4xl font-medium text-navy">12</dd></div>
            </dl>

            <div className="mt-14 grid lg:grid-cols-12 gap-12 lg:gap-10">
              <ol className="lg:col-span-7 space-y-8">
                <li className="grid grid-cols-[2.5rem_1fr] gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-navy/20 text-sm font-semibold text-navy">1</span>
                  <div><h3 className="font-serif text-xl font-medium text-navy">Before</h3><p className="mt-2 leading-relaxed">A Maryland employment firm, led by Brian Agandi, Esq. Brian was running consultations, case strategy and court, plus intake, retainer drafting, follow-up and chasing payments. Inquiries waited. Retainers got rebuilt each time. Client information lived across email, notes and memory.</p></div>
                </li>
                <li className="grid grid-cols-[2.5rem_1fr] gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-navy/20 text-sm font-semibold text-navy">2</span>
                  <div><h3 className="font-serif text-xl font-medium text-navy">What I took over</h3><p className="mt-2 leading-relaxed">All client-facing operations: intake coordination, document production, internal communications, and the technical build behind them. Brian kept legal consultations, case strategy, and final approval on every document that reaches a client. That line has never moved.</p></div>
                </li>
                <li className="grid grid-cols-[2.5rem_1fr] gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-navy/20 text-sm font-semibold text-navy">3</span>
                  <div><h3 className="font-serif text-xl font-medium text-navy">What got built</h3><p className="mt-2 leading-relaxed">A single system of record in MyCase, wired to LawPay and Stripe, with intake feeding directly into it. Retainers generated from templates and sent the same day instead of drafted at night. Payment follow-up automated rather than remembered.</p></div>
                </li>
                <li className="grid grid-cols-[2.5rem_1fr] gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-green text-sm font-semibold text-cream">4</span>
                  <div><h3 className="font-serif text-xl font-medium text-navy">Where it stands</h3><p className="mt-2 leading-relaxed">Intake-to-retainer went from days to same-day. It started as a scoped trial and is now an ongoing retained role.</p></div>
                </li>
              </ol>
              <figure className="lg:col-span-5 self-start rounded-2xl bg-cream p-7 md:p-9 lg:sticky lg:top-32">
                <p className="font-serif text-6xl leading-none text-green/40" aria-hidden="true">“</p>
                <blockquote className="-mt-4 font-serif italic text-xl leading-relaxed text-green">Impact Flow LLC has shaped, improved, and empowered the firm’s operations systems. You can tell they’re experienced, poised, and resolve payment issues with clients. The firm’s trust account has doubled since collaborating with Impact Flow, and I would highly recommend them to handle the operations aspect for your company. The systems in place have been extraordinary and what we need at the right moment.</blockquote>
                <figcaption className="mt-6 pt-5 border-t border-line">
                  <p className="font-semibold text-navy">Brian Agandi, Esq.</p>
                  <p className="text-sm text-muted">Managing Partner, Agandi Law LLC</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Why me */}
        <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-5">
            <div className="relative max-w-sm">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-sand" aria-hidden="true" />
              <img src="/nsikak.jpg" alt="Nsikak Udoh" className="relative aspect-square w-full rounded-2xl object-cover" />
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-serif font-medium text-navy text-4xl md:text-5xl tracking-[-0.015em]">Why me</h2>
            <p className="mt-6 text-lg leading-relaxed max-w-[60ch]">I’ve run the owner’s side of this. Six years founding and running a digital agency: scoping work, writing contracts, coordinating vendors, sending invoices, chasing the ones that went quiet. Ten years building digital infrastructure on deadlines that don’t move, starting as a digital organizer on a Texas congressional campaign in 2018, where the deadline was an election day.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              <div className="border-t-2 border-green pt-3"><p className="font-serif text-3xl font-medium text-navy">6 years</p><p className="text-sm text-muted">Running a digital agency</p></div>
              <div className="border-t-2 border-green pt-3"><p className="font-serif text-3xl font-medium text-navy">10 years</p><p className="text-sm text-muted">Building digital infrastructure</p></div>
            </div>
            <p className="mt-8 font-serif text-xl text-navy leading-snug max-w-[46ch]">I’m not an attorney and I don’t give legal advice. I run everything around the law so you can practice it.</p>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="bg-sandsoft border-y border-line">
          <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-green">How it works</p>
              <h2 className="mt-4 font-serif font-medium text-navy text-4xl md:text-5xl tracking-[-0.015em]">Three steps, no guesswork</h2>
            </div>
            <ol className="mt-14 grid md:grid-cols-3 gap-5 relative">
              <li className="rounded-2xl bg-card border border-line p-7">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-green text-cream font-semibold">1</span>
                <h3 className="mt-6 font-serif text-2xl font-medium text-navy">A 20-minute call</h3>
                <p className="mt-3 leading-relaxed">You describe how an inquiry becomes a paid client today. I tell you where it’s leaking. No pitch deck.</p>
              </li>
              <li className="rounded-2xl bg-card border border-line p-7">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-green text-cream font-semibold">2</span>
                <h3 className="mt-6 font-serif text-2xl font-medium text-navy">The sprint</h3>
                <p className="mt-3 leading-relaxed">Thirty days, $2,500 fixed. We map the path, build the three workflows, and run them with you until they hold.</p>
              </li>
              <li className="rounded-2xl bg-card border border-line p-7">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-green text-cream font-semibold">3</span>
                <h3 className="mt-6 font-serif text-2xl font-medium text-navy">Keep it running</h3>
                <p className="mt-3 leading-relaxed">Flat monthly care, defined scope, cancel anytime. The sprint fee credits against your first month. The other two workflows join when you want them.</p>
              </li>
            </ol>
            <p className="mt-10 text-center text-muted">Most firm owners have never hired this role before. The sprint exists so you don’t have to guess.</p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
          <div className="on-dark rounded-3xl bg-green text-cream px-6 py-14 md:px-16 md:py-20 text-center">
            <h2 className="font-serif font-medium text-4xl md:text-6xl tracking-[-0.02em]">The next person who calls</h2>
            <p className="mt-6 font-serif text-xl md:text-2xl leading-snug max-w-[36ch] mx-auto">They’ll call on a Tuesday, while you’re in a hearing. What happens next is either a system or a memory.</p>
            <p className="mt-5 text-cream/80 leading-relaxed max-w-[58ch] mx-auto">Where does work actually stall in your firm right now, somewhere between the first call and the signed retainer? Twenty minutes is enough to find it.</p>
            <a href="https://calendly.com/nsikak-impactflow/lets_connect" target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex rounded-lg bg-cream text-green font-semibold px-7 py-4 hover:bg-cream/90">Book a 20-minute call</a>
          </div>
        </section>
      </main>

      <footer className="on-dark bg-band text-onband">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-6">
            <p className="font-serif text-2xl font-medium">Nsikak Udoh</p>
            <p className="mt-3 text-onband/70 max-w-[44ch]">Technology operations for lean teams. Teams call me when everyone else has moved on.</p>
          </div>
          <div className="md:col-span-6 md:text-right text-sm">
            <a href="mailto:nsikak@nsikak.com" className="font-medium underline underline-offset-4">nsikak@nsikak.com</a>
            <p className="mt-2 text-onband/60">ImpactFlow is my website studio for nonprofits and campaigns.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

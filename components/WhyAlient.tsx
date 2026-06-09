import type { ReactNode } from 'react';

const pillars = [
  '#1 on OSWorld computer-use',
  'Operates any app — no API needed',
  '5-type compounding memory',
  'On-device · zero egress',
  'Accountable autonomy — audit & rollback',
  'Architectural moat — not a wrapper',
];

type Category = { icon: ReactNode; title: string; body: ReactNode };

const categories: Category[] = [
  {
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M21 12a8 8 0 01-8 8H5l-2 2V12a8 8 0 018-8h2a8 8 0 018 8z" />
        <path d="M8 11h8M8 14h5" />
      </svg>
    ),
    title: 'Chatbots & copilots',
    body: (
      <>
        You operate them. They draft, suggest, and summarize — then the work comes back to you to
        finish and ship. Alient operates your tools itself and returns finished work.
      </>
    ),
  },
  {
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M18 10a5 5 0 00-9.6-1.7A4 4 0 007 16h11a3 3 0 000-6z" />
        <path d="M12 19v3M8 21v1M16 21v1" />
      </svg>
    ),
    title: 'Cloud “AI coworker” bots',
    body: (
      <>
        They live in a chat window, reach only what has an API, and run in a shared cloud. Alient
        reaches <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>any</em> app through
        computer-use, runs on a machine inside your perimeter, and is accountable for the result.
      </>
    ),
  },
  {
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2l9 5-9 5-9-5 9-5z" />
        <path d="M3 12l9 5 9-5M3 17l9 5 9-5" />
      </svg>
    ),
    title: 'Frontier model labs',
    body: (
      <>
        They sell horizontal capability. Alient is the deployed, private, accountable agent that
        runs on top of their models — and bundles computer-use, memory, safety, and deployment into
        one agent.
      </>
    ),
  },
];

export default function WhyAlient() {
  return (
    <section className="section" id="why-alient">
      <div className="container">
        <div className="kicker" style={{ marginBottom: 18 }}>
          <span className="num">▲</span> Why Alient
        </div>
        <h2 className="h1" style={{ maxWidth: '26ch' }}>
          A different species of agent.
        </h2>
        <div className="cert-strip" style={{ marginTop: 28 }}>
          {pillars.map((pillar) => (
            <span className="it" key={pillar}>
              {pillar}
            </span>
          ))}
        </div>
        <div className="sec-grid" style={{ marginTop: 48 }}>
          {categories.map((category) => (
            <div className="sec-card" key={category.title}>
              <div className="ico">{category.icon}</div>
              <h3>{category.title}</h3>
              <p>{category.body}</p>
            </div>
          ))}
        </div>
        <blockquote className="editor-pull serif">
          If it can autonomously ship production code — the hardest knowledge work there is —{' '}
          <em>it can run the rest of your operation.</em>
        </blockquote>
        <p className="body" style={{ color: 'var(--text-2)', fontSize: 15, maxWidth: '62ch' }}>
          The same engine already runs{' '}
          <a
            href="https://ontfly.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent)', textDecoration: 'none', borderBottom: '1px dotted var(--accent)' }}
          >
            Ontfly
          </a>
          , our consumer product where the agent builds the website, runs the ad campaigns, drafts
          customer replies, and manages sales for solo founders.
        </p>
      </div>
    </section>
  );
}

import type { ReactNode } from 'react';

type Card = {
  step: string;
  num: string;
  icon: ReactNode;
  title: ReactNode;
  body: ReactNode;
};

const cards: Card[] = [
  {
    step: 'Memory',
    num: '01',
    icon: (
      <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2a4 4 0 00-4 4v1a4 4 0 000 8v1a4 4 0 008 0v-1a4 4 0 000-8V6a4 4 0 00-4-4z" />
        <path d="M9 9h6M9 13h6" />
      </svg>
    ),
    title: 'Remembers everything.',
    body: (
      <>
        Five-type persistent memory — procedural, episodic, semantic, working, declarative. Your
        codebase, your conventions, every decision in every meeting. The work gets sharper every week.
      </>
    ),
  },
  {
    step: 'Meetings',
    num: '02',
    icon: (
      <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x={2} y={6} width={14} height={12} rx={1} />
        <path d="M16 10l6-3v10l-6-3z" />
        <circle cx={9} cy={12} r={2} />
      </svg>
    ),
    title: 'Joins and talks in meetings.',
    body: (
      <>
        Dials into Zoom, listens through a virtual mic,{' '}
        <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>speaks when relevant</em>, asks
        clarifying questions, and captures action items into the right tickets — then ships them after
        the call.
      </>
    ),
  },
  {
    step: 'Tickets',
    num: '03',
    icon: (
      <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x={3} y={4} width={18} height={16} rx={1} />
        <path d="M3 9h18M8 4v5M16 4v5" />
      </svg>
    ),
    title: 'Picks up tickets.',
    body: (
      <>
        Watches your Jira or Linear board. Selects work in scope. Asks the PM when something is
        genuinely ambiguous, not when it&apos;s lazy.
      </>
    ),
  },
  {
    step: 'Code',
    num: '04',
    icon: (
      <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M8 6l-5 6 5 6M16 6l5 6-5 6M14 4l-4 16" />
      </svg>
    ),
    title: 'Writes and ships code.',
    body: (
      <>
        Opens the codebase, writes the change, runs tests in an isolated worktree, opens the pull
        request, replies to review comments.
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker" style={{ marginBottom: 18 }}>
          <span className="num">02</span> How it works
        </div>
        <h2 className="h1" style={{ maxWidth: '24ch' }}>
          A real engineer&apos;s workflow, automated end to end.
        </h2>
        <div className="hiw" style={{ marginTop: 48 }}>
          {cards.map((card) => (
            <div className="hiw-card" key={card.num}>
              <div className="step">
                <span className="n">{card.num}</span> · {card.step}
              </div>
              <div className="ico">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <span className="trace">see the trace</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

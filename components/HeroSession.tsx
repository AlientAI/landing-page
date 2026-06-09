'use client';

import { useEffect, useState, type ReactNode } from 'react';

type TerminalLine = { content: ReactNode; delay: number };

type Scenario = {
  id: string;
  queue: string[];
  lines: TerminalLine[];
  toast: ReactNode;
};

// Two real session traces: the coding one is the flagship proof; the ops one
// shows the same agent finishing non-coding work (meeting → portal → follow-up).
const scenarios: Scenario[] = [
  {
    id: 'coding',
    queue: ['JIRA-4812', 'JIRA-4801', 'JIRA-4794'],
    lines: [
      {
        delay: 0.2,
        content: (
          <>
            <span className="muted">$</span> <span className="prompt">alient plan</span>{' '}
            <span className="file">JIRA-4812</span>
          </>
        ),
      },
      { delay: 0.9, content: <span className="muted">→ reading repo… /src/checkout/totals.ts</span> },
      {
        delay: 1.6,
        content: (
          <>
            <span className="muted">→ planner:</span> 3 steps · 12 files
          </>
        ),
      },
      {
        delay: 2.3,
        content: (
          <>
            <span className="muted">→ coding…</span> <span className="file">totals.ts</span>{' '}
            <span className="ok">+42 −18</span>
          </>
        ),
      },
      {
        delay: 3.0,
        content: (
          <>
            <span className="muted">→ tests</span> <span className="ok">✓ 214 passed</span>{' '}
            <span className="muted">·</span> <span className="warn">2 flaky</span>
          </>
        ),
      },
      {
        delay: 3.7,
        content: (
          <>
            <span className="muted">→ reflector:</span> <span className="ok">ok</span> · adversarial
            verify <span className="ok">ok</span>
          </>
        ),
      },
      {
        delay: 4.4,
        content: (
          <>
            <span className="muted">$</span> <span className="prompt">gh pr create</span>
          </>
        ),
      },
      {
        delay: 5.1,
        content: (
          <>
            <span className="ok">opened</span> <span className="file">#1284</span>{' '}
            <span className="muted">fix: prorate taxes on split ship</span>
            <span className="cursor" />
          </>
        ),
      },
    ],
    toast: (
      <>
        Opened <span className="pr">#1284</span> · fix: prorate taxes on split ship. CI green. Ready
        for review, @maria.
      </>
    ),
  },
  {
    id: 'ops',
    queue: ['vendor sync', 'renewal portal', 'inbox triage'],
    lines: [
      {
        delay: 0.2,
        content: (
          <>
            <span className="muted">$</span> <span className="prompt">alient join</span>{' '}
            <span className="file">&quot;vendor sync&quot;</span> <span className="muted">· zoom</span>
          </>
        ),
      },
      { delay: 0.9, content: <span className="muted">→ listening… 4 speakers · diarized</span> },
      {
        delay: 1.6,
        content: (
          <>
            <span className="muted">→ summary:</span> 6 decisions · 3 action items
          </>
        ),
      },
      {
        delay: 2.3,
        content: (
          <>
            <span className="muted">→ opening</span> <span className="file">vendor portal</span>{' '}
            <span className="muted">· no API — clicks · types</span>
          </>
        ),
      },
      {
        delay: 3.0,
        content: (
          <>
            <span className="muted">→ renewal</span> <span className="ok">✓ approved</span>{' '}
            <span className="muted">·</span> CRM synced
          </>
        ),
      },
      {
        delay: 3.7,
        content: (
          <>
            <span className="muted">→ reflector:</span> <span className="ok">ok</span> · audit log
            written
          </>
        ),
      },
      {
        delay: 4.4,
        content: (
          <>
            <span className="muted">$</span> <span className="prompt">alient send follow-up</span>
          </>
        ),
      },
      {
        delay: 5.1,
        content: (
          <>
            <span className="ok">sent</span> <span className="muted">recap + 3 action items →</span>{' '}
            <span className="file">@maria @finance</span>
            <span className="cursor" />
          </>
        ),
      },
    ],
    toast: (
      <>
        Posted recap + 3 action items to <span className="pr">#vendors</span>. Renewal approved in
        the portal — audit trail attached.
      </>
    ),
  },
];

const sidebarMemoryRows = ['procedural', 'episodic', 'semantic', 'working', 'declarative'];

const ROTATE_MS = 13000;

export default function HeroSession() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    // Respect reduced-motion: hold the first scenario instead of cycling.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(
      () => setActive((i) => (i + 1) % scenarios.length),
      ROTATE_MS,
    );
    return () => window.clearInterval(timer);
  }, []);

  const scenario = scenarios[active];

  return (
    <div className="macbook" aria-label="Alient running on a MacBook">
      <div className="mb-lid">
        {/* key restarts the CSS type-in/toast animations on each scenario swap */}
        <div className="mb-screen" key={scenario.id}>
          <div className="mb-camera" />
          <div className="ui-titlebar">
            <span className="tl" />
            <span className="tl" />
            <span className="tl" />
            <span className="label">
              alient@mac · <span className="on">session live</span> · 09:41
            </span>
          </div>
          <div className="ui-body">
            <aside className="ui-sidebar">
              <div className="hd">Queue</div>
              {scenario.queue.map((item, i) => (
                <div className={`row${i === 0 ? ' active' : ''}`} key={item}>
                  <span className="d" />
                  {item}
                </div>
              ))}
              <div className="hd" style={{ marginTop: 10 }}>
                Memory
              </div>
              {sidebarMemoryRows.map((kind) => (
                <div className="row" key={kind}>
                  <span className="d" />
                  {kind}
                </div>
              ))}
            </aside>
            <div className="ui-main">
              {scenario.lines.map((line, i) => (
                <div className="term-line" style={{ animationDelay: `${line.delay}s` }} key={i}>
                  {line.content}
                </div>
              ))}
            </div>
          </div>
          <div className="fake-cursor">
            <svg viewBox="0 0 24 24" fill="#E8E9EC" stroke="#0A0B0D" strokeWidth={1}>
              <path d="M3 2l7 18 2-8 8-2z" />
            </svg>
          </div>
          <div className="slack-toast">
            <div className="head">
              <div className="avatar">A</div>
              <div className="name">alient</div>
              <div className="time">now</div>
            </div>
            <div className="body">{scenario.toast}</div>
          </div>
        </div>
      </div>
      <div className="mb-base" />
    </div>
  );
}

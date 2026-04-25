import Link from 'next/link';
import { ArrowRight, PlayIcon } from './icons';

const terminalLines: { content: React.ReactNode; delay: number }[] = [
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
        <span className="muted">→ reflector:</span> <span className="ok">ok</span> · adversarial verify{' '}
        <span className="ok">ok</span>
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
];

const sidebarMemoryRows = ['procedural', 'episodic', 'semantic', 'working', 'declarative'];

export default function Hero() {
  return (
    <section className="hero" id="product">
      <div className="container hero-grid">
        <div className="hero-left">
          <span className="eyebrow">
            From the team behind Amazon&apos;s foundational AI
            <br />
            30 yrs in enterprise
          </span>
          <h1 className="display hero-headline">
            Hire the AI Teammate,
            <br />
            not the tool
          </h1>
          <p className="sub">
            Today&apos;s AI tools automate 20% of the job &mdash; the code. A human still attends every
            meeting, reads every doc, and re-explains context every morning.{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Alient is the other 80%.</strong>{' '}
            Its own Slack, its own email, a real seat in the meeting, and memory that compounds from
            day one.
          </p>
          <div className="hero-ctas">
            <Link className="btn btn--primary" href="#demo">
              Request a demo
              <ArrowRight />
            </Link>
            <Link className="btn btn--ghost" href="#live-demo">
              See it work
              <PlayIcon />
            </Link>
          </div>

          <div className="proof-bar">
            <div className="proof-cell">
              <div className="num accent">
                72.1<span style={{ fontSize: 14, letterSpacing: 0 }}>%</span>
              </div>
              <div className="lbl">#1 on OSWorld Benchmark</div>
            </div>
            <div className="proof-cell">
              <div className="num">+9.2 pts</div>
              <div className="lbl">vs. previous SOTA (Sonnet 4.5)</div>
            </div>
            <div className="proof-cell">
              <div className="num">Beats</div>
              <div className="lbl">Claude Code · Terminal Benchmark</div>
            </div>
            <div className="proof-cell">
              <div className="num">On-device</div>
              <div className="lbl">Zero data egress</div>
            </div>
          </div>
        </div>

        <div className="hero-right mac-wrap">
          <div className="mac-bokeh" />
          <div className="macbook" aria-label="Alient running on a MacBook">
            <div className="mb-lid">
              <div className="mb-screen">
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
                    <div className="row active">
                      <span className="d" />
                      JIRA-4812
                    </div>
                    <div className="row">
                      <span className="d" />
                      JIRA-4801
                    </div>
                    <div className="row">
                      <span className="d" />
                      JIRA-4794
                    </div>
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
                    {terminalLines.map((line, i) => (
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
                  <div className="body">
                    Opened <span className="pr">#1284</span> · fix: prorate taxes on split ship. CI green.
                    Ready for review, @maria.
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-base" />
          </div>
        </div>
      </div>
    </section>
  );
}

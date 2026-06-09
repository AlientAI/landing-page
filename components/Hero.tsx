import Link from 'next/link';
import { ArrowRight, PlayIcon } from './icons';
import HeroSession from './HeroSession';

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
            An AI agent that does the work,
            <br />
            not just the chat
          </h1>
          <p className="sub">
            Today&apos;s AI tools draft and advise, then hand the work back to you.{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 500 }}>
              Alient is the agent that takes the whole job
            </strong>{' '}
            &mdash; joins the meeting, operates your tools, remembers every decision, and delivers
            it done.
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
          <HeroSession />
        </div>
      </div>
    </section>
  );
}

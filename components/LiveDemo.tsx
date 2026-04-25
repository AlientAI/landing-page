'use client';

import { useState } from 'react';
import { PlayIcon } from './icons';

const tabs = [
  { num: '01', label: 'Recalls context' },
  { num: '02', label: 'Joins the standup' },
  { num: '03', label: 'Ships the PR' },
];

export default function LiveDemo() {
  const [active, setActive] = useState(0);

  return (
    <section className="demo-strip" id="live-demo">
      <div className="demo-inner">
        <div className="container">
          <div className="demo-frame">
            <div className="demo-chrome">
              <span className="tl" />
              <span className="tl" />
              <span className="tl" />
              <span className="title">alient · live session · mac-austin-03</span>
              <span className="rec">REC · 01:24</span>
            </div>
            <div className="demo-placeholder">
              <div className="demo-placeholder-inner">
                <div className="play">
                  <PlayIcon width={22} height={22} style={{ color: 'var(--accent)' }} />
                </div>
                <div className="meta">[ video drop-in · 1280×720 · Mux ]</div>
                <div className="desc">
                  90-second recording: ticket → memory recall → Zoom call → PR.
                </div>
              </div>
            </div>
          </div>
          <div className="demo-tabs">
            {tabs.map((tab, i) => (
              <button
                key={tab.num}
                className={`demo-tab${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
                type="button"
              >
                <span className="t">{tab.num}</span>
                {tab.label}
              </button>
            ))}
          </div>
          <p className="demo-caption">Real session. Recorded March 14, 2026. No edits, no cuts.</p>
        </div>
      </div>
    </section>
  );
}

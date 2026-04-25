import Link from 'next/link';

export default function Benchmark() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker" style={{ marginBottom: 18 }}>
          <span className="num">03</span> Proof
        </div>
        <h2 className="h1 bench-head">
          We didn&apos;t ship a chatbot. We shipped the #1 base model on the world&apos;s hardest
          computer-use benchmark.
        </h2>

        <div className="bench-stats">
          <div className="bench-stat">
            <div className="big">
              72.1<span style={{ fontSize: '0.55em', marginLeft: 4 }}>%</span>
            </div>
            <div className="sm">#1 on OSWorld Benchmark · March 2026.</div>
            <span className="src">View leaderboard →</span>
          </div>
          <div className="bench-stat">
            <div className="big">#1</div>
            <div className="sm">Among all general models on the benchmark.</div>
            <span className="src">Methodology →</span>
          </div>
          <div className="bench-stat">
            <div className="big text">Beats</div>
            <div className="sm">
              Claude Code on Terminal Benchmark, same Claude Sonnet 4.6 backbone — architectural
              advantage, not model advantage.
            </div>
            <span className="src">Read the white paper →</span>
          </div>
        </div>

        <div className="bench-chart">
          <div className="chart-hd">
            <span>OSWorld Benchmark · Jan 2025 → Mar 2026</span>
            <span>Higher is better</span>
          </div>
          <svg
            viewBox="0 0 900 280"
            width="100%"
            height={240}
            role="img"
            aria-label="OSWorld Benchmark leaderboard chart"
          >
            <g stroke="rgba(255,255,255,0.06)" strokeWidth={1}>
              <line x1={40} y1={40} x2={880} y2={40} />
              <line x1={40} y1={100} x2={880} y2={100} />
              <line x1={40} y1={160} x2={880} y2={160} />
              <line x1={40} y1={220} x2={880} y2={220} />
            </g>
            <g fontFamily="JetBrains Mono, monospace" fontSize={10} fill="#5C636E">
              <text x={12} y={44}>
                80%
              </text>
              <text x={12} y={104}>
                60%
              </text>
              <text x={12} y={164}>
                40%
              </text>
              <text x={12} y={224}>
                20%
              </text>
              <text x={40} y={258}>
                Jan 25
              </text>
              <text x={260} y={258}>
                Jun 25
              </text>
              <text x={520} y={258}>
                Nov 25
              </text>
              <text x={780} y={258}>
                Mar 26
              </text>
            </g>
            <polyline
              fill="none"
              stroke="#5C636E"
              strokeWidth={1.5}
              strokeDasharray="3 3"
              points="60,200 160,188 280,170 400,152 520,140 640,128 780,118"
            />
            <g fill="#5C636E">
              <circle cx={60} cy={200} r={3} />
              <circle cx={160} cy={188} r={3} />
              <circle cx={280} cy={170} r={3} />
              <circle cx={400} cy={152} r={3} />
              <circle cx={520} cy={140} r={3} />
              <circle cx={640} cy={128} r={3} />
              <circle cx={780} cy={118} r={3} />
            </g>
            <text x={620} y={110} fontFamily="JetBrains Mono, monospace" fontSize={10} fill="#9097A1">
              Previous SOTA · 62.9%
            </text>
            <line
              x1={820}
              y1={84}
              x2={820}
              y2={220}
              stroke="#CFFF4F"
              strokeWidth={1}
              strokeDasharray="2 3"
              opacity={0.5}
            />
            <circle cx={820} cy={84} r={7} fill="#CFFF4F" />
            <circle cx={820} cy={84} r={14} fill="none" stroke="#CFFF4F" strokeWidth={1} opacity={0.4} />
            <text
              x={720}
              y={70}
              fontFamily="JetBrains Mono, monospace"
              fontSize={11}
              fill="#CFFF4F"
              fontWeight={500}
            >
              ALIENT · 72.1%
            </text>
          </svg>
        </div>

        <blockquote className="editor-pull serif">
          The win is architectural. A 5-type memory system, a Planner→Programmer→Reflector graph with
          adversarial verification, and a two-layer safety policy on every tool call.{' '}
          <em>The same model in a different system gets a different answer.</em>
        </blockquote>
        <Link href="#architecture" className="read-arch-link">
          Read the architecture →
        </Link>
      </div>
    </section>
  );
}

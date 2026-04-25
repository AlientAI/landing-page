export default function Architecture() {
  return (
    <section className="section" id="architecture">
      <div className="container">
        <div className="kicker" style={{ marginBottom: 18 }}>
          <span className="num">04</span> Architecture
        </div>
        <h2 className="h1" style={{ maxWidth: '24ch' }}>
          Seven layers. One engineer.
        </h2>
        <div className="arch-wrap">
          <svg
            className="arch-svg"
            viewBox="0 0 1000 520"
            width="100%"
            role="img"
            aria-label="Alient seven-layer architecture diagram"
          >
            <defs>
              <marker
                id="arr"
                viewBox="0 0 10 10"
                refX={9}
                refY={5}
                markerWidth={6}
                markerHeight={6}
                orient="auto"
              >
                <path d="M0 0 L10 5 L0 10 z" fill="#5C636E" />
              </marker>
            </defs>

            <rect className="box" x={40} y={30} width={920} height={48} rx={2} />
            <text className="n-lbl" x={60} y={52}>
              01 · Event bus
            </text>
            <text className="n-ttl" x={60} y={68}>
              Temporal
            </text>
            <text className="n-sub" x={860} y={60} textAnchor="end">
              durable workflows
            </text>

            <rect className="box" x={40} y={98} width={920} height={48} rx={2} />
            <text className="n-lbl" x={60} y={120}>
              02 · Orchestrator
            </text>
            <text className="n-ttl" x={60} y={136}>
              LangGraph · Planner → Programmer → Reflector
            </text>
            <text className="n-sub" x={860} y={128} textAnchor="end">
              adversarial verify
            </text>

            <g>
              <rect className="box" x={40} y={166} width={220} height={110} rx={2} />
              <text className="n-lbl" x={60} y={188}>
                03a · GUI agent
              </text>
              <text className="n-ttl" x={60} y={208}>
                Computer use
              </text>
              <text className="n-sub" x={60} y={226}>
                click · type · read screen
              </text>
              <text className="n-sub" x={60} y={242}>
                any macOS app
              </text>

              <rect className="box" x={280} y={166} width={220} height={110} rx={2} />
              <text className="n-lbl" x={300} y={188}>
                03b · Coding agent
              </text>
              <text className="n-ttl" x={300} y={208}>
                Repo-native
              </text>
              <text className="n-sub" x={300} y={226}>
                worktree · tests · PR
              </text>
              <text className="n-sub" x={300} y={242}>
                Cursor · terminal
              </text>

              <rect className="box" x={520} y={166} width={220} height={110} rx={2} />
              <text className="n-lbl" x={540} y={188}>
                03c · Meeting agent
              </text>
              <text className="n-ttl" x={540} y={208}>
                Zoom · Meet
              </text>
              <text className="n-sub" x={540} y={226}>
                virtual mic + speaker
              </text>
              <text className="n-sub" x={540} y={242}>
                diarized transcript
              </text>

              <rect className="box-accent" x={760} y={166} width={200} height={110} rx={2} />
              <text className="n-lbl" x={780} y={188} fill="#CFFF4F">
                03d · Reflector
              </text>
              <text className="n-ttl" x={780} y={208}>
                Adversarial
              </text>
              <text className="n-sub" x={780} y={226}>
                self-critique
              </text>
              <text className="n-sub" x={780} y={242}>
                rollback on red
              </text>
            </g>

            <g>
              <rect className="box" x={40} y={300} width={920} height={110} rx={2} />
              <text className="n-lbl" x={60} y={322}>
                04 · Memory
              </text>
              <text className="n-ttl" x={60} y={342}>
                Five types · persistent across sessions
              </text>
              <g fontFamily="JetBrains Mono, monospace" fontSize={11} fill="#9097A1">
                <text x={60} y={372}>
                  procedural
                </text>
                <text x={220} y={372}>
                  episodic
                </text>
                <text x={360} y={372}>
                  semantic
                </text>
                <text x={500} y={372}>
                  working
                </text>
                <text x={640} y={372}>
                  declarative
                </text>
              </g>
              <text className="n-sub" x={60} y={394}>
                Graphiti · memU · A-MEM · files
              </text>
            </g>

            <g>
              <rect className="box" x={40} y={432} width={450} height={58} rx={2} />
              <text className="n-lbl" x={60} y={454}>
                05 · Safety
              </text>
              <text className="n-ttl" x={60} y={472}>
                Two-layer policy on every tool call
              </text>

              <rect className="box" x={510} y={432} width={450} height={58} rx={2} />
              <text className="n-lbl" x={530} y={454}>
                06 · Observability
              </text>
              <text className="n-ttl" x={530} y={472}>
                Langfuse · full traces · replay
              </text>
            </g>

            <g stroke="#5C636E" strokeWidth={1} fill="none" opacity={0.6}>
              <line x1={500} y1={78} x2={500} y2={98} markerEnd="url(#arr)" />
              <line x1={150} y1={146} x2={150} y2={166} markerEnd="url(#arr)" />
              <line x1={390} y1={146} x2={390} y2={166} markerEnd="url(#arr)" />
              <line x1={630} y1={146} x2={630} y2={166} markerEnd="url(#arr)" />
              <line x1={860} y1={146} x2={860} y2={166} markerEnd="url(#arr)" />
              <line x1={500} y1={276} x2={500} y2={300} markerEnd="url(#arr)" />
              <line x1={260} y1={410} x2={260} y2={432} markerEnd="url(#arr)" />
              <line x1={735} y1={410} x2={735} y2={432} markerEnd="url(#arr)" />
            </g>
          </svg>
          <div className="arch-caption">Authored SVG · seven-layer system map</div>
        </div>
      </div>
    </section>
  );
}

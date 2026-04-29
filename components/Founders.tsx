export default function Founders() {
  return (
    <section className="section founders">
      <div className="container">
        <div className="kicker" style={{ marginBottom: 22 }}>
          <span className="num">07</span> Letter from the founders
        </div>
        <div className="founders-grid">
          <div>
            <h2 className="h1">We built the engineer, not the tool.</h2>
            <div className="letter">
              <p>
                Between us we&apos;ve shipped software at scale for two decades and grown up inside
                it for almost one. We watched the same pattern from both ends: every team has more
                work than engineers, and every engineer has more meetings than focus time. The
                tools we tried — copilots, assistants, agents — moved the bottleneck around
                without removing it. The work still landed on a human.
              </p>
              <p>
                So we built the engineer instead of the tool. Alient is the colleague we wished we had:
                a Mac on the desk, picking up tickets, asking smart questions, shipping pull requests,
                joining the standup. It is not infrastructure. It is a hire.
              </p>
              <p>
                If that resonates, we&apos;d like to show you a real session — not a slide deck. Thirty
                minutes, your stack, your ticket, our agent.
              </p>
              <p className="sig">— The founders, Austin, TX · April 2026</p>
            </div>
            <span className="research-link">Read our research →</span>
          </div>
          <div className="bio-grid">
            <div>
              <div className="portrait">
                <span className="mono-tag">CTO</span>
                <span className="initials">Y.K.</span>
              </div>
              <div className="bio">
                <h4>Yurii Kulaksyz</h4>
                <div className="role">Co-founder &amp; CTO · 8 y.o.</div>
                <p>
                  Built Alient&apos;s agent architecture and computer-use layer. Reads commit
                  histories the way other kids read picture books.
                </p>
              </div>
            </div>
            <div>
              <div className="portrait">
                <span className="mono-tag">CEO</span>
                <span className="initials">T.S.</span>
              </div>
              <div className="bio">
                <h4>Thirunavukkaresu Swaminathan <span style={{ opacity: 0.6 }}>(Swami)</span></h4>
                <div className="role">Co-founder &amp; CEO</div>
                <p>
                  Principal engineering manager. Two decades shipping enterprise software and
                  security systems at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="backed">
          <span>Backed by</span>
          <span style={{ color: 'var(--paper-ink)' }}>[angel roster TBD]</span>
        </div>
      </div>
    </section>
  );
}

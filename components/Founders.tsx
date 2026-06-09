export default function Founders() {
  return (
    <section className="section founders">
      <div className="container">
        <div className="kicker" style={{ marginBottom: 22 }}>
          <span className="num">07</span> Letter from the founders
        </div>
        <div className="founders-grid">
          <div>
            <h2 className="h1">We built the agent, not the tool.</h2>
            <div className="letter">
              <p>
                Between us we&apos;ve shipped software at scale for two decades and grown up inside
                it for almost one. We watched the same pattern from both ends: every team has more
                work than people, and everyone has more meetings than focus time. The tools we
                tried — copilots, assistants, chatbots — moved the bottleneck around without
                removing it. The work still landed on a human.
              </p>
              <p>
                So we built the agent instead of the tool. Alient is the colleague we wished we
                had: it picks up the work that used to land on a human — joins the meeting, asks
                smart questions, returns it finished. It is not infrastructure. It is a hire.
              </p>
              <p>
                If that resonates, we&apos;d like to show you a real session — not a slide deck. Thirty
                minutes, your stack, your task, our agent.
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
                <h3>Yurii Kulaksyz</h3>
                <div className="role">Co-founder &amp; CTO · 8 yrs experience</div>
                <p>
                  Built Alient&apos;s agent architecture and computer-use layer. Reads commit
                  histories the way other people read novels.
                </p>
              </div>
            </div>
            <div>
              <div className="portrait">
                <span className="mono-tag">CEO</span>
                <span className="initials">T.S.</span>
              </div>
              <div className="bio">
                <h3>Thirunavukkaresu Swaminathan <span style={{ opacity: 0.6 }}>(Swami)</span></h3>
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

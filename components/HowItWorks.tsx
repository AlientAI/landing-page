const features = [
  {
    icon: '🎫',
    title: 'Picks up tickets automatically',
    description:
      'Alient monitors your Jira board, selects tickets within its scope, and starts working — no assignment needed. It asks your PM a question when something is ambiguous.',
  },
  {
    icon: '💻',
    title: 'Writes code and opens PRs',
    description:
      'It writes the code, runs the tests, opens the pull request, and tells the team it\'s done — exactly the way a developer does, using real GitHub.',
  },
  {
    icon: '🔗',
    title: 'Works in every app your team uses',
    description:
      'Its own Slack. Its own email. Its own GitHub. Alient operates inside the tools you already use — no new workflows, no integration overhead.',
  },
  {
    icon: '🧠',
    title: 'Gets smarter every week',
    description:
      'Alient learns your codebase, your PM\'s preferences, and how your team makes decisions. Questions per ticket go down. Output goes up. The longer it stays, the more it\'s worth.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className="text-sm font-medium uppercase tracking-widest mb-4"
            style={{ color: 'var(--accent-bright)' }}
          >
            How It Works
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            It&apos;s not a tool.
            <br />
            <span className="gradient-text">It&apos;s an AI hire.</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Alient doesn&apos;t generate code snippets. It joins your team, understands your systems,
            and ships real work — end to end.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card p-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6"
                style={{
                  background: 'var(--accent-glow)',
                  border: '1px solid var(--border-accent)',
                }}
              >
                {feature.icon}
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {feature.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

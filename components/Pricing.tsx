'use client';

const comparison = [
  { label: 'Monthly cost', human: '$10,000–$15,000', alient: '$500', highlight: true },
  { label: 'Ramp time', human: '30–90 days', alient: 'Day one' },
  { label: 'Severance', human: 'Yes', alient: 'Never' },
  { label: 'Works 24/7', human: 'No', alient: 'Yes', highlight: true },
  { label: 'Learns your stack', human: 'Over months', alient: 'Continuously' },
  { label: 'Cancel anytime', human: '2 weeks notice (minimum)', alient: 'Anytime' },
];

export default function Pricing() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-32 px-6" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className="text-sm font-medium uppercase tracking-widest mb-4"
            style={{ color: 'var(--accent-bright)' }}
          >
            Pricing
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            One junior engineer:{' '}
            <span style={{ color: 'var(--text-muted)', textDecoration: 'line-through' }}>
              $120,000–$180,000/yr
            </span>
            <br />
            <span className="gradient-text">One Alient: $500/month.</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            No severance. No ramp time. No two weeks&apos; notice.
            <br />
            The best time to hire your first AI engineer was last quarter.
          </p>
        </div>

        {/* Comparison table */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid var(--border)' }}
        >
          {/* Table header */}
          <div
            className="grid grid-cols-3 px-8 py-4"
            style={{
              background: 'var(--bg-card)',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <span
              className="text-sm font-medium"
              style={{ color: 'var(--text-muted)' }}
            >
              &nbsp;
            </span>
            <span
              className="text-sm font-medium text-center"
              style={{ color: 'var(--text-muted)' }}
            >
              Junior Engineer
            </span>
            <span
              className="text-sm font-semibold text-center"
              style={{ color: 'var(--accent-bright)' }}
            >
              Alient
            </span>
          </div>

          {/* Rows */}
          {comparison.map((row, i) => (
            <div
              key={row.label}
              className="grid grid-cols-3 px-8 py-5 items-center"
              style={{
                background: row.highlight ? 'rgba(99, 102, 241, 0.04)' : 'var(--bg-card)',
                borderBottom: i < comparison.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <span
                className="text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                {row.label}
              </span>
              <span
                className="text-sm text-center"
                style={{ color: 'var(--text-muted)' }}
              >
                {row.human}
              </span>
              <span
                className="text-sm font-semibold text-center"
                style={{ color: row.highlight ? 'var(--accent-bright)' : 'var(--text-primary)' }}
              >
                {row.alient}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p
            className="text-sm mb-6"
            style={{ color: 'var(--text-muted)' }}
          >
            The second best time to hire your first AI engineer is now.
          </p>
          <button
            onClick={scrollToContact}
            className="px-10 py-4 rounded-xl text-base font-semibold transition-all duration-200 cursor-pointer"
            style={{
              background: 'var(--accent)',
              color: '#fff',
              boxShadow: '0 0 40px rgba(99, 102, 241, 0.3)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 60px rgba(99, 102, 241, 0.5)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 40px rgba(99, 102, 241, 0.3)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
            }}
          >
            Hire your first AI engineer →
          </button>
        </div>
      </div>
    </section>
  );
}

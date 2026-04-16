export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="text-base font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Alient
          </span>
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full"
            style={{
              background: 'var(--accent-glow)',
              color: 'var(--accent-bright)',
              border: '1px solid var(--border-accent)',
            }}
          >
            AI
          </span>
        </div>
        <p
          className="text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          © {new Date().getFullYear()} Alient. All rights reserved.
        </p>
        <p
          className="text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          $500/month · Cancel anytime
        </p>
      </div>
    </footer>
  );
}

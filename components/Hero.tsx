'use client';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid">
      {/* Background orb */}
      <div
        className="hero-orb"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -60%)' }}
      />

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-10">
        <div className="flex items-center gap-2">
          <span
            className="text-xl font-bold tracking-tight"
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
        <button
          onClick={scrollToContact}
          className="text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer"
          style={{
            color: 'var(--text-secondary)',
            border: '1px solid var(--border)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-accent)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)';
          }}
        >
          Request a Demo
        </button>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm"
            style={{
              background: 'var(--accent-glow)',
              border: '1px solid var(--border-accent)',
              color: 'var(--accent-bright)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: 'var(--accent-bright)' }}
            />
            Now hiring AI engineers
          </div>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          Your competitors aren&apos;t hiring
          <br />
          more engineers.
          <br />
          <span className="gradient-text">They&apos;re getting more output.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-xl sm:text-2xl max-w-2xl mx-auto mb-4 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          Alient is an AI software engineer with its own identity, memory, and judgment.
        </p>
        <p
          className="text-lg max-w-xl mx-auto mb-12"
          style={{ color: 'var(--text-muted)' }}
        >
          Give it a laptop. It joins your team Monday.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 cursor-pointer"
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
            Request a Demo
          </button>
          <button
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer"
            style={{
              color: 'var(--text-secondary)',
              border: '1px solid var(--border)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-accent)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)';
            }}
          >
            See how it works
          </button>
        </div>

        {/* Social proof line */}
        <p
          className="mt-12 text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          $500/month · No ramp time · Cancel anytime
        </p>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, var(--bg-primary), transparent)',
        }}
      />
    </section>
  );
}

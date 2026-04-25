import type { ReactNode } from 'react';

type Card = { icon: ReactNode; title: ReactNode; body: ReactNode };

const cards: Card[] = [
  {
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x={3} y={4} width={18} height={13} rx={1} />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Runs on a Mac in your office.',
    body: (
      <>
        You provision the Mac. We help you configure it. Sits inside your perimeter, under your MDM. No
        cloud agent, no shared tenant.
      </>
    ),
  },
  {
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2L3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Zero data egress.',
    body: (
      <>
        Reasoning, memory, screen capture, and audio all stay on the device. Only the LLM API call
        leaves — and even that can be self-hosted.
      </>
    ),
  },
  {
    icon: (
      <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3 3v18h18" />
        <path d="M7 15l4-4 3 3 5-6" />
      </svg>
    ),
    title: 'Graduated autonomy + audit trail.',
    body: (
      <>
        Every action is classified by risk tier. High-risk actions require a human via{' '}
        <span className="mono" style={{ color: 'var(--accent)' }}>
          #agent-escalation
        </span>
        . Every tool call is logged to Langfuse with full traces.
      </>
    ),
  },
];

export default function Security() {
  return (
    <section className="section" id="security">
      <div className="container">
        <div className="kicker" style={{ marginBottom: 18 }}>
          <span className="num">05</span> Security
        </div>
        <h2 className="h1" style={{ maxWidth: '20ch' }}>
          On-device by design. CISO-ready by construction.
        </h2>
        <div className="sec-grid">
          {cards.map((card, i) => (
            <div className="sec-card" key={i}>
              <div className="ico">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
        <div className="cert-strip">
          <span className="it pending">SOC 2 Type 1 · targeted Q3 2026</span>
          <span className="it">GDPR</span>
          <span className="it">On-device LLM option · Apple Silicon</span>
          <span className="it pending">ISO 27001 · targeted 2027</span>
        </div>
      </div>
    </section>
  );
}

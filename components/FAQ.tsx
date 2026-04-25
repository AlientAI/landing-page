'use client';

import { useState, type ReactNode } from 'react';

type Item = { q: string; a: ReactNode };

const items: Item[] = [
  {
    q: "Why won't OpenAI or Anthropic build this?",
    a: (
      <>
        They sell horizontal capability. Alient is a vertical product — a hire, not a model — that
        bundles computer use, memory, safety policy, and enterprise deployment into one SKU. The moat
        is architectural and operational, not weights. If OpenAI or Anthropic ship it, we run on their
        model.
      </>
    ),
  },
  {
    q: 'What happens when it makes a mistake?',
    a: (
      <>
        High-risk actions are gated by a two-layer safety policy and escalate to a human in{' '}
        <span className="mono" style={{ color: 'var(--accent)' }}>
          #agent-escalation
        </span>{' '}
        before running. Low-risk mistakes are caught by the reflector and by CI; when they slip
        through, the same audit trail that tracks the PR tracks the rollback.
      </>
    ),
  },
  {
    q: 'Can it actually replace a junior engineer, or is this a productivity tool?',
    a: (
      <>
        It ships pull requests end to end for work in scope. For work out of scope — ambiguous product
        decisions, cross-team negotiation, novel system design — it escalates. In practice, a single
        Alient closes the equivalent of 0.8–1.2 junior-engineer tickets per week on our design
        partners&apos; backlogs.
      </>
    ),
  },
  {
    q: 'How does it handle codebases with strict security requirements?',
    a: (
      <>
        The device sits inside your perimeter, under your MDM, with your DLP. Nothing leaves the box
        except the LLM API call, which can be pointed at an on-device model on Apple Silicon or a
        private-deployment endpoint you control.
      </>
    ),
  },
  {
    q: 'What languages and frameworks does it support?',
    a: (
      <>
        Anything your Mac can run. We&apos;ve deployed into TypeScript, Python, Go, Rust, Swift,
        Kotlin, and Ruby stacks. The coding agent is framework-agnostic; the computer-use layer means
        it works with your existing IDE, terminal, and review tools — not a replacement for them.
      </>
    ),
  },
  {
    q: 'Does it require any infrastructure on our side?',
    a: (
      <>
        One Mac you provision yourself, on your network, under your MDM. We send you a setup script
        and a checklist; your IT team enrolls the device. Day-one setup is under an hour.
      </>
    ),
  },
  {
    q: 'Can we self-host the LLM?',
    a: (
      <>
        Yes. We support pointing Alient at an on-device model, a VPC-private Bedrock or Azure
        endpoint, or a self-hosted open-weights model. For the most common deployment today the
        endpoint is Anthropic with a zero-retention agreement.
      </>
    ),
  },
  {
    q: 'How is pricing structured?',
    a: (
      <>
        $12,000 per agent per year ($1,000/mo). Flat rate — no token metering, no per-seat surcharge,
        no setup fee. Design-partner terms available through Q3 2026.
      </>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container">
        <div className="kicker" style={{ marginBottom: 18 }}>
          <span className="num">09</span> FAQ
        </div>
        <h2 className="h1" style={{ maxWidth: '18ch' }}>
          Objections, answered plainly.
        </h2>
        <div className="faq-grid">
          {items.map((item, i) => (
            <details
              className="faq-item"
              key={item.q}
              open={openIndex === i}
              onToggle={(e) => {
                const el = e.currentTarget;
                if (el.open) setOpenIndex(i);
                else if (openIndex === i) setOpenIndex(null);
              }}
            >
              <summary className="faq-q">
                {item.q}
                <span className="plus">+</span>
              </summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { ArrowRight } from './icons';

const rows = [
  { label: 'Where it runs', copilot: 'A chat window in your browser', alient: 'A dedicated Mac in your office' },
  { label: 'Identity', copilot: 'Acts as you', alient: 'Its own Slack, email, logins' },
  { label: 'Data path', copilot: 'Your data → vendor cloud', alient: 'Stays on the device' },
  {
    label: 'Output',
    copilot: 'Drafts a human finishes',
    alient: 'Finished work, end to end — code, follow-ups, memos, updates',
  },
];

export default function Shift() {
  return (
    <section className="section">
      <div className="container">
        <div className="kicker" style={{ marginBottom: 36 }}>
          <span className="num">01</span> The shift
        </div>
        <div className="two-col">
          <div>
            <h2 className="h1">You don&apos;t need another chatbot. You need an agent that does the work.</h2>
            <p className="body">
              Every AI tool you&apos;ve tried generates drafts, suggestions, summaries — and leaves
              the work on your team. Alient is the first one with its own machine, its own logins,
              and its own accountability. It picks the task up, finishes it, and tells the team
              it&apos;s done.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link className="btn btn--primary" href="#demo">
                Put Alient to work
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div>
            <table className="cmp-table">
              <thead>
                <tr>
                  <th />
                  <th>Chatbots &amp; copilots</th>
                  <th style={{ color: 'var(--accent)' }}>Alient</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label}>
                    <th>{row.label}</th>
                    <td className="viktor">{row.copilot}</td>
                    <td className="alient">{row.alient}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

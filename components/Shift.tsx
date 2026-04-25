import Link from 'next/link';
import { ArrowRight } from './icons';

const rows = [
  { label: 'Where it runs', copilot: "Your developer's IDE", alient: 'A dedicated Mac in your office' },
  { label: 'Identity', copilot: 'Acts as your developer', alient: 'Its own Slack, GitHub, email' },
  { label: 'Data path', copilot: 'Your code → vendor cloud', alient: 'Stays on the device' },
  { label: 'Output', copilot: 'Suggestions a human ships', alient: 'Pull requests, end to end' },
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
            <h2 className="h1">You don&apos;t need another copilot. You need another engineer.</h2>
            <p className="body">
              Every AI tool you&apos;ve tried generates code, suggestions, summaries — and leaves the work
              on your team. Alient is the first one with its own laptop, its own login, and its own
              accountability. It picks the ticket up, ships it, and tells the team it&apos;s done.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link className="btn btn--primary" href="#demo">
                Hire your first Alient
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div>
            <table className="cmp-table">
              <thead>
                <tr>
                  <th />
                  <th>Copilots &amp; assistants</th>
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

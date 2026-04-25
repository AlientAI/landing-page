import Link from 'next/link';
import { ArrowRight, MailIcon } from './icons';

const rows = [
  {
    label: 'Fully-loaded cost',
    junior: '$180,000 / yr',
    senior: '$360,000 / yr',
    alient: '$12,000 / yr',
    juniorNum: true,
    seniorNum: true,
    alientNum: true,
  },
  {
    label: 'Ramp to first PR',
    junior: '30–90 days',
    senior: '14–30 days',
    alient: 'Day one',
  },
  {
    label: 'Hours active',
    junior: '40 / week',
    senior: '50 / week',
    alient: '24 × 7',
    juniorNum: true,
    seniorNum: true,
    alientNum: true,
  },
  { label: 'Severance', junior: 'Yes', senior: 'Yes', alient: 'None' },
  {
    label: 'Memory of decisions',
    junior: 'Until they leave',
    senior: 'Until they leave',
    alient: 'Permanent',
  },
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="kicker" style={{ marginBottom: 18 }}>
          <span className="num">06</span> Economics
        </div>
        <h2 className="h1" style={{ maxWidth: '20ch' }}>
          The economics of an AI hire.
        </h2>
        <p className="sub" style={{ marginTop: 18 }}>
          Priced against the role it replaces, not against tokens.
        </p>

        <table className="roi-table">
          <thead>
            <tr>
              <th />
              <th>Junior engineer</th>
              <th>Senior engineer</th>
              <th className="alient">Alient</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th>{row.label}</th>
                <td className={row.juniorNum ? 'num' : undefined}>{row.junior}</td>
                <td className={row.seniorNum ? 'num' : undefined}>{row.senior}</td>
                <td className={`alient${row.alientNum ? ' num' : ''}`}>{row.alient}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="roi-footnote">
          $12,000 per agent per year ($1,000/mo). Flat rate — no token metering, no setup fees.
          Design-partner terms available.
        </p>
        <div className="roi-ctas">
          <Link className="btn btn--primary" href="#demo">
            Request a demo
            <ArrowRight />
          </Link>
          <a className="btn btn--ghost" href="mailto:founders@alient.ai?subject=Alient%20-%20Pricing">
            Talk to founders
            <MailIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

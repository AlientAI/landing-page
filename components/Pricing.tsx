import Link from 'next/link';
import { ArrowRight, MailIcon } from './icons';

const rows = [
  {
    label: 'Fully-loaded cost',
    hire: '$180,000 – $360,000 / yr',
    alient: '$12,000 / yr',
    hireNum: true,
    alientNum: true,
  },
  {
    label: 'Ramp to first finished task',
    hire: '30–90 days',
    alient: 'Day one',
  },
  {
    label: 'Hours active',
    hire: '40–50 / week',
    alient: '24 × 7',
    hireNum: true,
    alientNum: true,
  },
  { label: 'Severance', hire: 'Yes', alient: 'None' },
  {
    label: 'Memory of decisions',
    hire: 'Until they leave',
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
              <th>A full-time hire</th>
              <th className="alient">Alient</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th>{row.label}</th>
                <td className={row.hireNum ? 'num' : undefined}>{row.hire}</td>
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

import Link from 'next/link';
import { ArrowRight, MailIcon } from './icons';

export default function CtaStrip() {
  return (
    <section className="cta-strip">
      <div className="container cta-strip-inner">
        <div className="cta-strip-text">
          <div className="kicker">
            <span className="num">▲</span> Get started
          </div>
          <h3>See what Alient can do for your team.</h3>
        </div>
        <div className="cta-strip-actions">
          <Link className="btn btn--primary" href="#demo">
            Request a demo
            <ArrowRight />
          </Link>
          <a className="btn btn--ghost" href="mailto:founders@alient.ai?subject=Alient%20-%20Hello">
            Contact us
            <MailIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { ArrowRight } from './icons';

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="nav-left">
          <Link className="wordmark" href="#product">
            Alient
          </Link>
          <span className="heartbeat">
            <span className="dot" />
            Agent online
          </span>
        </div>
        <nav className="nav-center">
          <Link href="#product">Product</Link>
          <Link href="#architecture">Architecture</Link>
          <Link href="#security">Security</Link>
          <Link href="#pricing">Pricing</Link>
        </nav>
        <div className="nav-right">
          <Link className="btn btn--primary" href="#demo">
            Request a demo
            <ArrowRight />
          </Link>
        </div>
      </div>
    </header>
  );
}

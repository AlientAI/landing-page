import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="wordmark">Alient</div>
            <p>The AI software engineer that runs on a real Mac. Made in Austin, TX.</p>
          </div>
          <nav className="foot-links" aria-label="Footer">
            <Link href="#product">Overview</Link>
            <Link href="#architecture">Architecture</Link>
            <Link href="#security">Security</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#demo">Request a demo</Link>
          </nav>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Alient, Inc.</span>
          <span>Made in Austin, TX</span>
        </div>
      </div>
    </footer>
  );
}

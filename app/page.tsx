import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Pricing />

      {/* Contact / Demo Request */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-sm font-medium uppercase tracking-widest mb-4"
              style={{ color: 'var(--accent-bright)' }}
            >
              Get Started
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Request a Demo
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              See Alient join a real team, pick up a real ticket, and ship real code.
              We&apos;ll show you everything in 30 minutes.
            </p>
          </div>

          <div
            className="rounded-2xl p-8"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

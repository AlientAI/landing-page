import ContactForm from './ContactForm';

export default function FinalCta() {
  return (
    <section className="final" id="demo">
      <div className="container">
        <h2>Your first AI Teammate starts Monday.</h2>
        <p className="fine" style={{ marginTop: 18 }}>
          30-minute intro call. We&apos;ll walk you through how Alient works.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}

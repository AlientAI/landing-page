'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckIcon } from './icons';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const sizeOptions = [
  { value: '1-10', label: '1 – 10' },
  { value: '11-50', label: '11 – 50' },
  { value: '51-200', label: '51 – 200' },
  { value: '201-1000', label: '201 – 1,000' },
  { value: '1001-5000', label: '1,001 – 5,000' },
  { value: '5000+', label: '5,000+' },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', company: '', size: '' });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const update = (key: keyof typeof form) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const isFieldInvalid = (key: keyof typeof form): boolean => {
    if (!touched[key]) return false;
    const value = form[key];
    if (!value) return true;
    if (key === 'email' && !emailRegex.test(value)) return true;
    return false;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, company: true, size: true });

    if (!form.name || !form.company || !form.size) {
      setError('Please fill in every field.');
      setState('error');
      return;
    }
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid work email.');
      setState('error');
      return;
    }

    setState('loading');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setState('error');
        return;
      }
      setState('success');
    } catch {
      setError('Network error. Please try again.');
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="contact-form" aria-live="polite">
        <div className="success">
          <div className="check">
            <CheckIcon width={20} height={20} />
          </div>
          <h4>Got it — talk soon.</h4>
          <p>
            We&apos;ll reach out from{' '}
            <span className="mono" style={{ color: 'var(--accent)' }}>
              founders@alient.ai
            </span>{' '}
            within one business day to schedule the call.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="grid">
        <div className="field">
          <label htmlFor="cf-name">Your name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            placeholder="Jane Reyes"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update('name')(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            className={isFieldInvalid('name') ? 'invalid' : ''}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Work email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder="jane@acme.com"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update('email')(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            className={isFieldInvalid('email') ? 'invalid' : ''}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-company">Company</label>
          <input
            id="cf-company"
            name="company"
            type="text"
            required
            placeholder="Acme, Inc."
            autoComplete="organization"
            value={form.company}
            onChange={(e) => update('company')(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, company: true }))}
            className={isFieldInvalid('company') ? 'invalid' : ''}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-size">Company size</label>
          <select
            id="cf-size"
            name="size"
            required
            value={form.size}
            onChange={(e) => update('size')(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, size: true }))}
            className={isFieldInvalid('size') ? 'invalid' : ''}
          >
            <option value="" disabled>
              Select range…
            </option>
            {sizeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="submit-row">
        <p className="privacy">We&apos;ll reply within one business day. No drip campaigns, no shared lists.</p>
        <button
          className="btn btn--primary submit-btn"
          type="submit"
          disabled={state === 'loading'}
        >
          {state === 'loading' ? 'Sending…' : 'Request a demo'}
          <ArrowRight />
        </button>
      </div>
      {state === 'error' && error && <p className="form-error">{error}</p>}
    </form>
  );
}

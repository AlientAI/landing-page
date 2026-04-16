'use client';

import { useState, FormEvent } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('loading');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
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
      <div className="text-center py-16">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-6"
          style={{
            background: 'var(--accent-glow)',
            border: '1px solid var(--border-accent)',
          }}
        >
          ✓
        </div>
        <h3
          className="text-2xl font-bold mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          You&apos;re on the list.
        </h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          We&apos;ll be in touch shortly to schedule your demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {[
        { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Alex Chen', key: 'name' as const },
        { id: 'email', label: 'Work Email', type: 'email', placeholder: 'alex@company.com', key: 'email' as const },
        { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 000-0000', key: 'phone' as const },
      ].map((field) => (
        <div key={field.id}>
          <label
            htmlFor={field.id}
            className="block text-sm font-medium mb-2"
            style={{ color: 'var(--text-secondary)' }}
          >
            {field.label}
          </label>
          <input
            id={field.id}
            type={field.type}
            required
            value={form[field.key]}
            onChange={(e) => setForm((prev) => ({ ...prev, [field.key]: e.target.value }))}
            placeholder={field.placeholder}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
            style={{
              background: 'var(--bg-primary)',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.boxShadow = '0 0 0 3px var(--accent-glow)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>
      ))}

      {state === 'error' && (
        <p className="text-sm" style={{ color: '#f87171' }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full py-4 rounded-xl font-semibold text-base transition-all duration-200 cursor-pointer"
        style={{
          background: state === 'loading' ? 'var(--text-muted)' : 'var(--accent)',
          color: '#fff',
          boxShadow: state === 'loading' ? 'none' : '0 0 30px rgba(99, 102, 241, 0.3)',
          cursor: state === 'loading' ? 'not-allowed' : 'pointer',
        }}
      >
        {state === 'loading' ? 'Sending…' : 'Request a Demo →'}
      </button>

      <p
        className="text-xs text-center pt-1"
        style={{ color: 'var(--text-muted)' }}
      >
        No spam. We&apos;ll reach out within 24 hours.
      </p>
    </form>
  );
}

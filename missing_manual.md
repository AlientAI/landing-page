# Manual setup required

This page builds and serves cleanly, but a few things still need real values
before the site is launch-ready.

## Required to make the contact form work end-to-end

| What                | Where it lives                  | How to set it                              |
|---------------------|---------------------------------|--------------------------------------------|
| `DATABASE_URL`      | `.env.local`                    | A reachable Postgres connection string. The form posts to `/api/contact`, which inserts into `contact_submissions`. Without this, `POST /api/contact` returns 500 even though validation succeeds. |
| `contact_submissions` table | Run `psql $DATABASE_URL -f schema.sql` | Schema now stores `name`, `email`, `company`, `company_size`. If a previous version of this table exists (with a `phone` column), drop or migrate it before running the new schema. |

A `.env.local.example` file is already in the repo. Copy it to `.env.local` and
fill in the value.

## Replace placeholder content before launch

| Section                     | What's a placeholder today                                                                 | What needs to happen |
|-----------------------------|---------------------------------------------------------------------------------------------|----------------------|
| Live demo (`#live-demo`)    | A `[ video drop-in · 1280×720 · Mux ]` placeholder.                                         | Replace `components/LiveDemo.tsx`'s `.demo-placeholder` with the real Mux player (or `<video src=…>`) when the recording is ready. CSS already reserves the slot at the right dimensions. |
| Benchmark links             | `View leaderboard →`, `Methodology →`, `Read the white paper →` are currently inert spans. | Convert to anchor tags pointing at the real OSWorld leaderboard URL, methodology PDF, and white paper. |
| Founder portraits           | Striped monogram placeholders (A.K. / M.R.).                                                 | Drop real headshots into `components/Founders.tsx`'s `.portrait` blocks. |
| Founder names               | "A. Koenig" / "M. Reyes" — illustrative.                                                    | Confirm and replace with real founder names. |
| Backed-by line              | "[angel roster TBD]" in the founders section.                                                | Fill in once announceable. |
| FAQ "How is pricing structured?" / Pricing footnote | Quotes $12k/yr, $1k/mo, design-partner terms through Q3 2026. | Confirm these are still accurate before the site goes live. |
| `mailto:founders@alient.ai` | Used in CTA strip and Pricing "Talk to founders".                                            | Confirm the inbox routes correctly, or swap for the real founder address. |

## Things that are real and ready

- All thirteen sections from the design (nav, hero with animated MacBook, live-demo
  strip, the shift / comparison table, how-it-works, benchmark + chart, inline CTA
  strip, architecture, security, pricing/ROI, founders, FAQ, final CTA + contact
  form, floating CTA, footer).
- Heartbeat pulse, Slack toast animation, fake-cursor, terminal type-in animation —
  all running.
- Tailwind v4 + `next/font/google` for JetBrains Mono and Source Serif 4. Fontshare
  is still loaded via `<link>` for General Sans (next/font has no equivalent).
- API validation: `/api/contact` rejects missing/invalid fields (including invalid
  `size` enum) with a 400 before touching the database.
- Lints clean; production build succeeds (`npm run lint`, `npm run build`).

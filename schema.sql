CREATE TABLE IF NOT EXISTS contact_submissions (
  id           SERIAL PRIMARY KEY,
  name         TEXT NOT NULL,
  email        TEXT NOT NULL,
  company      TEXT NOT NULL,
  company_size TEXT NOT NULL,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

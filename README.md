# Alient — Marketing Landing Page

A Next.js marketing site for [Alient](https://alient.ai) — the AI software engineer.

## Stack

- **Next.js 14+** (App Router, TypeScript)
- **Tailwind CSS** — dark premium theme
- **PostgreSQL** — contact form submissions stored via `pg`

## Prerequisites

- Node.js 18+
- npm
- PostgreSQL instance (local or hosted)

## Setup

### 1. Clone and install

```bash
git clone <repo-url>
cd landing-page
npm install
```

### 2. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and set your PostgreSQL connection string:

```
DATABASE_URL=postgres://username:password@localhost:5432/alient
```

### 3. Initialize the database

Run the schema file against your PostgreSQL instance:

```bash
psql $DATABASE_URL -f schema.sql
```

Or using `psql` directly:

```bash
psql postgres://username:password@localhost:5432/alient -f schema.sql
```

This creates the `contact_submissions` table:

```sql
CREATE TABLE IF NOT EXISTS contact_submissions (
  id         SERIAL PRIMARY KEY,
  name       TEXT NOT NULL,
  email      TEXT NOT NULL,
  phone      TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## API

### `POST /api/contact`

Stores a demo request.

**Request body:**
```json
{
  "name": "Alex Chen",
  "email": "alex@company.com",
  "phone": "+1 (555) 000-0000"
}
```

**Response:**
```json
{ "success": true }
```

**Error (400):**
```json
{ "error": "All fields are required." }
```

## Build for production

```bash
npm run build
npm start
```

## Environment Variables

| Variable       | Description                              | Required |
|----------------|------------------------------------------|----------|
| `DATABASE_URL` | PostgreSQL connection string             | Yes      |

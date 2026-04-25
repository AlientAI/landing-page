import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

const ALLOWED_SIZES = new Set([
  '1-10',
  '11-50',
  '51-200',
  '201-1000',
  '1001-5000',
  '5000+',
]);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, company, size } = body as Record<string, unknown>;

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof company !== 'string' ||
    typeof size !== 'string' ||
    !name.trim() ||
    !email.trim() ||
    !company.trim() ||
    !size.trim()
  ) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  if (!ALLOWED_SIZES.has(size)) {
    return NextResponse.json({ error: 'Invalid company size.' }, { status: 400 });
  }

  await pool.query(
    'INSERT INTO contact_submissions (name, email, company, company_size) VALUES ($1, $2, $3, $4)',
    [
      name.trim().slice(0, 255),
      email.trim().slice(0, 255),
      company.trim().slice(0, 255),
      size.trim().slice(0, 32),
    ]
  );

  return NextResponse.json({ success: true });
}

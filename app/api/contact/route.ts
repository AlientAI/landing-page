import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone } = body;

  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  await pool.query(
    'INSERT INTO contact_submissions (name, email, phone) VALUES ($1, $2, $3)',
    [String(name).slice(0, 255), String(email).slice(0, 255), String(phone).slice(0, 50)]
  );

  return NextResponse.json({ success: true });
}

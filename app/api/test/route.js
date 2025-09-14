// app/api/test/route.js
import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = createConnection(); // This is a pool now
    const [rows] = await db.query('SELECT * FROM register');
    return NextResponse.json(rows);
  } catch (error) {
    console.error('DB Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

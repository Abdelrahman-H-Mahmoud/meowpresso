import { waitlistService } from '@/server/waitlist/waitlist.service';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ exists: false });
  }

  try {
    const user = await waitlistService.findByEmail(email);
    if (user) {
      return NextResponse.json({ 
        exists: true,
        position: user.position,
        name: user.name
      });
    }
    return NextResponse.json({ exists: false });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to check email" },
      { status: 500 }
    );
  }
} 
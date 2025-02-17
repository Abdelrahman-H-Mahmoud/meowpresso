import { waitlistService } from '@/server/waitlist/waitlist.service';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const count = await waitlistService.getTotalCount();
    return NextResponse.json({ count });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to get count" },
      { status: 500 }
    );
  }
} 
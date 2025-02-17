import { waitlistService } from '@/server/waitlist/waitlist.service';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const waitlistSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name is too short'),
  phone: z.string().min(8, 'Invalid phone number'),
  countryCode: z.string().min(2, 'Invalid country code'),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = waitlistSchema.parse(body);

    await waitlistService.create(validated);

    return NextResponse.json(
      { message: "Successfully joined the waitlist!" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid data", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
} 
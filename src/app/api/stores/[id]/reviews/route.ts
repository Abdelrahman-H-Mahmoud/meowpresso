import { storesService } from '@/server/stores/stores.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const page = Number(request.nextUrl.searchParams.get('page')) || 1;
    const { reviews, total } = await storesService.getStoreReviews(id, page);
    return NextResponse.json({ reviews, total }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
} 
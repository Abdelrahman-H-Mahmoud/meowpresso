import { blogsService } from '@/server/blogs/blogs.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const blog = blogsService.getBlogById(id);
    
    return NextResponse.json(
      { blog },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    if (error instanceof Error && error.message === 'Blog not found') {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
} 
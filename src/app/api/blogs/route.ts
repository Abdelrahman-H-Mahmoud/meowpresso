import { blogsService } from '@/server/blogs/blogs.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const tags = searchParams.get('tags')?.split(',');

    const filteredBlogs = await blogsService.getBlogs(tags);
    return NextResponse.json(
      { blogs: filteredBlogs },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
} 
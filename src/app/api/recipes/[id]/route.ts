import { recipesService } from '@/server/recipes/recipes.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const recipe = await recipesService.getRecipeById(id);
    
    return NextResponse.json(
      { recipe },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    if (error instanceof Error && error.message === 'Recipe not found') {
      return NextResponse.json(
        { error: 'Recipe not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to fetch recipe' },
      { status: 500 }
    );
  }
} 
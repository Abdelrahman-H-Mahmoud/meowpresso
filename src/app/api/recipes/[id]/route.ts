import { recipes } from '@/data/recipes';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const recipe = recipes.find(r => r.id === id);
    
    if (!recipe) {
      return NextResponse.json(
        { error: 'Recipe not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ recipe }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch recipe' },
      { status: 500 }
    );
  }
} 
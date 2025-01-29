import { recipesService } from '@/server/recipes/recipes.service';
import { RecipeCategory } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const categories = searchParams.get('categories')?.split(',') as RecipeCategory[];

    const filteredRecipes =  await recipesService.getRecipes(categories);

    return NextResponse.json(
      { recipes: filteredRecipes },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch recipes' },
      { status: 500 }
    );
  }
} 
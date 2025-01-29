import { RecipeCategory } from '@/data/recipes';
import { recipesService } from '@/server/recipes/recipes.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const categories = searchParams.get('categories')?.split(',') as RecipeCategory[] | undefined;

    const filteredRecipes = recipesService.getRecipes(categories);

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
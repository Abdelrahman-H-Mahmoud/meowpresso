import { recipes, RecipeCategory } from '@/data/recipes';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const categories = searchParams.get('categories')?.split(',') as RecipeCategory[] | undefined;

    let filteredRecipes = recipes;
    
    if (categories && categories.length > 0) {
      filteredRecipes = recipes.filter(recipe =>
        recipe.categories.some(category => categories.includes(category))
      );
    }

    return NextResponse.json(
      { recipes: filteredRecipes },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch recipes' },
      { status: 500 }
    );
  }
} 
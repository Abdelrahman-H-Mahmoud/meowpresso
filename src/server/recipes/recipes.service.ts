import { PrismaClient, RecipeCategory } from '@prisma/client';

const prisma = new PrismaClient();

export class RecipesService {
  async getRecipes(categories?: RecipeCategory[]) {
    try {
      let filteredRecipes;

      if (categories && categories.length > 0) {
        filteredRecipes = await prisma.recipe.findMany({
          where: {
            categories: {
              hasSome: categories,
            },
          },
        });
      } else {
        filteredRecipes = await prisma.recipe.findMany();
      }

      return filteredRecipes;
    } catch (error) {
      console.error('Error in RecipesService.getRecipes:', error);
      throw error;
    }
  }

  async getRecipeById(id: string) {
    try {
      const recipe = await prisma.recipe.findUnique({
        where: { id },
      });

      if (!recipe) {
        throw new Error('Recipe not found');
      }

      return recipe;
    } catch (error) {
      console.error('Error in RecipesService.getRecipeById:', error);
      throw error;
    }
  }
}

// Create a singleton instance
export const recipesService = new RecipesService();

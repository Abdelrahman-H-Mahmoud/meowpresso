import { recipes, RecipeCategory } from '@/data/recipes';

export class RecipesService {
  getRecipes(categories?: RecipeCategory[]) {
    try {
      let filteredRecipes = recipes;
      
      if (categories && categories.length > 0) {
        filteredRecipes = recipes.filter(recipe =>
          recipe.categories.some(category => categories.includes(category))
        );
      }

      return filteredRecipes;
    } catch (error) {
      console.error('Error in RecipesService.getRecipes:', error);
      throw error;
    }
  }

  getRecipeById(id: string) {
    try {
      const recipe = recipes.find(recipe => recipe.id === id);
      
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

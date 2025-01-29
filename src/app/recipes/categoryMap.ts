import { RecipeCategory } from "@prisma/client";

export const categoryMap: { [key in RecipeCategory]: string } = {
  [RecipeCategory.HOT_COFFEE]: "Hot Coffee",
  [RecipeCategory.COLD_COFFEE]: "Cold Coffee",
  [RecipeCategory.ESPRESSO]: "Espresso",
  [RecipeCategory.SPECIALTY]: "Specialty",
  [RecipeCategory.BEGINNER]: "Beginner",
  [RecipeCategory.ADVANCED]: "Advanced",
  [RecipeCategory.QUICK]: "Quick",
  [RecipeCategory.TRADITIONAL]: "Traditional"
};
import { addMealsRoute } from "./addMealRoute";
import { deleteIngredientRoute } from "./deleteIngredientRoute";
import { deleteMealRoute } from "./deleteMealRoute";
import { getIngredientsRoute } from "./getIngredientsRoute";
import { getMealsRoute } from "./getMealsRoute";
import { getShoppingListRoute } from "./getShoppingListRoute";
import { searchRecipeRoute } from "./searchRecipesRoute";
import { addIngredientRoute } from "./addIngredientRoute";

export const routes = [
  addIngredientRoute,
  addMealsRoute,
  deleteIngredientRoute,
  deleteMealRoute,
  getIngredientsRoute,
  getMealsRoute,
  getShoppingListRoute,
  searchRecipeRoute,
];

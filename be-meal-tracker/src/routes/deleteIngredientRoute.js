import { deleteIngredient, getIngredients } from "../db";

export const deleteIngredientRoute = {
  path: "/ingredients/:name",
  method: "delete",
  handler: async (req, res) => {
    // res.send("Deleting Ingredient");
    const { name } = req.params;
    await deleteIngredient(name);
    const updatedIngredients = await getIngredients();
    res.status(200).json(updatedIngredients);
  },
};

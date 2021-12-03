import { deleteMeal, getPopulatedMeals } from "../db";

export const deleteMealRoute = {
  path: "/meals/:id",
  method: "delete",
  handler: async (req, res) => {
    // res.send("Deleting Meal");
    const { id } = req.prams;
    await deleteMeal(id);
    const updatedMeals = await getPopulatedMeals();
    res.status(200).json(updatedMeals);
  },
};

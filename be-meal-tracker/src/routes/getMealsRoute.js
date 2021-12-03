import { getPopulatedMeals } from "../db";

export const getMealsRoute = {
  path: "/meals",
  method: "get",
  handler: async (req, res) => {
    // res.send("Getting meals");
    const meals = await getPopulatedMeals();
    res.status(200).json(meals);
  },
};

export const addIngredientRoute = {
  path: "/ingredients",
  method: "post",
  handler: async (req, res) => {
    res.send("Adding ingredients");
  },
};

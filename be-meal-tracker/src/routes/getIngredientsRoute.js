export const getIngredientsRoute = {
  path: "/ingredients",
  method: "get",
  handler: async (req, res) => {
    res.send("Getting Ingredients");
  },
};

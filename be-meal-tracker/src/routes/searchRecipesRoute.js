export const searchRecipeRoute = {
  path: "/recipes",
  method: "get",
  handler: async (req, res) => {
    res.send("Getting recipes");
  },
};

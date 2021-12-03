import { ObjectId } from "bson";
import { db } from "./db";

export const deleteMeal = async (mealId) => {
  const connection = db.getConnection();
  await connection.collection("meals").deleteOne({ id: ObjectId(mealId) });
};

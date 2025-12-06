
import mongoose from "mongoose";

export const Dbconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL||"mongodb://127.0.0.1:27017/todo");
    console.log("Database successfully connected");
  } catch (error) {
    console.log("Database error:", error.message);
  }
};


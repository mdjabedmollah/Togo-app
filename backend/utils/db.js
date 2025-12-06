// import mongoose from "mongoose";
// export const Dbconnection=async()=>{
// try {
//    await mongoose.createConnection('mongodb://127.0.0.1:27017/todo').asPromise();
//     console.log("Data base Successfully connected")

// } catch (error) {
//     console.log("data base error ",error)
// }
// }

import mongoose from "mongoose";

export const Dbconnection = async () => {
  try {
    await mongoose.connect("mongodb://jabed:password123@localhost:27017/");
    console.log("Database successfully connected");
  } catch (error) {
    console.log("Database error:", error.message);
  }
};


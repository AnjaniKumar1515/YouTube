// require("dotenv").config({path: "./env"}) //We don't wanna use require here since we are using import for everything else 
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

connectDB();













// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/ ${DB_NAME}`)
//   } catch (error) {
//     console.error("Error: ", error);
//     throw err;
//   }
// })();
 
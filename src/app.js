import express, { urlencoded } from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";

//Middleware Setups
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //This is to handle json requests
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //This is to handle form data
app.use(express.static("public")); //This is to serve static files
app.use(cookieParser());

//Routes
import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);
//This is to use the userRouter for all routes starting with /users
//so basically it will be http://localhost:5000/users/register or any other method that is defined in the userRouter
//We are using app.use because when we are using routes through imported files, we need to use a middleware to use the routes
//Router ko lane ke liye middleware use karna padta hai agar nahi karna to route yahi likho or logic yahi likho

export default app;

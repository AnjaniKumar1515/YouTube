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

app.use(express.json({limit: "16kb"})); //This is to handle json requests
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //This is to handle form data
app.use(express.static("public")); //This is to serve static files
app.use(cookieParser())

export default app;

import { asyncHandler } from "../utils/asyncHandler.js";
import { apiErrors } from "../utils/apiErrors.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  //Get user data from the request body
  //Validate the user data -not empty
  //Check if the user already exists in the database: check email,username whatever is unique
  //Check for images
  //Upload images to cloudinary
  //Create user object - create entry in db
  //Remove password and referesh token feed from response
  //Check for user creation - send response

  const { username, email, fullName, password } = req.body;
  if (
    [fullName, username, email, password].some((field) => field.trim() === "")
  ) {
    throw new apiErrors(400, "All fields are required");
  }
  const existedUser = User.findOne({ $or: [{ username }, { email }] });
  if (existedUser) {
    throw new apiErrors(409, "User already exists");
  }
  const avatarLocalPath = req.files?.avatar[0]?.path 
  //This is provided by mutler since middleware always add something to the request body
  const coverImageLocalPath = req.files?.coverImage[0]?.path;
  if(!avatarLocalPath) {
    throw new apiErrors(400, "Please provide the Avatar file!")
  }
});
/*
const registerUser = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "User registered successfully" });
});  This is here to show you how a basic controller works*/
export { registerUser };

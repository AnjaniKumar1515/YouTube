import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //Upload file to cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //File has been uploaded successfully
    console.log(
      "File has been successfully uploaded to cloudinary ⛈️",
      response.url
    );
    return response;
  } catch {
    fs.unlinkSync(localFilePath); //Remove the locally saved temporary file if it fails to upload to cloudinary
    return null
  }
};



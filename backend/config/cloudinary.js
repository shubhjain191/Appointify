import { v2 as cloudinary } from "cloudinary"

const connectCloudinary = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET_KEY,
    })
    console.log("Cloudinary Connected")
  } catch (error) {
    console.error(`Cloudinary Connection Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectCloudinary


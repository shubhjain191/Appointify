import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import adminRouter from "./routes/adminRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import userRouter from "./routes/userRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000

// Connect to MongoDB
connectDB().catch((err) => console.error("MongoDB connection error:", err))

// Connect to Cloudinary
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)
app.use("/api/user", userRouter)

app.get("/", (req, res) => {
  res.send("API Working")
})

app.listen(port, () => console.log(`Server started on port ${port}`))

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...")
  console.error(err)
  process.exit(1)
})


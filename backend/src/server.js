import "dotenv/config";
import app from "./app.js";
import mongoose from "mongoose"

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected")
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error)
  })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
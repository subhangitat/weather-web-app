import express from "express";
import cors from "cors";
import weatherRoutes from "./routes/weatherRoutes.js";
import authRoutes from "./routes/authRoutes.js"
import favoriteRoutes from "./routes/favoriteRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Weather App Backend is running",
  });
});

app.use("/api/weather", weatherRoutes);
app.use("/api/auth", authRoutes)
app.use("/api/favorites", favoriteRoutes)

export default app;
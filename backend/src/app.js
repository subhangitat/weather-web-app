import express from "express";
import cors from "cors";
import weatherRoutes from "./routes/weatherRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Weather App Backend is running",
  });
});

app.use("/api/weather", weatherRoutes);

export default app;
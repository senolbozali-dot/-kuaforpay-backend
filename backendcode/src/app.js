import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.route.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/health", healthRoutes);

export default app;

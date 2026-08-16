import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(express.json());
app.use(errorHandler);

app.use("/api/tasks", taskRoutes);

app.use("/api/auth", authRoutes);

export default app;
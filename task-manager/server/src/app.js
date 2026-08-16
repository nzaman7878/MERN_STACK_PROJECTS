import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";

const app = express();

app.use(express.json());
app.use(errorHandler);

app.use("/api/tasks", taskRoutes);

export default app;
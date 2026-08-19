import express from 'express';
import { getTasks, createTask, getTask, updateTask, deleteTask  } from '../controllers/taskController.js';
import  protect  from '../middleware/authMiddleware.js';

const router = express.Router();

router.get("/", protect, getTasks);

router.post("/", protect, createTask);

router.get("/:id", protect, getTask);

router.patch("/:id", protect, updateTask);

router.delete("/:id", protect, deleteTask);
export default router;
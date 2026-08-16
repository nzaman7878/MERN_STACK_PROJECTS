import "dotenv/config";
import express from "express";

import connectDB from "./src/config/db.js";
import Task from "./src/models/task.js";

const PORT = process.env.PORT || 5000;

let tasks = [
    {
        id: 1,
        title: "Learn Node.js",
        completed: true
    },
    {
        id: 2,
        title: "Learn Express.js",
        completed: false
    }
];

const app = express();
app.use(express.json());

app.get("/", (req, res)=> {
    res.send("Hello from express");
});

app.get("/api/tasks", async (req, res)=>{
   const tasks = await Task.find();

res.json(tasks);
})

app.get("/api/tasks/:id", (req, res)=>{
    const tasksId = Number(req.params.id);
    const task = tasks.find(tasks => tasks.id === tasksId);

    if (!task){
        res.status(404).json({
            message: "Task not found"
        });
    }
res.status(200).json(task);
})

app.post("/api/tasks", async (req, res)=> {
    const {title} = req.body; 

    if(!title){
        return res.status(400).json({
            message: "Title is required"
        });
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        completed: false
    };

    const task = await Task.create({
    title: req.body.title
});
    res.status(201).json(task);
});

app.patch("/api/tasks/:id", (req, res)=>{
    const tasksId = Number( req.params.id);
    const task = tasks.find(tasks => tasks.id === tasksId);

    if(!task){
        return res.status(404).json({
            message: "Task not found"
        });
    }

    const { title, completed } = req.body;
    if(title !== undefined) task.title = title;
    if(completed !== undefined) task.completed = completed;

    res.status(200).json(task);
})

app.delete("/api/tasks/:id", (req, res)=> {
    const id = Number(req.params.id);

    const taskExists = tasks.some(task => task.id === id);
    if (!taskExists) {
        return res.status(404).json({
            message: "Task not found"
        })
    }

    tasks = tasks.filter(task => task.id !== id);
    res.status(200).json({
        message: "Task deleted successfully"
    });
})


const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

startServer();
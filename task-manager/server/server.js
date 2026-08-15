import express from "express";

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

app.get("/", (req, res)=> {
    res.send("Hello from express");
});

app.get("/api/tasks", (req, res)=>{
    res.status(200).json(tasks);
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

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})
import express from "express";

const app = express();

app.get("/", (req, res)=> {
    res.send("Hello from express");
});

app.get("/api/tasks", (req, res)=>{
    res.json([
        {
            id :1,
            title: "Learn Node.js",

        },
        {
            id :2,
            title : "Learn Express.js"
        }
    ])
})

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})
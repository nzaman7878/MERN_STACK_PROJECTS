import http from "http";

const server = http.createServer((req, res) => {
   if (req.method === "GET" && req.url === "/"){
    res.end("Home Page");
    return;
   }

   if (req.method === "GET" && req.url === "/tasks"){
    res.end("Tasks Page");
    return;
   }

   res.statusCode = 404;
    res.end("Page Not Found");
})

server.listen(5000, ()=> {
    console.log("Server is listening on port 5000...");
})
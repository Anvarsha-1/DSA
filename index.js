const http = require("http")


const server = http.createServer((req, res) => {
     console.log("Method:", req.method);
     console.log("URL:", req.url);

     if (req.url === "/" && req.method === "GET") {
          res.end("Home Page")
     }else if (req.url === "/about" && req.method === "GET") {
          res.end("About Page")
     }else{
          res.writeHead(404)
          res.end("Not found")
     }
})


server.listen(3000, () => {
     console.log("Server is running")
})


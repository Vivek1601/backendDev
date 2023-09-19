const http = require("http");


const server = http.createServer(function (req, res) {
    res.end("Hello from other side");
  })

  server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port no. 8000");
  });
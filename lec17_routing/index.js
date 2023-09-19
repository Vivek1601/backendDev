const http = require("http");


const server = http.createServer(function (req, res) {
    // res.end("Hello from other side");
    // console.log(req.url);
    
    if(req.url = "/"){
      res.end("hello from home side")
    }else if(req.url = "/about"){
      res.end("Hello from about side")
    }else if(req.url = "/contact"){
      res.end("Hello from contact side")
    }else{
      res.writeHead(404,{"Content-type" : "text/html"});
      // res.end("404 error pages, Page doesn't exist")
      res.end("<h1>404 error pages, Page doesn't exist</h1>")
    }


  })

  server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port no. 8000");
  });
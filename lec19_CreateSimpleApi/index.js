const http = require("http");
const fs = require("fs");
const { dirname } = require("path");

const server = http.createServer(function (req, res) {
    // res.end("Hello from other side");
    // console.log(req.url);

    const data = fs.readFileSync(`${_dirname}/userApi/userApi.json`,"utf-8")
      // console.log(data);
      const objData = JSON.parse(data);
      
    
    if(req.url = "/"){
      res.end("hello from home side")
    }else if(req.url = "/about"){
      res.end("Hello from about side")
    }else if(req.url = "/contact"){
      res.end("Hello from contact side")
    }else if(req.url = "/userapi"){
      // res.end("Hello from userApi side")
      // fs.readFile(`${_dirname}/userApi/userApi.json`,"utf-8",(err,data) => {
      //   // console.log(data);
      // res.end(data);
      //   const objData = JSON.parse(data);
      //   res.end(objData[0].name);
      res.writeHead(200,{"Content-type" : "application/json"})
      res.end(objData[0].email);
        
      }else{
      res.writeHead(404,{"Content-type" : "text/html"});
      // res.end("404 error pages, Page doesn't exist")
      res.end("<h1>404 error pages, Page doesn't exist</h1>")
    }


  })

  server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port no. 8000");
  });
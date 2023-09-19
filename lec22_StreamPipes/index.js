const fs = require("fs");
const http = require("http");


const server = http.createServer();


server.on('request',(req,res)=>{
  
  //1st Way 
  // fs.readFile("input.txt",(err,data) =>{
  //   if(err)return console.log(err);
  //   res.end(data.toString());
  // })


//2nd way 
//Reading from a stream
// create a readable stream 
// handle stream events -> data,end and error 

// const rstream = fs.createReadStream("inputw.txt");
// rstream.on('data',(chunkdata) => {
//   res.write(chunkdata);
// })

// rstream.on('end',() => {
//   res.end();
// })

// rstream.on('error',(err) => {
//   console.log(err);
//   res.end("file not found");
// })

// 3rd Way 
const rstream = fs.createReadStream("input.txt");
rstream.pipe(res);
})


server.listen(8000,"127.0.0.1");
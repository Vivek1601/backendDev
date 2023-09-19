const fs = require("fs");
const bioData = {
  name : "vinod",
  age : 26,
  channel : "thapa techincal"
};

// console.log(bioData.channel);

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
// console.log(jsonData.channel); // not get output -> thapa techincal we get ud
// console.log(bioData);

// const objData = JSON.parse(jsonData);
// console.log(objData);
// console.log(objData.channel);


// Task :- 
// 1 convert to json
// 2 dusre file mai add krdena 
// 3 again convert bck to json.obj
// 4 log


const jsonData = JSON.stringify(bioData);
fs.writeFile('json1.json',jsonData,(err)=>{
  console.log("done");
})

fs.readFile("json1.json","utf-8",(err,data)=>{
  console.log(data);
  const orgData = JSON.parse(data);
  console.log(orgData);
})


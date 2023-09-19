const fs = require("fs");

// fs.writeFile("read.txt","hello vivek this side",
// (err) => {
//     console.log("file is created");
//     console.log(err);
// });


// fs.appendFile("read.txt"," how r u",
// (err) => {
//     console.log("task completed");
// });

fs.readFile("read.txt","utf-8",
(err,data) => {
    console.log(data);
});


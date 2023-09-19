const name = "vivek";
// console.log(name);

// file system 

const fs = require("fs");

// fs.writeFileSync('read.txt','Intro to fs core module');

fs.writeFileSync('read.txt','Intro of fs core module');

fs.appendFileSync('read.txt',' how r u');

const buff_data = fs.readFileSync("read.txt");
// console.log(buff_data);

const org_data = buff_data.toString();
// console.log(org_data);

fs.renameSync("read.txt","readWrite.txt");


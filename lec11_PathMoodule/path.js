const path = require("path");

// console.log(path.dirname('/Users/vivekkhandelwal/Desktop/backendDev/lec11_PathMoodule/path.js'));
// console.log(path.extname('/Users/vivekkhandelwal/Desktop/backendDev/lec11_PathMoodule/path.js'));
// console.log(path.basename('/Users/vivekkhandelwal/Desktop/backendDev/lec11_PathMoodule/path.js'));

// console.log(path.parse('/Users/vivekkhandelwal/Desktop/backendDev/lec11_PathMoodule/path.js'));

const myPath = path.parse('/Users/vivekkhandelwal/Desktop/backendDev/lec11_PathMoodule/path.js')
console.log(myPath.name);
console.log(myPath.root);
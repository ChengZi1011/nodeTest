let fs = require("fs");
let path = require("path");

console.log(__dirname);
console.log(__dirname+"\\name.txt");
console.log(path.join(__dirname,"name.txt"));
console.log(path.resolve(__dirname, "name.txt"));
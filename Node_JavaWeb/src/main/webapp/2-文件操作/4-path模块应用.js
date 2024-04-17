let fs = require("fs");
let path = require("path");

console.log(__dirname,'222');//当前路径的绝对文件地址
console.log(__dirname+"\\name.txt");
console.log(path.join(__dirname,"name.txt"));
console.log(path.resolve(__dirname, "name.txt"));
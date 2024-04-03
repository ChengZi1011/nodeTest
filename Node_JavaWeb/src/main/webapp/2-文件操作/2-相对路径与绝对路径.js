let fs = require("fs");

//1-相对路径
// ./ ：表示当前路径 或者 不加
// ../ ：表示父级路径，当前路径所在的上一级路径

//2-绝对路径
//D:/name.txt 或者 /name.txt
console.log(__dirname);
console.log(__dirname.concat("\\name.txt"));

fs.writeFile("/name.txt","lucy",{flag:"a"},err => {
    //如果读取失败err就是一个错误对象，如果成功就是null
    if(err){
        console.log(err);
    }else{
        console.log("写入文件成功");
    }
})

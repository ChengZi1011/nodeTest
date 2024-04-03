let fs = require("fs");

// ./ ：表示当前路径
// ../ ：表示父级路径，当前路径所在的上一级路径
fs.readFile("./file/name.txt",(err, data) => {
    //如果读取失败err就是一个错误对象，如果成功就是null
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})

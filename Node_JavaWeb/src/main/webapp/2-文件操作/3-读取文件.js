

let fs =require('fs');

// 读取文件
fs.readFile("./file/古诗.txt",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})
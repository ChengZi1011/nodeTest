

let fs =require('fs');

// 读取文件
fs.readFile(__dirname+"\\file\\name.txt",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})
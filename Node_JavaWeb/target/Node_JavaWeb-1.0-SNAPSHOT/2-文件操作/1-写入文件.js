//导入文件模块
let fs = require('fs');
// fs.writeFile("./file/name.txt","lucy",{flag:'a'},err => {
//     if(err){
//         console.log(err)
//     }else {
//        console.log("写入文件成功");
//     }
// })

fs.appendFile("./file/name.txt","lucy",err => {
    if(err){
        console.log(err);
    }else{
        console.log("写入文件成功");
    }
})


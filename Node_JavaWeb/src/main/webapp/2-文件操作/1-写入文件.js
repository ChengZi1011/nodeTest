//导入文件模块
let fs = require('fs');

// 写入 每次都会覆盖前面写入的内容
fs.writeFile('./name.tet','hello',(err)=>{
    if(err){
        console.log(err);
        return;
    }else {console.log('写入成功');}
})

//追加写入的两种方式
//第一种
fs.writeFile('./name.tet','hello2',{flag:'a'},(err)=>{
  if(err){
      console.log(err);
      return;
  }else {console.log('写入成功');}
})
//第二种
fs.appendFile('./name.tet','hello3',(err)=>{
  if(err){
      console.log(err);
      return;
  }else {console.log('写入成功2');}
})




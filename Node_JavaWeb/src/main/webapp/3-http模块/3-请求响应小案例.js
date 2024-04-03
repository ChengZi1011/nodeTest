//1-导入http模块
const http = require('http');

const server = http.createServer((request, response)=>{

});

server.listen(9000,()=>{
    console.log("服务已经启动");
})
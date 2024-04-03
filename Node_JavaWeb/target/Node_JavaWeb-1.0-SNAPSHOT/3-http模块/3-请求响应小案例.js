//1-导入http模块
const http = require('http');

const server = http.createServer((request, response)=>{
    response.setHeader("content-type","text/html;charset=utf-8");
    const {method} = request;

    const {pathname} = new URL(request.url,'http://localhost:9000');
    if(method=== 'GET' && pathname ==='/login'){
        response.end('登录页面')
    }else{
        response.end('404')
    }
});

server.listen(9000,()=>{
    console.log("服务已经启动");
})
//1-导入http模块
const http = require('http');
//const url = require('url');

const server = http.createServer((request, response)=>{
    //1-获取请求方式
    console.log(request.method);
    //2-获取请求URL-只包含url中的路径与查询字符串
    console.log(request.url);
    //3-获取请求头信息
    console.log(request.headers.host);

    //const res = url.parse(request.url,true);
    // console.log(res.pathname);
    // console.log(res.query.username);

    const url = new URL(request.url,'http://localhost:9000');
    console.log(url.pathname);
    console.log(url.searchParams.get("username"));


    response.setHeader("content-type","text/html;charset=utf-8");
    response.write('hehe');
    response.write('Hello,中国');
    //必须有且需要一个end方法
    response.end();
    response.end('Hello,中国');
});

server.listen(9000,()=>{
    console.log("服务已经启动");
})
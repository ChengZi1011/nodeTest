//1-导入http模块
const http = require('http');

const server = http.createServer((request, response)=>{
  console.log(request.method);
  // console.log(request.url);
  // console.log(request.headers.host);
  //获取url上的参数
  const url = new URL(request.url, `http://${request.headers.host}`);
  console.log(url.pathname,'pathname');
  // console.log(url.searchParams.get('name'));

  response.setHeader('Content-Type','text/html;charset=utf-8');
  response.statusCode = 200;
  // response.end('hello world');
  response.write('hello1');
  response.write('hello2橙子🍊');
  //有且只有一个end方法 放在最后
  response.end('hello world');
  // response.end('hello world2');

  // response.end();


});

server.listen(9000,()=>{
    console.log("9000端口，服务已经启动");
})
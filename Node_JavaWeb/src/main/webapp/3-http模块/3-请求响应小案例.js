//1-导入http模块
const http = require('http');

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html;charset=utf-8");
  const {method} = request;
  const {pathname} = new URL(request.url, `http://${request.headers.host}`);
  if(method === "GET" && pathname === "/"){
    response.end("首页");
  }else{
    response.end("404");
  }

});

server.listen(9000, () => {
  console.log("服务已经启动");
})
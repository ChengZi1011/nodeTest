
// 导入http模块
const http = require('http');

// 创建一个http服务器 /创建一个server
const server = http.createServer((req, res) => {
  res.end('Hello World!'); // 响应请求
})

server.listen(9000, () => {
  console.log('Server is running on port 9000');
})
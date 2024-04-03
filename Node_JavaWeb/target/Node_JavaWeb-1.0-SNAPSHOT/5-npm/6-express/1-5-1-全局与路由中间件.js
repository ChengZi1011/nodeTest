/**
 * 记录每个请求的 url 与 访问时间
 */
//导入 express
const express = require('express');
const fs = require('fs');
const path = require('path');

//创建应用对象
const app = express();
const filePath = path.resolve(__dirname, './access.log');
//声明中间件函数
function mw_log(req, res, next){
  //将信息保存在文件中 access.log
  fs.appendFileSync(filePath, `${req.url}  ${new Date().toLocaleString()}\r\n`);
  //调用 next
  next();
}

//全局-中间件函数
// app.use(mw_log);
// app.use((req, res, next) => {
//   fs.appendFileSync(filePath, '-------操作人-张三------');
// });
// app.use(mw_log,(req, res, next) => {
//   fs.appendFileSync(filePath, '-------操作人-张三------\r\n');
// })


//创建路由
app.get('/', (req, res) => {
  res.send('前台首页');
});

app.get('/admin',mw_log,(req, res) => {
  res.send('后台首页');
});

app.all('*',(req, res) => {
  res.send('<h1>404 Not Found</h1>')
})

//监听端口, 启动服务
app.listen(3000, () => {
  console.log('服务已经启动, 端口 3000 正在监听中....')
})
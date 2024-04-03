//导入 express
const express = require('express');
const bodyParser = require('body-parser')

//创建应用对象
const app = express();

//解析 JSON 格式的请求体的中间件
const mw_jsonParser = bodyParser.json();

//解析 querystring 格式请求体的中间件
const mw_urlencodedParser = bodyParser.urlencoded({ extended: false })

//post请求
app.post('/user', mw_jsonParser, (req, res) => {
  //获取 用户名 和 密码
  console.log(req.body);
  res.send(`保存用户数据:${req.body.id}-${req.body.name}`)
});

//put请求
app.put('/user', mw_urlencodedParser, (req, res) => {
  //获取 用户名 和 密码
  console.log(req.body);
  res.send(`修改用户数据:${req.body.id}-${req.body.name}`)
});

//启动服务
app.listen(3000, () => {
  console.log('服务已经启动, 端口 3000 正在监听中....');
})
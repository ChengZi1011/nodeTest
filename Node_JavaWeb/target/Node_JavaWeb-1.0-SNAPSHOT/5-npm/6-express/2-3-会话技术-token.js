const express = require('express');
//1. 安装包 npm i jsonwebtoken express-jwt
const jwt = require("jsonwebtoken");
const {expressjwt} = require("express-jwt");
const app = express();
const secretKey = "bbj";
//3. 设置 session 的中间件
// 不需要权限限定访问
app.use(expressjwt({ secret: secretKey,algorithms: ["HS256"] }).unless({ path:[/^\/api\//] }));

// 需要权限限定
//app.use("/admin",expressjwt({ secret: secretKey,algorithms: ["HS256"] }));

//创建 session
app.get('/api/login', (req, res) => {
    //设置token
    const token = jwt.sign({username:'jack',age:20},secretKey,{expiresIn:'1h'});
    res.send(`登录成功:${token}`);
});
//获取 token值
app.post('/admin', (req, res) => {
    console.log(req.headers.authorization);
    // console.log(req.user);
    console.log(req.auth);
    res.send(`当前用户:${req.auth.username}`);
});
//监听端口, 启动服务
app.listen(3000, () => {
    console.log('服务已经启动, 端口 3000 正在监听中....')
})
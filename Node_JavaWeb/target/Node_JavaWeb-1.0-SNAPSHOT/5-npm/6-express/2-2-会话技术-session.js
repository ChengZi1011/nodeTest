const express = require('express');
//1. 安装包 npm i express-session connect-mongo
//2. 引入 express-session connect-mongo
const session = require("express-session");
const app = express();
//3. 设置 session 的中间件
app.use(session({
    name: 'sid', //设置cookie的name，默认值是：connect.sid
    secret: 'bbj', //参与加密的字符串（又称签名）
    saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
    resave: true, //是否在每次请求时重新保存session
    cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作，提高安全性
        maxAge: 1000 * 300 // 这一条 是控制 sessionID 的过期时间的！！！
    },
}))
//创建 session
app.get('/login', (req, res) => {
    //设置session
    req.session.username = 'jack';
    req.session.email = '111@qq.com'
    res.send('登录成功');
})
//获取 session
app.get('/admin', (req, res) => {
    console.log(req.session);
    let{username,email} = req.session;
    if (username) {
        res.send(`你好 ${username},邮箱:${email}`);
    }else{
        res.send('登录页面');
    }
})
//销毁 session
app.get('/logout', (req, res) => {
    //销毁session
    req.session.destroy();
    res.send('成功注销');
})
//监听端口, 启动服务
app.listen(3000, () => {
    console.log('服务已经启动, 端口 3000 正在监听中....')
})
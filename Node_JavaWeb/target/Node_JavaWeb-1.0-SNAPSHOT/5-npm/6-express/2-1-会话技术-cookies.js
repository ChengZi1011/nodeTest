const express =require('express');
//安装 cookie-parser npm i cookie-parser
//引入 cookieParser 包
const cookieParser = require('cookie-parser');
const app = express();
//设置 cookieParser 中间件
app.use(cookieParser());

//设置 cookie
app.get('/set-cookie', (req, res) => {
    // 不带时效性-默认一次session
    res.cookie('username','jack');
    // 带时效性-10秒
    res.cookie('pwd','123456', {maxAge: 1000*10 });
    // 带时效性-1小时
    res.cookie('email','111@qq.com', {maxAge: 1000*60*60 });
    //响应
    res.send('Cookie的设置');
});
//读取 cookie
app.get('/get-cookie', (req, res) => {
    //读取 cookie
    console.log(req.cookies);
    let{username,pwd,email} = req.cookies;
    //响应体
    res.send(`Cookie的读取:用户名:${username}-密码:${pwd}-邮箱:${email}`);
});
//删除cookie
app.get('/del-cookie', (req, res) => {
     //删除
    res.clearCookie('username');
    //响应
    res.send('cookie 的清除');
});
//监听端口, 启动服务
app.listen(3000, () => {
    console.log('服务已经启动, 端口 3000 正在监听中....')
})

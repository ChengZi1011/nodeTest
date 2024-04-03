//导入 express
const express = require('express');
//创建应用对象
const app = express();
//创建路由 /user?name=jack&pwd=123
app.get('/user', (req, res) => {
    //原生操作
    //GET
    console.log(req.method);
    // /user?name=jack&pwd=123
    console.log(req.url);
    // localhost:3000
    console.log(req.headers.host);

    //express特有
    // /user
    console.log(req.path);
    // {name:'jack',pwd:'123'}
    console.log(req.query);
    let {name, pwd} = req.query;
    console.log(name + "," + pwd + "," + req.query.pwd);
    // localhost:3000
    console.log(req.get("host"));
    // ::1是IPv6中的环回地址,是127.0.0.1的IPv6版本
    console.log(req.ip);

    res.end('hello express');
});

//restful风格请求
app.get('/user/:name/:pwd', (req, res) => {
    console.log('restful风格请求被触发')
    //{name:'jack',pwd:'123'}
    console.log(req.params);
    console.log(req.params.name + "," + req.params.pwd);
});


//监听端口, 启动服务
app.listen(3000, () => {
    console.log('服务已经启动, 端口 3000 正在监听中....')
})

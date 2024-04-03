//导入 express
const express = require('express');

//创建应用对象
const app = express();

// get请求 / 一般首页的请求
app.get('/', (req, res) => {
    res.send('home');
});

// get请求 /user
app.get('/user', (req, res) => {
    res.send('响应 /user 的get请求,获得所有user数据');
});

// get请求带参数 /user/1
app.get('/user/:id', (req, res) => {
    res.send(`响应 /user/:id 的get请求,根据id=${req.params.id}获得一个用户数据`);
});

//post请求 /user
app.post('/user', (req, res) => {
    res.send('响应 /user 的post请求,保存用户数据');
});

//put请求 /user
app.put('/user', (req, res) => {
    res.send('响应 /user 的put请求,修改用户数据');
});

//delete请求 /user
app.delete('/user/:id', (req, res) => {
    res.send(`响应 /user 的delete请求,根据id=${req.params.id}删除一个用户数据`);
});

//匹配所有的方法
app.all('/test', (req, res) => {
    res.send('响应 /test 的所有类型请求');
})

//404 响应
app.all('*', (req, res) => {
    res.send('404 not Found')
});

//监听端口, 启动服务
app.listen(3000, () => {
    console.log('服务已经启动, 端口 3000 正在监听中....')
})
//导入 express
const express = require('express');

//创建应用对象
const app = express();

//创建路由
app.get('/user', (req, res) => {
    //原生响应
    // res.statusCode = 404;
    // res.statusMessage = 'love';
    // res.setHeader('xxx', 'yyy');
    // res.setHeader("content-type","text/html;charset=utf-8");
    // res.write('你好 express ')
    // res.end('response');

    //express 响应
    // res.status(500);
    // res.set('aaa','bbb');
    // res.send('你好 express');
    res.status(500).set('aaa', 'bbb').send('你好 express');

});

//创建路由
app.get('/other', (req, res) => {
    //跳转响应
    //res.redirect('http://www.baidu.com');
    // JSON 响应 - 返回符合JSON格式字符串
    // res.json({
    //     id: '1001',
    //     name: '尚硅谷',
    // })
    //响应文件内容
    //res.sendFile(__dirname + '/info.html');// path.resolve()
    //下载响应
    res.download(__dirname + '/info.html');

});

//监听端口, 启动服务
app.listen(3000, () => {
    console.log('服务已经启动, 端口 3000 正在监听中....')
})
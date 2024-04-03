//1. 导入 express
const express = require('express');

//2. 创建路由对象
const router = express.Router();

// get请求 /user
router.get('/user', (req, res) => {
  res.send('响应 /user 的get请求,获得所有user数据');
});

// get请求带参数 /user/1
router.get('/user/:id', (req, res) => {
  res.send(`响应 /user/:id 的get请求,根据id=${req.params.id}获得一个用户数据`);
});

//post请求 /user
router.post('/user', (req, res) => {
  res.send('响应 /user 的post请求,保存用户数据');
});

//put请求 /user
router.put('/user', (req, res) => {
  res.send('响应 /user 的put请求,修改用户数据');
});

//delete请求 /user
router.delete('/user/:id', (req, res) => {
  res.send(`响应 /user 的delete请求,根据id=${req.params.id}删除一个用户数据`);
});

module.exports = router;
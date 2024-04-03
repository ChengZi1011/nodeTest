//1. 导入 express
const express = require('express');

//2. 创建路由对象
const router = express.Router();

// get请求 /role
router.get('/role', (req, res) => {
  res.send('响应 /role 的get请求,获得所有role数据');
});

//4. 暴露 router
module.exports = router;
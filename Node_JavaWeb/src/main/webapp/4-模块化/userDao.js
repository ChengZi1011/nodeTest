// 导出对象
// module.exports = {
//   name: '张三',
//   findAll: function () {
//     console.log("查询所有用户");
//   },
//   save: function () {
//     console.log("保存用户");
//   }
// }


//分别导出
// module.exports.name = '张三';
// module.exports.findAll = function () {
//   console.log("查询所有用户");
// }
// module.exports.save = function () {
//   console.log("保存用户");
// }

//简写

// exports = { //exports 只是 module.exports 的一个引用 这里的module.exports为空了 console.log(module.exports === exports);为false
//   name: '张三',
//   findAll: function () {
//     console.log("查询所有用户");
//   },
//   save: function () {
//     console.log("保存用户");
//   }
// }
exports.name = '张三';  //但这样（一个个点 不写在一个对象里）就是console.log(module.exports === exports);为true
console.log(module.exports === exports);
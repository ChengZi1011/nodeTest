// 导出对象
// module.exports = {
//     name:'jack',
//     getUserList(){
//         console.log("获得所有用户数据")
//     }
// };

//分别导出
// module.exports.name = "jack";
// module.exports.age = 20;
// module.exports.getUserList=function () {
//     console.log("获得所有用户数据")
// };

//分别导出简写 exports.XXX的写法
// console.log(exports === module.exports)
// exports.name = "jack";
// exports.age = 20;
// exports.getUserList=function () {
//     console.log("获得所有用户数据")
// };

//直接赋值地址，会改变exports的指向
exports = {
    name:'jack',
    getUserList(){
        console.log("获得所有用户数据")
    }
}
console.log(exports === module.exports)
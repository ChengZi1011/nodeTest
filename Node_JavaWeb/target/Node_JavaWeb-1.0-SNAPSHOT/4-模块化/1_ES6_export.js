//1-默认导出-最常用
export default {
    id:1,
    getUsers(){
        console.log("获得用户数据");
    }
}

//2-分别导出
// export let id = 1;
// export let getUsers = function () {
//     console.log("获得用户数据");
// }

//3-导出对象
// let id = 1;
// let getUsers = function () {
//     console.log("获得用户数据");
// }
// export {id,getUsers};


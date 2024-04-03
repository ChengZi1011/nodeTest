// const uniq = require('uniq')
// const uniq = require('./node_modules/uniq')
const uniq = require('./node_modules/uniq/uniq')
let arr = [1,2,2,3,3,4,5,5,6];
uniq(arr);
console.log(arr);
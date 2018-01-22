//引入启动服务器的文件函数
let openServerMain = require("./openServerMain");
//api程序
let apiIndex = require("./apiIndex");
// let mysql = require('mysql');
// let route = require("./route");

//启动主服务器
openServerMain.createServer(apiIndex);



// console.log("hello");
//引入启动服务器的文件函数
let openServerMain = require("./openServerMain");
//api程序
let apiIndex = require("./apiIndex");

//启动主服务器
openServerMain.createServer(apiIndex.apiIndex);
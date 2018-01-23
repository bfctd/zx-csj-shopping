//引入http，启动监听http端口的服务器
const http = require("http");
//拿到url请求的包
const url = require("url");
//拿到本地服务器路径的包
const path = require("path");
//操作文件的包
const fs = require("fs");

// 从命令行参数获取root目录，默认是当前目录:在NodeJS中可以通过process.argv获取命令行参数。
// 但是比较意外的是，node执行程序路径和主模块文件路径固定占据了argv[0]和argv[1]两个位置，
// 而第一个命令行参数从argv[2]开始
let root = path.resolve(process.argv[2] || '.');

// 创建主服务器的函数
function createServer(apiIndex) {
    http.createServer((req, res) => {
        let pathname = url.parse(req.url).pathname;
        let filepath = path.join(root + '../../../view', pathname);
        let ajaxServerHandle = {req: req, res: res};

        res.setHeader('Access-Control-Allow-Origin', '*');

        let api = /^\/api/
        if (api.test(pathname)) {
            apiIndex(pathname, ajaxServerHandle);
        }
        else {
            fs.stat(filepath, (err, stats) => {
                if (pathname == '/') {
                    res.writeHead(200);
                    filepath += '/index.html';
                    fs.createReadStream(filepath).pipe(res);
                }
                else {
                    if (!err && stats.isFile()) {
                        // 没有出错并且文件存在:
                        res.writeHead(200);
                        // 将文件流导向response:
                        fs.createReadStream(filepath).pipe(res);
                    } else {
                        // 出错了或者文件不存在,发送404响应:
                        res.writeHead(404);
                        res.end('404 Not Found');
                    }
                }
            });
        }
    }).listen(80);
}

exports.createServer = createServer;

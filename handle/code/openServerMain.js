//引入http，启动监听http端口的服务器
const http = require("http");
//拿到url请求的包
const url = require("url");
//拿到本地服务器路径的包
const path = require("path");
//操作文件的包
const fs = require("fs");

// // let querystring = require("querystring");


// 从命令行参数获取root目录，默认是当前目录:在NodeJS中可以通过process.argv获取命令行参数。
// 但是比较意外的是，node执行程序路径和主模块文件路径固定占据了argv[0]和argv[1]两个位置，
// 而第一个命令行参数从argv[2]开始
let root = path.resolve(process.argv[2] || '.');
// console.log('Static root dir: ' + root);
// let postData = '';
//
// const view = 'F:/人生一路奋斗/项目/zx-csj-shopping/view';
//
// 创建主服务器的函数
function createServer(apiIndex) {
    http.createServer((req, res) => {
        let pathname = url.parse(req.url).pathname;
        let filepath = path.join(root + '../../../view', pathname);
        let ajaxServerHandle = {req: req, res: res};

        res.setHeader('Access-Control-Allow-Origin', '*');

        let api = /^\/api/
        if (api.test(pathname)) {
            // console.log(pathname+'path');
            // console.log(root+'root');
            // pathname = root + '/api'+pathname;
            // console.log(pathname+'dddddddddddddd');
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
        // res.writeHead(200, {'content-Type': 'text/html;charset="utf-8"'});
        // res.end();
    }).listen(80);
}

//         //路径
//         const pathname = url.parse(req.url).pathname;
//         // post
//         req.on('data', (chunk) => {
//             postData += chunk;
//             postData = querystring.parse(postData);
//             //连接数据库
//             console.log(postData);
//
//             // let connection = mysql.createConnection({
//             //     host: 'localhost',
//             //     user: 'root',
//             //     password: 'Zj1396673812',
//             //     database: 'zx-csj-shopping'
//             // });
//             //
//             // connection.connect();
//             //
//             // connection.query('select * from userinfo where username=13207623002',
//             //     (error, results) => {
//             //         if (error) throw error;
//             //         if (results!=0){
//             //             let data = {is_succeed:true}
//             //             res.writeHead(200, {'content-Type': 'text/html;charset="utf-8"'});
//             //             // res.write(JSON.stringify(data));
//             //             res.end('dddd');
//             //             // console.log(data);
//             //         };
//             //     });
//             //
//             // connection.end();
//         });
//
//
//         function indexPage() {
//             fs.readFile(view + '/index.html', (err, data) => {
//                 if (err) {
//                     res.writeHead(404, {'content-Type': 'text/html;charset="utf-8"'});
//                     res.end();
//                 }
//                 else {
//                     res.writeHead(200, {'content-Type': 'text/html;charset="utf-8"'});
//                     res.write(data);
//                     res.end();
//                 }
//             })
//         }
//
//         function userpageLogin() {
//             fs.readFile(view + '/user/login.html', (err, data) => {
//                 if (err) {
//                     res.writeHead(404, {'content-Type': 'text/html;charset="utf-8"'});
//                     res.end();
//                 }
//                 else {
//                     res.writeHead(200, {'content-Type': 'text/html;charset="utf-8"'});
//                     res.write(data);
//                     res.end();
//                 }
//             })
//         }
//
//         switch (pathname) {
//             case '/' :
//                 indexPage();
//                 break;
//             case '/user/login.html':
//                 userpageLogin();
//                 break;
//         }
//
// }
//
exports.createServer = createServer;

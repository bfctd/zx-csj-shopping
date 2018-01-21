let http = require("http");
let url = require("url");
let querystring = require("querystring");
let fs = require("fs");

// let request = {}
let postData = '';
const view = 'F:/人生一路奋斗/项目/zx-csj-shopping/view';

function createserver() {
    http.createServer((req, res) => {
            //路径
            const pathname = url.parse(req.url).pathname;
            // console.log(pathname);
            req.on('data', (chunk) => {
                postData += chunk;
                postData = querystring.parse(postData);
            });

            function indexPage() {
                // console.log("开始要找文件了")
                fs.readFile(view + '/index.html', (err, data) => {
                    if (err) {
                        res.writeHead(404, {'content-Type': 'text/html;charset="utf-8"'});
                        res.end();
                    }
                    else {
                        res.writeHead(200, {'content-Type': 'text/html;charset="utf-8"'});
                        res.write(data);
                        res.end();
                    }
                })
            }

            function userpageLogin() {
                fs.readFile(view + '/user/login.html', (err, data) => {
                    if (err) {
                        res.writeHead(404, {'content-Type': 'text/html;charset="utf-8"'});
                        res.end();
                    }
                    else {
                        res.writeHead(200, {'content-Type': 'text/html;charset="utf-8"'});
                        res.write(data);
                        res.end();
                    }
                })
            }

            switch (pathname) {
                case '/' :
                    indexPage();
                    break;
                case '/user/login.html':
                    userpageLogin();
                    break;
            }
        }
    ).listen(8080);
}

exports.createserver = createserver;

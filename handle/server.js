let http = require("http");
let url = require("url");
let querystring = require("querystring");
let fs = require("fs");

//post
let postData = '';

const view = 'F:/人生一路奋斗/项目/zx-csj-shopping/view';

function createserver() {
    http.createServer((req, res) => {
        //路径
        const pathname = url.parse(req.url).pathname;
        // post
        req.on('data', (chunk) => {
            postData += chunk;
            postData = querystring.parse(postData);
            //连接数据库
            console.log(postData);

        });

        function indexPage() {
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
    }).listen(8080);
}

exports.createserver = createserver;

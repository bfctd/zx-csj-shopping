const querystring = require('querystring');

let mySQLHandle = require('../mySQLHandle')

let postData = '';

function login(ajaxServerHandle) {
    // console.log(ajaxServerHandle);
    ajaxServerHandle.req.on('data', (chunk) => {
        postData += chunk;
        postData = querystring.parse(postData);
        // 去连接数据库--查询post请求中的参数,1为增,2为删,3为改,4为查
        mySQLHandle.mySQLHandle(4, postData);
    });
    ajaxServerHandle.res.writeHead(200, {'content-Type': 'text/html;charset="utf-8"'});
    // ajaxServerHandle.res.write();
    console.log(mySQLHandle.mySQLHandle(4, postData));
    ajaxServerHandle.res.end();
}

exports.login = login;
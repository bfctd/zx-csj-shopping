const querystring = require('querystring');

let mySQLHandle = require('../mySQLHandle')

let postData = '';

function logon(ajaxServerHandle) {
    ajaxServerHandle.req.on('data', (chunk) => {
        postData += chunk;
        postData = querystring.parse(postData);
        // 去连接数据库--查询post请求中的参数,1为增,2为删,3为改,4为查
        mySQLHandle.mySQLHandle(1, postData, SQLresult);
    });
    //查询数据库后执行的函数
    function SQLresult(SQLresultData) {
        ajaxServerHandle.res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        ajaxServerHandle.res.end(SQLresultData);
    }
}

exports.logon = logon;
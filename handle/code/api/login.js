const querystring = require('querystring');

let mySQLHandle = require('../mySQLHandle')

let postData = '';

function login(ajaxServerHandle) {
    ajaxServerHandle.req.on('data', (chunk) => {
        postData += chunk;
        postData = querystring.parse(postData);
        // 去连接数据库--查询post请求中的参数,1为增,2为删,3为改,4为查
        mySQLHandle.mySQLHandle(4, postData, SQLresult);
    });
    ajaxServerHandle.req.on('end', () => {
        //将post参数初始化
        postData = '';
    })

    function SQLresult(SQLresultData) {
        ajaxServerHandle.res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        ajaxServerHandle.res.end(SQLresultData);
    }
}

exports.login = login;
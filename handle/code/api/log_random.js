const querystring = require('querystring');

let connSQL = require("../connect/connSQL");
// let

let postData = '';

function log_random(ajaxServerHandle) {
    let random = parseInt(Math.random() * 10 + 1);
    connSQL.conn();
    const str = 'SELECT * FROM img_random WHERE img_id="' + random + '"';
    connSQL.query().query(str, (error, results) => {
        if (error) {
            ajaxServerHandle.res.end(JSON.stringify({text: "数据库或者查询串连接失败"}));
        }
        else {

            ajaxServerHandle.res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            results != 0 ? ajaxServerHandle.res.end(JSON.stringify({img_url: results[0].img_url})) : 1;
        }
    });
    // console.log(random)

    connSQL.end();
    // ajaxServerHandle.req.on('data', (chunk) => {
    //     postData += chunk;
    //     postData = querystring.parse(postData);
    //     // 去连接数据库--查询post请求中的参数,1为增,2为删,3为改,4为查
    //     mySQLHandle.mySQLHandle(4, postData, SQLresult);
    // });
    // ajaxServerHandle.req.on('end', () => {
    //     //将post参数初始化
    //     postData = '';
    // })
    //
    // function SQLresult(SQLresultData) {
    //     ajaxServerHandle.res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    //     ajaxServerHandle.res.end(SQLresultData);
    // }
}

exports.log_random = log_random;
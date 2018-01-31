const querystring = require('querystring');
const url = require('url');

let connSQL = require("../connect/connSQL");


function detail(ajaxServerHandle) {
    let getData = querystring.parse(url.parse(ajaxServerHandle.req.url).query);
    connSQL.conn();
    const str = 'SELECT * FROM product_info WHERE product_id = ' + getData.product_id;
    console.log(str);
    connSQL.query().query(str, (error, results) => {
        if (error) {
            ajaxServerHandle.res.end(JSON.stringify({text: "数据库或者查询串连接失败"}));
        }
        else {
            ajaxServerHandle.res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            ajaxServerHandle.res.end(JSON.stringify({data: results}));
        }
    })
    connSQL.end();
}

exports.detail = detail;
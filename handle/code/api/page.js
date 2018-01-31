const querystring = require('querystring');
const url = require('url');

let connSQL = require("../connect/connSQL");


function page(ajaxServerHandle) {
    connSQL.conn();
    let getData = querystring.parse(url.parse(ajaxServerHandle.req.url).query);
    const str = 'SELECT * FROM product_info LIMIT 12 OFFSET ' + (12 * getData.page);
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

exports.page = page;
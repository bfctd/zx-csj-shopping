const querystring = require('querystring');
const url = require('url');

let connSQL = require("../connect/connSQL");


function select_product(ajaxServerHandle) {
    console.log("dfasdfasd");
    let getData = querystring.parse(url.parse(ajaxServerHandle.req.url).query);

    connSQL.conn();

    const str = 'SELECT * FROM product_info WHERE product_name LIKE "%' + getData.selsctText + '%"';
    connSQL.query().query(str, (error, results) => {
        if (error) {
            ajaxServerHandle.res.end(JSON.stringify({text: "数据库或者查询串连接失败"}));
        }
        else {
            ajaxServerHandle.res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            console.log(results);
            ajaxServerHandle.res.end(JSON.stringify({data: results}));
        }
    });

    connSQL.end();
}

exports.select_product = select_product;
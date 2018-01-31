let connSQL = require("../connect/connSQL");


function index(ajaxServerHandle) {
    connSQL.conn();
    const str = 'SELECT * FROM product_info';
    connSQL.query().query(str, (error, results) => {
        if (error) {
            ajaxServerHandle.res.end(JSON.stringify({text: "数据库或者查询串连接失败"}));
        }
        else {
            let data = results.slice(0, 12);
            let page = parseInt((results.length / 12) + 1);
            ajaxServerHandle.res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            ajaxServerHandle.res.end(JSON.stringify({data: data, page: page}));
        }
    })
    connSQL.end();
}

exports.index = index;
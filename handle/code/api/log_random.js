let connSQL = require("../connect/connSQL");


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

    connSQL.end();
}

exports.log_random = log_random;
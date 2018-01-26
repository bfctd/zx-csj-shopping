const mysql = require("mysql")

let connection = mysql.createConnection({
    host: 'bdm25865873.my3w.com',      //数据库地址
    user: 'bdm25865873',
    password: 'Zj1396673812',
    database: 'bdm25865873_db',     //数据库名称
    insecureAuth: true,             //低版本兼容
});

function conn() {
    connection.connect();
}

function end() {
    connection.end();
}

function query() {
    return connection;
}

exports.conn = conn;
exports.end = end;
exports.query = query;
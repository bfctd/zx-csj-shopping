const mysql = require('mysql');

//mySQLHandle接收两个参数，第一个为对数据库进行增删改中的其中一种操作
//                       第二个为操作的数据
function mySQLHandle(type, data, SQLresult) {
    // // 创建连接数据库的参数
    let connection = mysql.createConnection({
        host: 'localhost',      //数据库地址
        user: 'root',
        password: 'Zj1396673812',
        database: 'zx-csj-shopping'     //数据库名称
    });
    connection.connect();

    let SQL = {
        insert(data, SQLresult) {
            console.log("Xxxxxx");
        },
        delete(data, SQLresult) {
            console.log("YYYYYY")
        },
        update(data, SQLresult) {
            console.log("ZZZZZ")
        },
        select(data, SQLresult) {
            const str = 'select * from userinfo where username="' + data.username + '"and password="' + data.password + '"';
            connection.query(str, (error, results) => {
                if (error) {
                    SQLresult(JSON.stringify({text: "数据库或者查询串连接失败"}));
                    connection.end();
                }
                else {
                    results != 0 ? SQLresult(JSON.stringify({is_succeed: true})) : SQLresult(JSON.stringify({is_succeed: false}));
                }
            });
        }
    }

    switch (type) {
        case 1:
            SQL.insert(data, SQLresult);
            break;
        case 2:
            SQL.delete(data, SQLresult);
            break;
        case 3:
            SQL.update(data, SQLresult);
            break;
        case 4:
            SQL.select(data, SQLresult);
            break;
        default:
            console.log("程序出错");
    }

    connection.end();
}

exports.mySQLHandle = mySQLHandle;
const mysql = require('mysql');

//mySQLHandle接收两个参数，第一个为对数据库进行增删改中的其中一种操作
//                       第二个为操作的数据
function mySQLHandle(type, data) {
    return 0;
    let result = '';
    // // 创建连接数据库的参数
    // let connection = mysql.createConnection({
    //     host: 'localhost',      //数据库地址
    //     user: 'root',
    //     password: 'Zj1396673812',
    //     database: 'zx-csj-shopping'     //数据库名称
    // });
    // connection.connect();
    //
    // let SQL = {
    //     insert(data) {
    //
    //     },
    //     delete(data) {
    //
    //     },
    //     update(data) {
    //
    //     },
    //     select(data) {
    //         const str = 'select * from userinfo where username=13207623002';
    //         connection.query(str, (error, results) => {
    //             if (error) throw error;
    //             if (results != 0) {
    //                 let returnRes = {is_succeed: true}
    //                 // returnRes;
    //                 // res.writeHead(200, {'content-Type': 'text/html;charset="utf-8"'});
    //                 // res.write(JSON.stringify(data));
    //                 // res.end('dddd');
    //                 // console.log(returnRes);
    //             }
    //         });
    //     }
    // }
    //
    // switch (type) {
    //     case 1:
    //         result = SQL.insert(data);
    //         break;
    //     case 2:
    //         result = SQL.delete(data);
    //         break;
    //     case 3:
    //         result = SQL.update(data);
    //         break;
    //     case 4:
    //         result = SQL.select(data);
    //         break;
    //     default:
    //         console.log("程序出错");
    // }
    //
    // connection.end();
}

exports.mySQLHandle = mySQLHandle;
let login = require('./api/login');
let logon = require('./api/logon');

function apiIndex(pathname, ajaxServerHandle) {
    switch (pathname) {
        // 首页
        case '/api/index':
            login.login(ajaxServerHandle);
            break;
        // 执行登录
        case '/api/login':
            login.login(ajaxServerHandle);
            break;
        // 执行注册
        case '/api/logon':
            logon.logon(ajaxServerHandle);
            break;
        default:
            console.log("错大发了");
    }
}

exports.apiIndex = apiIndex;
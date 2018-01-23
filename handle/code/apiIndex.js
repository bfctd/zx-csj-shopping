let login = require('./api/login')

function apiIndex(pathname, ajaxServerHandle) {
    // console.log(pathname);
    switch (pathname) {
        // 执行登录注册
        case '/api/login':
            login.login(ajaxServerHandle);
            break;
        default:console.log("错大发了");
    }
}

exports.apiIndex = apiIndex;
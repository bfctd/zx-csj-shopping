let login = require('./api/login');
let logon = require('./api/logon');
let index = require('./api/index');
let page = require('./api/page');
let detail = require('./api/detail');
let log_random = require('./api/log_random');
let select_product = require('./api/select_product');

// let logon = require('./api/logon');
function apiIndex(pathname, ajaxServerHandle) {
    switch (pathname) {
        // 首页
        case '/api/index':
            index.index(ajaxServerHandle);
            break;
        // 首页翻页
        case '/api/page':
            page.page(ajaxServerHandle);
            break;
        // 搜索商品
        case '/api/select_product':
            select_product.select_product(ajaxServerHandle);
            break;
        // 商品详情
        case '/api/detail':
            detail.detail(ajaxServerHandle);
            break;
        // 执行登录
        case '/api/login':
            login.login(ajaxServerHandle);
            break;
        // 登录注册的随机图片
        case '/api/log_random':
            log_random.log_random(ajaxServerHandle);
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
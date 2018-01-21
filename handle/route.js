let fs = require("fs");

const view = 'F:/人生一路奋斗/项目/zx-csj-shopping/view';
let postData = '';

function indexPage(getpage) {
    // handlerData.a = "xx";
    // console.log("首页");
    fs.readFileSync(view + '/index.html', (err, data) => {
        if (err) {
            console.log("cuowu");
        }
        else {
            console.log(data);
            getpage(data);
            // handlerData.fileUrl = data;
        }
    })
    // console.log(handlerData);
}

function user(handler, postdata) {
    console.log(postdata);
    console.log("注册页");
}

function roterLink(request,getpage) {
    // console.log(request.httpurl.pathname);
    switch (request.httpurl.pathname) {
        case '/' :
            indexPage(getpage);
            break;
        case '/user/lo':
            // user(handlerData, postData);
            break;
    }
}


exports.roterLink = roterLink;
let userLogin = require('.userLogin')

function apiLink(pathname) {
    switch (pathname) {
        case '/api/Login':
            userLogin.userLogin;
            break;
    }
}

exports.apiLink = apiLink;
'use strict';

module.exports = (req, res, next) => {
    console.log('From inside the middleware');
    if (!req.headers.authorization) {
        return next('You are not authrized');

    }
    const token = req.headers.authorization.split(' ').pop();
    console.log(token);
    users.authenticateToken(token);
    next();
}

try {
    const validUser = users.authenticateToken(token);

    const userInfo = await users.findOne({ where: { userName: validUser.userName } });
    if (userInfo) {
        req.user = userInfo;
        req.token = userInfo.token

        next();
    } else {
        next('You\'re not authorized!!')
    }
    console.log(userInfo)

} catch (e) {
    next(e.message || e)
}

'use strict';

const acl = (capabilities) => {
    return function (req, res, next) {
        if (!req.user.capabilities.includes(capabilities)) {
            if (req.user.id === parseInt(req.params.userid)) {
                next();
            } else {
                res.status(403).send('Access Denied');
            }
        } else {
            next();
        }
    };
};

module.exports = acl;
'use strict';

// const { read } = require('fs');
const User = require('../models');

//Sign up
const saveUser = async (req, res, next) => {
    try {
        //Search for the userName in DB
        const userName = await User.findOne({
            where: {
                userName: req.body.userName
            }
        });
        if (userName) {
            return res.status(409).send('User Name already taken');
        }
        //Search for the email in DB
        const userEmail = await User.findOne({
            where: {
                userEmail: req.body.userEmail
            }
        });
        if (userEmail) {
            return res.status(409).send('User Email already taken');
        }
        next();
    } catch (e) {
        console.log(e);
    }

}

module.exports = {
    saveUser,
}
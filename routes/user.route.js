'use strict';

const express = require('express');
const router = express.Router();

const {User} = require('../models/index');

const userAuth = require('../middlewares/userAuth');

//Routes
router.post('/signin',(req,res)=>{
res.status(200).send('signin');
});


router.post('/signup',userAuth,(req,res)=>{
    res.status(200).send('signup');
    })

module.exports = router;
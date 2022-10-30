'use strict';

const express = require('express');
const router = express.Router();

const {User} = require('../models/index');

const userAuth = require('../middlewares/userAuth');

//Routes
router.post('/login',(req,res)=>{
res.status(200).send('login');
})
router.post('/signup',userAuth,(req,res)=>{
    res.status(200).send('signup');
    })

module.exports = router;
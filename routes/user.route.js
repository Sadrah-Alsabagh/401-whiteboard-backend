'use strict';

const express = require('express');
const router = express.Router();

const {User} = require('../models/index');

const userAuth = require('../middlewares/userAuth');
const { signup, login, allUsers} = require('../controllers/usercontroller');

//Routes
// router.post('/signin',(req,res)=>{
// res.status(200).send('signin');
// });


router.post('/signup',userAuth.saveUser,signup);
router.post('/signin',login)
router.get('/users',allUsers);


module.exports = router;
'use strict';

const express = require('express');
const router = express.Router();

const{Post} = require('../models/index');
const {Comment} = require('../models/index');
//Routes

router.get('/post', getPosts);
router.get('/post/:id', getOnePost);
router.post('/post', addPost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);


//CRUD operations 
async function getPosts(req,res) {
    //{where :{id:id},include: [Comment]}
    let post = await Post.findAll({include: [Comment]});
    res.status(200).json({
        post
    })
}

async function getOnePost(req,res) {
    const id = req.params.id;
    let post = await Post.findOne({
        where:{
            id: id
        },include: [Comment]
    });
    
    res.status(200).json({
        post
    })
}
 
 async function addPost(req,res) {
    let newPost = req.body;
    let post = await Post.create(newPost);
    res.status(201).json({
        post
    });
}

async function updatePost(req,res) {
    const id = req.params.id;
    const obj = req.body;
    let post = await Post.findOne({
        where:{
            id: id
        }
    });
    const updatedPost = await post.update(obj);

    res.status(200).json(
        updatedPost
    );
}

async function deletePost(req,res) {
    const id = req.params.id;
    let deletedPost = await Post.destroy({
        where:{
            id: id
        }
    });
    res.status(204).json({
        deletedPost
    })
}
module.exports = router;
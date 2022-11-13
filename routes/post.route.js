'use strict';

const express = require('express');
const router = express.Router();
const acl = require('../middlewares/acl');
const bearerAuth = require('../middlewares/bearer-auth');
const { Post, commentModel } = require('../models/index');
//Routes


router.get('/post', bearerAuth, acl, getPostComment);
//router.get('/post/:id', getPostComment);
router.post('/post', bearerAuth, acl('create'), addPost);
router.put('/post/:id:userid', bearerAuth, acl('update'), updatePost);
router.delete('/post/:id:userid', bearerAuth, acl('delete'), deletePost);


//CRUD operations 
// async function getPosts(req,res) {
//     let post = await Post.read();
//     res.status(200).json({
//         post
//     })
// }

// async function getOnePost(req,res) {
//     const id = req.params.id;
//     // {
//     //     where:{
//     //         id: id
//     //     },include: [Comment]
//     // }
//     let post = await Post.read(id);

//     res.status(200).json({
//         post
//     })
// }


async function getPostComment(req, res) {
    const Post_Comment = await Post.readWithComment(commentModel);

    res.status(200).json({
        Post_Comment
    })
}
async function addPost(req, res) {
    let newPost = req.body;
    let post = await Post.create(newPost);
    res.status(201).json({
        post
    });
}

async function updatePost(req, res) {
    const id = req.params.id;
    const obj = req.body;
    let post = await Post.findOne({
        where: {
            id: id
        }
    });
    const updatedPost = await post.update(obj);

    res.status(200).json(
        {
            message: `post ${id} has been updated`
        }
    );
}

async function deletePost(req, res) {
    const id = req.params.id;
    let deletedPost = await Post.delete({
        where: {
            id: id
        }
    });
    res.status(204).json({
        message: `post ${id} has been deleted`
    })
}




module.exports = router;
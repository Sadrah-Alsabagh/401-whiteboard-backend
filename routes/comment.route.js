'use strict';

const express = require('express');
const router = express.Router();

const {Comment} = require('../models/index');

//Routes

router.get('/comment', getComment);
router.post('/comment', addComment);
// router.get('/comment/:id', getOneComment);
// router.put('/comment/:id', updateComment);
// router.delete('/comment/:id', deleteComment);


//CRUD operations
async function getComment(req,res) {
    let comment = await Comment.findAll();
    res.status(200).json({
        comment
    })
};

async function addComment(req,res) {
    let newComment = req.body;
    let comment = await Comment.create(newComment);
    res.status(201).json({
        comment
    });
}

// async function getOneComment(req,res) {
//     const id = req.params.id;
//     let comment = await Comment.findOne({
//         where:{
//             id: id
//         }
//     });
    
//     res.status(200).json({
//         comment
//     })
// }
 



// async function updateComment(req,res) {
//     const id = req.params.id;
//     const obj = req.body;
//     let comment = await Comment.findOne({
//         where:{
//             id: id
//         }
//     });
//     const updatedComment = await comment.update(obj);

//     res.status(200).json(
//         updatedComment
//     );
// }

// async function deleteComment(req,res) {
//     const id = req.params.id;
//     let deletedComment = await Comment.destroy({
//         where:{
//             id: id
//         }
//     });
//     res.status(204).json({
//         deletedComment
//     })
// }
module.exports = router;
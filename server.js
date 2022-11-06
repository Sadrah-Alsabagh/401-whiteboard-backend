'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const postRouter = require('./routes/post.route');
const commentRouter = require('./routes/comment.route');
const authRouter = require('./routes/user.route');

app.use(cors());
app.use(express.json());
app.use(postRouter);
app.use(commentRouter);
app.use(authRouter);


app.get('/',(req,res)=>{
    res.status(200).json ({
    message:'Home page',
    code: 200
    })
})
function start(port) {
    app.listen(port, () => console.log(`Server is running on port ${port}`));
}; 
module.exports= {start};
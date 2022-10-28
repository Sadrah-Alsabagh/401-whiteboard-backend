'use strict';

const{Sequelize, DataTypes} = require('sequelize'); 
const post = require('./post.model');
const comment = require('./comment.model');
const collection = require('../collections/user-comment-routes');

const POSTGRES_URL = process.env.DATABASE_URL||"postgres://sedra:sedra@123@127.0.0.1:5432/whiteboard";

const sequelizeOption = {
    dialectOption:{
        ssl:{
            require:true,
            rejectUnauthorized:false
        }
    }
}

let sequelize = new Sequelize(POSTGRES_URL, sequelizeOption);
let postModel = post(sequelize, DataTypes);
let commentModel = comment(sequelize, DataTypes);

//Relations
postModel.hasMany(commentModel, {foreignKey:'postID', sourceKey:'id'})
commentModel.belongsTo(postModel,{foreignKey:'postID', targetKey:'id'})


const postCollection = new collection(postModel);
const commentCollection = new collection(commentModel);


module.exports ={
    db: sequelize,
    Post: postCollection,
    Comment: commentCollection,
    commentModel:commentModel,
}

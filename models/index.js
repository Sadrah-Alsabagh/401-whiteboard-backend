'use strict';

const{Sequelize, DataTypes} = require('sequelize'); 
const post = require('./post.model');
const comment = require('./comment.model');

const POSTGRES_URL = "postgres://sedra:sedra@123@127.0.0.1:5432/whiteboard";

let sequelize = new Sequelize(POSTGRES_URL);
let postModel = post(sequelize, DataTypes);
let commentModel = comment(sequelize, DataTypes);

//Relations
postModel.hasMany(commentModel, {foreignKey:'postID', sourceKey:'id'})
commentModel.belongsTo(postModel,{foreignKey:'postID', targetKey:'id'})

module.exports ={
    db: sequelize,
    Post: postModel,
    Comment: commentModel,
}

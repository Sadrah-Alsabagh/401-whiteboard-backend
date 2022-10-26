'use strict';

const{Sequelize, DataTypes} = require('sequelize'); 
const post = require('./post.model');

const POSTGRES_URL = "postgres://sedra:sedra@123@127.0.0.1:5432/whiteboard";

let sequelize = new Sequelize(POSTGRES_URL);

module.exports ={
    db: sequelize,
    Post: post(sequelize, DataTypes),
}

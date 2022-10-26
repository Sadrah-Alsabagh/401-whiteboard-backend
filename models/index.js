'use strict';

//const { module } = require('modules');
const{Sequelize, DataTypes} = require('sequelize'); 

const POSTGRES_URL = "postgres://sedra:sedra@123@127.0.0.1:5432/whiteboard";

let sequelize = new Sequelize(POSTGRES_URL);

module.exports ={
    db: sequelize
}

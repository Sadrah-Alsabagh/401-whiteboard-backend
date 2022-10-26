'use strict';

// const { module } = require('modules');
const{Sequelize, DataTypes} = require('sequelize'); 

const POSTGRES_URL = process.env.DATABASE_URL;

let sequelize = new Sequelize(POSTGRES_URL);

module.exports ={
    db: sequelize
}

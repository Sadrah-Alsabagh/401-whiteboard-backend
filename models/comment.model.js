'use strict';

const Comment = (sequelize, DataTypes) => sequelize.define('Comment', {
  commentTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  commentContent: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postID: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Comment;
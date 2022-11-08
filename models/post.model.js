'use strict';


const Post = (sequelize, DataTypes) => sequelize.define(
  "Posts",
  {
    postTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postContent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);
module.exports = Post;
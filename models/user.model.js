'use strict';
const jwt = require('jsonwebtoken');
const User = (sequelize, DataTypes) => sequelize.define('User',
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userEmail: {
      type: DataTypes.STRING,
      unique: true,
      isEmail: true,
      allowNull: false
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    token: {
      type: DataTypes.VIRTUAL,
      get: function () {
        return jwt.sign({
          userName: this.userName
        }, process.env.JWT_SECRET)
      },
      set(tokenObj) {
        return jwt.sign(tokenObj, process.env.JWT_SECRET)
      }
    },
    role:{
      type: DataTypes.ENUM('admin','user'),
      allowNull: false,
      defaultValue: 'user'
    },
    capabilities:{
      type : DataTypes.VIRTUAL,
      get: function()
      {
        const acl = {
          admin:['read', 'create', 'delete','update'],
          user: ['read', 'create']
        }
        return acl[this.role];
      }
    }

  }
);

User.authenticateToken = token => {
  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return err;
    }
    else {
      return decoded;
    }
  })
}


module.exports = User;

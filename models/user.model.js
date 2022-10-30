'use strict';

module.exports = (sequelize, DataTypes) => {sequelize.define('User', {
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userEmail: {
    type: DataTypes.STRING,
    unique: true,
    isEmail:true,
    allowNull: false
  },
  userPassword: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
return User;
}

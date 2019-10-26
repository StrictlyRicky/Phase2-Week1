'use strict';
const { hashPassword, comparePassword } = require('../helpers/bcryptjs')
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class User extends Model {}
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user, option) => {
        user.password = hashPassword(user.password)
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');
require('dotenv').config();
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Name cannot Empty"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Email cannot Empty"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Password cannot Empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.addHook("beforeCreate", (instance, options) => {
      let hashPassword = bcrypt.hashSync(instance.password, +process.env.Hash)
      instance.password = hashPassword
  })
  return User;
};
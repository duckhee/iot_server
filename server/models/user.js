'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    userid: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    userage: DataTypes.INTEGER,
    user_address1: DataTypes.STRING,
    user_address2: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    user_phone1: DataTypes.INTEGER,
    usre_phone2: DataTypes.INTEGER,
    user_phone3: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};
'use strict';
module.exports = function(sequelize, DataTypes) {
  var tbl_reply = sequelize.define('tbl_reply', {
    bno: DataTypes.INTENGER,
    rwriter: DataTypes.STRING,
    rcontent: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return tbl_reply;
};
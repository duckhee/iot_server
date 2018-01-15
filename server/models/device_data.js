'use strict';
module.exports = function(sequelize, DataTypes) {
  var device_data = sequelize.define('device_data', {
    data_apikey: DataTypes.STRING,
    data_onevalue: DataTypes.STRING,
    data_twovalue: DataTypes.STRING,
    data_threevalue: DataTypes.STRING,
    data_fourvalue: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return device_data;
};
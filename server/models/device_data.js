'use strict';
module.exports = function(sequelize, DataTypes) {
    var device_data = sequelize.define('device_data', {
        data_apikey: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data_onevalue: {
            type: DataTypes.STRING
        },
        data_twovalue: {
            type: DataTypes.STRING
        },
        data_threevalue: {
            type: DataTypes.STRING
        },
        data_fourvalue: {
            type: DataTypes.STRING
        },
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return device_data;
};
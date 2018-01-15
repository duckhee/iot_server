'use strict';
module.exports = function(sequelize, DataTypes) {
    var device = sequelize.define('device', {
        device_name: {
            type: DataTypes.STRING
        },
        device_num: {
            type: DataTypes.INTEGER
        },
        device_apikey: {
            type: DataTypes.STRING
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return device;
};
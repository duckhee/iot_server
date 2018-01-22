'use strict';
module.exports = function(sequelize, DataTypes) {
    var device_data = sequelize.define('device_data', {
        data_apikey: {
            type: DataTypes.STRING,
            allowNull: false,
            references:{
                model:devices,
                key:'device_apikey'
            }
        },
        data_onevalue: {
            type: DataTypes.STRING,
            defaults:'0'
        },
        data_twovalue: {
            type: DataTypes.STRING,
            defaults: '0'
        },
        data_threevalue: {
            type: DataTypes.STRING,
            defaults: '0'
        },
        data_fourvalue: {
            type: DataTypes.STRING,
            defaults: '0'
        },
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                device_data.belongTo(models.device, {
                    foreignKeyConstraint: true,
                    foreignKey: 'device_apikey',
                    allowNull: false
                });
            }
        },

    });
    return device_data;
};
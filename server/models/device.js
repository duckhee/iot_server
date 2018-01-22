'use strict';
module.exports = function(sequelize, DataTypes) {
    var device = sequelize.define('device', {
        device_name: {
            type: DataTypes.STRING
        },
        device_num: {
            type: DataTypes.INTEGER,
            defaults: 0
        },
        device_apikey: {
            type: DataTypes.STRING,
            // references: 'user',
            // referencesKey: 'apikey'
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                device.hasMany(models.device_data);
                device.belongTo(models.user, {
                    foreignKeyConstraint: true,
                    foreignKey: 'apikey',
                    allowNull: false
                });
            }
        },
        
    });
    return device;
};
'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('device_data', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            data_apikey: {
                type: Sequelize.STRING,
                references:{
                    model:'devices',
                    key:'device_apikey'
                }
            },
            data_onevalue: {
                type: Sequelize.STRING
            },
            data_twovalue: {
                type: Sequelize.STRING
            },
            data_threevalue: {
                type: Sequelize.STRING
            },
            data_fourvalue: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt: {
                allowNull: false,
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('device_data');
    }
};
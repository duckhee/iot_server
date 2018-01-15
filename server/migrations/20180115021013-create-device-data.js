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
                type: Sequelize.STRING
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
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('device_data');
    }
};
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
                allowNull: false,
                references: {
                    model: 'devices',
                    key: 'device_apikey'
                },
                onDelete: 'CASCADE',
            },
            data_onevalue: {
                type: Sequelize.STRING,
                defaults: '0'
            },
            data_twovalue: {
                type: Sequelize.STRING,
                defaults: '0'
            },
            data_threevalue: {
                type: Sequelize.STRING,
                defaults: '0'
            },
            data_fourvalue: {
                type: Sequelize.STRING,
                defaults: '0'
            },
            data_text: {
                type: DataTypes.TEXT
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
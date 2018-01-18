'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userid: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            username: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            userage: {
                type: Sequelize.INTEGER
            },
            user_email: {
                type: Sequelize.STRING
            },
            user_country: {
                type: Sequelize.STRING
            },
            user_address1: {
                type: Sequelize.STRING
            },
            user_address2: {
                type: Sequelize.STRING
            },
            zip_code: {
                type: Sequelize.STRING
            },
            user_phone1: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            user_phone2: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            user_phone3: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            apikey: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            status: {
                type: Sequelize.ENUM('active', 'inactive'),
                defaultValue: 'active'
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
        return queryInterface.dropTable('users');
    }
};
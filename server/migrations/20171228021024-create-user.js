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
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            usre_phone2: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            user_phone3: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            apikey: {
                type: DataTypes.STRING,
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
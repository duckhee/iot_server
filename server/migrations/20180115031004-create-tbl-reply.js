'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('tbl_replies', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            bno: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'tbl_boards',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            rwriter: {
                type: Sequelize.STRING,
                allowNull: false,
<<<<<<< HEAD
                references:{
                    model:'tbl_boards',
                    key:'writer'
                }
=======
                references: {
                    model: 'users',
                    key: 'userid'
                },
                onDelete: 'CASCADE',
>>>>>>> origin/merge_development
            },
            rcontent: {
                type: Sequelize.TEXT
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
        return queryInterface.dropTable('tbl_replies');
    }
};
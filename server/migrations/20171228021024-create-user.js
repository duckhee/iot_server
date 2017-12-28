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
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
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
        type: Sequelize.INTEGER
      },
      usre_phone2: {
        type: Sequelize.INTEGER
      },
      user_phone3: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('users');
  }
};
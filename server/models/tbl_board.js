'use strict';
module.exports = function(sequelize, DataTypes) {
    var tbl_board = sequelize.define('tbl_board', {
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        writer: DataTypes.STRING,
        viewcnt: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return tbl_board;
};
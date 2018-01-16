'use strict';
module.exports = function(sequelize, DataTypes) {
    var tbl_board = sequelize.define('tbl_board', {
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        writer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        viewcnt: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                tbl_board.belongTo(models.user);
                tbl_board.hasMany(models.tbl_reply);
            }
        }
    });
    return tbl_board;
};
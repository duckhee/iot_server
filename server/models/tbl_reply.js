'use strict';
module.exports = function(sequelize, DataTypes) {
    var tbl_reply = sequelize.define('tbl_reply', {
        bno: DataTypes.INTEGER,
        rwriter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rcontent: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                tbl_reply.belongTo(models.tbl_board, {
                    foreignKey: 'title',
                    allowNull: false
                });
            }
        }
    });
    return tbl_reply;
};
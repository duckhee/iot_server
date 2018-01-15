'use strict';
module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('user', {
        userid: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            //validate: { isId: true }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: DataTypes.STRING,
        userage: DataTypes.INTEGER,
        user_address1: DataTypes.STRING,
        user_address2: DataTypes.STRING,
        zip_code: DataTypes.STRING,
        user_phone1: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        usre_phone2: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_phone3: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        apikey: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        status: {
            type: DataTypes.ENUM,
            values: ['active', 'inactive'],
            defaultValue: 'active'
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return user;
};
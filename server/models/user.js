'use strict';

var bcrypt = require('bcrypt-nodejs');

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
        user_email: DataTypes.STRING,
        user_country: DataTypes.STRING,
        user_address1: DataTypes.STRING,
        user_address2: DataTypes.STRING,
        zip_code: DataTypes.STRING,
        user_phone1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_phone2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_phone3: {
            type: DataTypes.STRING,
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
                user.hasMany(models.device);
                user.hasMany(models.tbl_board);

            }
        },

    });
    //insert before 
    user.hook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
        console.log('bdforeCreate hook >>>>>>>>', user.password);
    });

    return user;
};
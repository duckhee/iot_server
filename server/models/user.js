'use strict';

`   `

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
        username: {
            type: DataTypes.STRING,
        },
        userage: {
            type: DataTypes.INTEGER,
        },
        user_email: {
            type: DataTypes.STRING,
        },
        user_country: {
            type: DataTypes.STRING,
        },
        user_address1: {
            type: DataTypes.STRING,
        },
        user_address2: {
            type: DataTypes.STRING,
        },
        zip_code: {
            type: DataTypes.STRING,
        },
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
                user.hasMany(models.device, {
                    foreignKey: 'apikey',
                    onDelete: 'CASCADE'
                });
                user.hasMany(models.tbl_board, {
                    foreignKey: 'user_id',
                    onDelete: 'CASCADE'
                });

                user.hasMany(models.tbl_reply, {
                    foreignKey: 'user_id',
                    onDelete: 'CASCADE'
                });

            }
        },

    });
    //insert before 
    user.hook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
        console.log('before Create hook >>>>>>>>', user.password);
    });

    return user;
};
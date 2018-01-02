var models = requrie('../models/index.js');
var users = require('../models/user');

/*
    create user 
    delete user
    modify user
    select user
*/
//create user
exports.create_user = function(user_info, callback) {
    models.users.findOrCreate({
        where: {

        },
        defaults: {

        }
    }).then(function(row) {
        console.log('success');
        callback(row, null);
    }).catch(function(err) {
        console.log('error');
        callback(null, err);
    });
};
//select user
exports.select_one_user = function(user_info, callback) {
    models.users.find({
        where: {

        }
    }).then(function(row) {
        console.log('success');
        callback(row, null);
    }).catch(function(err) {
        console.log('error');
        callback(null, err);
    })
};
//select list user
exports.select_list_user = function(user_info, callback) {
    models.users.findAll({
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(function(rows) {
        console.log('success');
        callback(rows, null);
    }).catch(function(err) {
        console.log('error');
        callback(null, err);
    });
};

//modfiy user
exports.modfiy_user = function(user_info, callback) {
    models.users.update({}, {
        where: {}
    }).then(function(row) {
        console.log('success');
        callback(row, null);
    }).catch(function(err) {
        console.log('error');
        callback(null, err);
    });
};
//destory user
exports.destory_user = function(user_info, callback) {
    models.usrs.destroy({
        where: {

        }
    }).then(function(row) {
        console.log('success');
        callback(row, null);
    }).catch(function(err) {
        console.log('error');
        callback(null, err);
    })
};
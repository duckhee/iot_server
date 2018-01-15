var model = require('../models/index');
var User = require('../models/user');

/*
    create user 
    delete user
    modify user
    select user
*/
//insert user
exports.insert_user = function(user_info, callback) {
        model.User.create({
            userid: user_info.userid,
            password: user_info.password,
            username: user_info.username,
            userage: user_info.userage,
            user_address1: user_info.user_address1,
            user_address2: user_info.user_address2,
            zip_code: user_info.zip_code,
            user_phone1: user_info.user_phone1,
            user_phone2: user_info.user_phone2,
            user_phone3: user_info.user_phone3,
        }).then(function(row) {
            console.log('success');
            callback(row, null);
        }).catch(function(err) {
            console.log('error');
            callback(null, err);
        })
    }
    //create user
exports.create_user = function(user_info, callback) {
    model.User.findOrCreate({
        where: {
            userid: user_info.userid
        },
        defaults: {
            password: user_info.password,
            username: user_info.username,
            userage: user_info.userage,
            user_address1: user_info.user_address1,
            user_address2: user_info.user_address2,
            zip_code: user_info.zip_code,
            user_phone1: user_info.user_phone1,
            user_phone2: user_info.user_phone2,
            user_phone3: user_info.user_phone3,
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
    model.User.find({
        where: {
            userid: user_info.userid
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
    models.User.findAll({
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
    model.User.update({}, {
        where: {
            userid: user_info.userid
        }
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
    model.User.destroy({
        where: {
            userid: user_info.userid
        }
    }).then(function(row) {
        console.log('success');
        callback(row, null);
    }).catch(function(err) {
        console.log('error');
        callback(null, err);
    });
};
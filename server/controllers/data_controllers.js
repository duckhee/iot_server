var models = require('../models/index');
var device_data = require('../models/device_data');

exports.data_insert = function(data_info, callback) {
    models.device_data.findOrCreate({
        where: {

        }
    }).then(function(row) {
        console.log('success');
        console.log('data create : ', row);
        callback(row, null);
    }).catch(function(err) {
        console.log('failed...');
        console.log('create error : ', err);
        callback(null, err);
    });
};

exports.data_select = function(data_info, callback) {
    models.device_data.find({
        where: {

        }
    }).then(function(row) {
        console.log('success');
        console.log('data find : ', row);
        callback(row, null);
    }).catch(function(err) {
        console.log('failed...');
        console.log('find error : ', err);
        callback(null, err);
    })
};

exports.data_list = function(data_info, callback) {
    models.device_data.findAll({
        where: {

        },
        limit: 10,
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(function(rows) {
        console.log('success');
        console.log('data list : ', row);
        callback(rows, null);
    }).catch(function(err) {
        console.log('failed...');
        console.log('data list error : ', err);
        callback(null, err);
    });
};
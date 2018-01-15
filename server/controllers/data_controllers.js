var models = require('../models/index');
var device_data = require('../models/device_data');

exports.data_insert = function(data_info, callback) {
    models.device_data.findOrCreate({
        where: {

        }
    }).then(function(row) {
        callback(row, null);
    }).catch(function(err) {
        console.log('error : ', err);
        callback(null, err);
    });
};

exports.data_select = function(data_info, callback) {
    models.device_data.find({
        where: {

        }
    }).then(function(row) {
        callback(row, null);
    }).catch(function(err) {
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
        callback(rows, null);
    }).catch(function(err) {
        callback(null, err);
    });
};
var models = require('../models/index');
var device = require('../models/device');

exports.create_device = function(device_info, callback) {
    models.device.findOrCreate({
        where: {

        },
        defaults: {

        }
    }).then(function(row) {
        console.log('success');
        callback(row, null);
    }).catch(function(err) {
        console.log('error : ', err);
        callback(null, err);
    });
};

exports.select_device = function(device_info, callback) {
    models.device.findOne({
        where: {

        }
    }).then(function(row) {
        console.log('success');
        callback(row, null);
    }).catch(function(err) {
        console.log('error : ', err);
        callback(null, err);
    });
};

exports.list_device = function(device_info, callback) {
    models.device.findAll({
        where: {

        }
    }).then(function(rows) {
        console.log('success');
        callback(row, null);
    }).catch(function(err) {
        console.log('error : ', err);
        callback(null, err);
    });
};

exports.delete_device = function(device_info, callback) {
    models.device.destroy({
        where: {

        }
    }).then(function(row) {
        console.log('success');
        callback(row, null);
    }).catch(function(err) {
        console.log('error : ', err);
        callback(null, err);
    });
}
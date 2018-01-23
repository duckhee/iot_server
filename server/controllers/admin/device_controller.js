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
        console.log('device insert : ', row);
        callback(row, null);
    }).catch(function(err) {
        console.log('failed...');
        console.log('device insert error : ', err);
        callback(null, err);
    });
};

exports.select_device = function(device_info, callback) {
    models.device.findOne({
        where: {

        }
    }).then(function(row) {
        console.log('success');
        console.log('device find : ', row);
        callback(row, null);
    }).catch(function(err) {
        console.log('failed...');
        console.log('device finderror : ', err);
        callback(null, err);
    });
};

exports.list_device = function(device_info, callback) {
    models.device.findAll({
        where: {

        }
    }).then(function(rows) {
        console.log('success');
        console.log('device list : ', rows);
        callback(row, null);
    }).catch(function(err) {
        console.log('failed...');
        console.log('device list error : ', err);
        callback(null, err);
    });
};

exports.delete_device = function(device_info, callback) {
    models.device.destroy({
        where: {

        }
    }).then(function(row) {
        console.log('success');
        console.log('device delete : ', row);
        callback(row, null);
    }).catch(function(err) {
        console.log('failed...');
        console.log('device delete error : ', err);
        callback(null, err);
    });
};
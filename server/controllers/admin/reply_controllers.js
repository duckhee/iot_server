var models = require('../models/index');
var tbl_reply = require('../models/tbl_reply');


exports.reply_insert = function(reply_info, callback) {
    models.tbl_reply.create({

    }).then(function(row) {
        callback(row, null);
    }).catch(function(err) {
        callback(null, err);
    });
};

exports.reply_selectlist = function(reply_info, callback) {
    models.tbl_reply.findAll({
        where: {

        }
    }).then(function(row) {
        callback(row, null);
    }).catch(function(err) {
        callback(null, err);
    });
};

exports.reply_delete = function(reply_info, callback) {
    models.tbl_reply.destroy({
        where: {

        }
    }).then(function(row) {
        callback(row, null);
    }).catch(function(err) {
        callback(null, err);
    });
};

exports.reply_modfiy = function(reply_info, callback) {
    models.tbl_reply.update({

    }, {
        where: {

        }
    }).then(function(row) {
        callback(row, null);
    }).catch(function(err) {
        callback(null, err);
    });
};
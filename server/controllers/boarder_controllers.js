var models = require('../models/index.js');
var tbl_board = require('../models/tbl_board');

/**
 *  boarder create and list, find, destory, search
 * function
 */

exports.insert_board = function(board_info, callback) {
    models.tbl_board.findOrCreate({
        /*
        where: {

        },
        */
        /*
        include: [{
            models: models.user.user_id,
            where: {
                user_id: req.session.user
            }
        }],
        */
        defaults: {
            title: board_info.title,
            content: board_info.content,
            writer: board_info.user_id,
        }
    }).spread(function(user, created) {
        if (created) {
            //created user callback baloon
            callback(created, null, null);
        } else {
            //find user
            callback(null, user.dataValues, null);
        }
    }).catch(function(err) {
        console.log('error');
        callback(null, null, err);
    });
};
exports.all_list_board = function(callback) {
    models.tbl_board.findAll({

    }).then(function(rows) {
        console.log('success');
        console.log('tbl board list : ', rows);
        callback(rows, null);
    }).catch(function(err) {
        console.log('failed...');
        console.log('tbl list error : ', err);
        callback(null, err);
    })
}
exports.list_board = function(board_info, callback) {
    models.tbl_board.findAll({
        where: {

        }
    }).then(function(rows) {
        console.log('success');
        console.log('list board : ', rows);
        callback(rows, null);
    }).catch(function(err) {
        console.log('failed...');
        console.log('list board error : ', err);
        callback(null, err);
    });
};

exports.destory_board = function(board_info, callback) {
    models.tbl_board.destroy({
        where: {

        },

    }).then(function(row) {
        console.log('success');
        console.log('destroy : ', row);
        callback(row, null);
    }).catch(function(err) {
        console.log('failed...');
        console.log('destroy board error : ', err);
        callback(null, err);
    });
};

exports.search_board = function(board_info, callback) {
    models.tbl_board.find({
        where: {

        }
    }).then(function(row) {
        console.log('success');
        console.log('search : ', row);
        callback(row, null);
    }).catch(function(err) {
        console.log('failed...');
        console.log('search board error : ', err);
        callback(null, err);
    });
};

exports.search_list_board = function(board_info, callback) {
    models.tbl_board.findAll({
        where: {

        }
    }).then(function(rows) {
        console.log('success');
        console.log('search list : ', rows);
        callback(rows, null);
    }).catch(function(err) {
        console.log('failed...');
        console.log('search list board error : ', err);
        callback(null, err);
    });
};
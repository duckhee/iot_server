var models = requrie('../models/index.js');
var tbl_board = require('../models/tbl_board');

/**
 *  boarder create and list, find, destory, search
 * function
 */

exports.insert_board = function(board_info, callback) {
    models.tbl_board.findOrCreate({

    }).then(function(row) {

    }).catch(function(e) {

    });
};

exports.all_list_board = function(board_info, callback) {
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

    }).catch(function(e) {

    });
};

exports.destory_board = function(board_info, callback) {
    models.tbl_board.destroy({
        where: {

        }
    }).then(function(row) {

    }).catch(function(e) {

    });
};

exports.search_board = function(board_info, callback) {
    models.tbl_board.find({
        where: {

        }
    }).then(function(row) {

    }).catch(function(e) {

    });
};

exports.search_list_board = function(board_info, callback) {
    models.tbl_board.findAll({
        where: {

        }
    }).then(function(rows) {

    }).catch(function(e) {

    });
};
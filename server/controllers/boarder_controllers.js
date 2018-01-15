var models = requrie('../models/index.js');
var board = require('../models/tbl_board');

/**
 *  boarder create and list, find, destory, search
 * function
 */

exports.insert_board = function(board_info, callback) {
    models.board.findOrCreate({

    }).then(function(row) {

    }).catch(function(e) {

    });
};

exports.list_board = function(board_info, callback) {
    models.board.findAll({
        where: {

        }
    }).then(function(rows) {

    }).catch(function(e) {

    });
};

exports.destory_board = function(board_info, callback) {
    models.board.destroy({
        where: {

        }
    }).then(function(row) {

    }).catch(function(e) {

    });
};

exports.search_board = function(board_info, callback) {
    models.board.find({
        where: {

        }
    }).then(function(row) {

    }).catch(function(e) {

    });
};

exports.search_list_board = function(board_info, callback) {
    models.board.findAll({
        where: {

        }
    }).then(function(rows) {

    }).catch(function(e) {

    });
};
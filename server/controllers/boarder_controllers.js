var models = requrie('../models/index.js');
var tbl_board = require('../models/tbl_board');

/**
 *  boarder create and list, find, destory, search
 * function
 */

exports.insert_board = function(board_info, callback) {
    models.tbl_board.findOrCreate({

    }).then(function(row) {
        console.log('success');
        console.log('tbl board insert : ', row);
        callback(row, null);
    }).catch(function(err) {
        console.log('failed...');
        console.log('insert board error : ', err);
        callback(null, err);
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

        }
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
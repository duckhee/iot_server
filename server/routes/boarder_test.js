var board_controller = require('../controllers/boarder_controllers');
var express = require('express');
var router = express.Router();
module.exports = function(passport) {


    router.get('/test', function(req, res, next) {
        res.redirect('/boards/list');
    });

    router.get('/test/registe', function(req, res, next) {
        res.render('boarder/registePage');
    });

    router.post('/test/process/registe', function(req, res, next) {
        var title = req.body.title;
        var content = req.body.content;
        var board_info = {
            title: title,
            content: content,
            writer: ''
        };
        board_controller.insert_board(board_info, function(row, err) {

        });
        res.redirect('/');
    });

    router.get('/test/list', function(req, res, next) {
        board_controller.all_list_board(function(rows, err) {
            if (rows) {
                console.log('rows length : ', rows.length);
                if (rows.length === 0) {
                    console.log('rows length : ', rows.length);
                    console.log(rows);
                    res.render('boarder/emptylistPage');
                } else if (rows.length !== 0) {
                    console.log('not empty rows length : ', rows.length);
                    res.render('boarder/listPage', {
                        post: rows
                    });
                } else {
                    res.redirect('/boards');
                }
            } else if (err) {
                next(err);
            } else {
                res.redirect('/boards');
            }
        });
    });

    router.get('/test/detail', function(req, res, next) {
        res.render('board/readPage');
    });

    router.post('/test/detail', function(req, res, next) {
        res.redirect('/');
    });

    router.get('/test/reply', function(req, res, next) {

    });

    router.post('/test/reply', function(req, res, next) {

    });

    return router;
};
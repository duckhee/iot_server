var express = require('express');
var router = express.Router();
var board_controller = require('../controllers/boarder_controllers');


router.get('/', function(req, res, next) {
    res.redirect('/boards/list');
});

router.get('/registe', function(req, res, next) {
    res.render('boarder/registePage');
});

router.post('/process/registe', function(req, res, next) {
    var content = req.body.content;
    var title = req.body.title;

    res.redirect('/');
});

router.get('/list', function(req, res, next) {
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

router.get('/detail', function(req, res, next) {
    res.render('board/readPage');
});

router.post('/detail', function(req, res, next) {
    res.redirect('/');
});

module.exports = router;
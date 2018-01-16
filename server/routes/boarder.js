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
    res.redirect('/');
});

router.get('/list', function(req, res, next) {
    board_controller.all_list_board(function(rows, err) {
        if (rows) {
            res.render('boarder/listPage', {
                post: rows
            });
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
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('boarder/listPage');
});

router.get('/registe', function(req, res, next) {
    res.render('boarder/registePage');
});

router.post('/process/registe', function(req, res, next) {
    res.redirect('/');
});

router.get('/list', function(req, res, next) {
    res.render('boarder/listPage');
});

router.get('/detail', function(req, res, next) {
    res.render('board/readPage');
});

router.post('/detail', function(req, res, next) {
    res.redirect('/');
});

module.exports = router;
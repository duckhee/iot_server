var express = require('express');
var router = express.Router();

router.get('/test1', function(req, res, next) {
    res.render('start_index');
});

router.get('/test2', function(req, res, next) {
    res.render('test_index');
});
router.get('/test3', function(req, res, next) {
    res.render('testing_index');
});

router.get('/test4', function(req, res, next){
    res.render('testlist_page');
})

module.exports = router;
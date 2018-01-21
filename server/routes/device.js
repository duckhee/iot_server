
var express = require('express');
var router = express.Router();
var bCrypt = require('bcrypt-nodejs');



router.get('/', function(req, res, next) {
    res.redirect('/device/list')
});

router.get('/registe', function(req, res, next) {
    res.render('device/registePage');
});

router.post('/registe', function(req, res, next) {
    var device_name = req.body.name || req.query.name;
    var device_num = req.body.num || req.query.num;
    var device_apikey = req.body.device_apikey || req.query.device_apikey;
});

router.get('/list', function(req, res, next) {
    res.render('device/listPage');
});

router.post('/list', function(req, res, next) {

});

router.get('/detail', function(req, res, next) {

});
router.post('/detail', function(req, res, next) {

});

router.get('/modify', function(req, res, next){

});

router.post('/modify', function(req, res, next){

});

router.get('/delete', function(req, res, next){

});

router.post('/delete', function(req, res, next){

});

module.exports = router;
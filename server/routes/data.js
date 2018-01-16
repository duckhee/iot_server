var express = require('express');
var router = express.Router();
var bCrypt = require('bcrypt-nodejs');
var data_controller = require('../controllers/data_controllers');

//data index
router.get('/', function(req, res, next) {

});

//show images and data
router.get('/show', function(req, res, next) {

});

//get chart 
router.get('/chart', function(req, res, next) {

});

//only show data
router.get('/data', function(req, res, next) {

});

//only show image
router.get('/image', function(req, res, next) {

});

//sequelize get 
router.get('/ajax', function(req, res, next) {
    var user_id = req.query.user_id || req.params.user_id || req.body.user_id;
    var apikey = req.query.apikey || req.params.apikey || req.body.apikey;

});

router.post('/ajax', function(req, res, next) {
    var user_id = req.query.user_id || req.params.user_id || req.body.user_id;
    var apikey = req.query.apikey || req.params.apikey || req.body.apikey;

});
//sequelize get data
router.get('/ajaxdata', function(req, res, next) {
    var user_id = req.query.user_id || req.params.user_id || req.body.user_id;
    var apikey = req.query.apikey || req.params.apikey || req.body.apikey;
});

router.post('/ajaxdata', function(req, res, next) {
    var user_id = req.query.user_id || req.params.user_id || req.body.user_id;
    var apikey = req.query.apikey || req.params.apikey || req.body.apikey;
});
//sequelize get images
router.get('/ajaximages', function(req, res, next) {
    var user_id = req.query.user_id || req.params.user_id || req.body.user_id;
    var apikey = req.query.apikey || req.params.apikey || req.body.apikey;
});

router.post('/ajaximages', function(req, res, next) {
    var user_id = req.query.user_id || req.params.user_id || req.body.user_id;
    var apikey = req.query.apikey || req.params.apikey || req.body.apikey;
});

module.exports = router;
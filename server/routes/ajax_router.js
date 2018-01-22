var express = require('express');
var router = express.Router();
var data_controllers = require('../controllers/data_controllers');
var device_controllers = require('../controllers/device_controller');


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
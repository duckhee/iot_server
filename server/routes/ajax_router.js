var express = require('express');
var router = express.Router();
var data_controllers = require('../controllers/data_controllers');
var device_controllers = require('../controllers/device_controller');
var ajax_controllers = require('../controllers/ajax_controllers');

//sequelize get 
router.get('/ajax', function(req, res, next) {
    var user_id = req.query.user_id || req.params.user_id || req.body.user_id;
    var apikey = req.query.apikey || req.params.apikey || req.body.apikey;
    
    var ajax_info = {
        user_id:user_id,
        apikey:apikey
    };

    ajax_controllers.ajax_getlistdata(ajax_info, function(row, err){
        if(row){
            console.log('ajax success : ', row);
        }else if(err){
            console.log('ajax getalldata error : ', err);
        }else{
            console.log('null');
        }
    });

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
//get all data ajax
router.get('/ajax_all_data', function(req, res, next){
    var user_id = req.query.user_id || req.params.user_id || req.body.user_id;
    var apikey = req.query.apikey || req.params.apikey || req.body.apikey;

});

router.post('/ajax_all_data', function(req, res, next){
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

//sequelize get all images
router.get('/ajax_all_images', function(req, res, next){
    var user_id = req.query.user_id || req.params.user_id || req.body.user_id;
    var apikey = req.query.apikey || req.params.apikey || req.body.apikey;
});

router.post('/ajax_all_images', function(req, res, next){
    var user_id = req.query.user_id || req.params.user_id || req.body.user_id;
    var apikey = req.query.apikey || req.params.apikey || req.body.apikey;
});

module.exports = router;
var express = require('express');
var router = express.Router();


//data index
router.get('/', function(req, res, next) {

});


//get chart 
router.get('/chart', function(req, res, next) {

});

//sequelize get data
router.get('/ajax', function(req, res, next) {
    var user_id = req.query.userid || req.params.userid;
    var apikey = req.query.apikey || req.params.apikey;

});

router.get('/ajax', function(req, res, next) {
    var user_id = req.query.user_id || req.params.user_id;
    var apikey = req.query.apikey || req.params.apikey;

});
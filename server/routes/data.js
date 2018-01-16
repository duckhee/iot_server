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


module.exports = router;
var express = require('express');
var router = express.Router();
var bCrypt = require('bcrypt-nodejs');
var data_controller = require('../controllers/data_controllers');

//data index
router.get('/', function(req, res, next) {
    res.render('device/data/detailPage');
});

//show images and data
router.get('/show', function(req, res, next) {
    res.render('device/data/showDataPage');
});

//get chart 
router.get('/chart', function(req, res, next) {

});

//only show data
router.get('/data', function(req, res, next) {
    res.render('device/data/showDataPage');
});

//only show image
router.get('/image', function(req, res, next) {
    res.render('device/data/showImagePage');
});


module.exports = router;
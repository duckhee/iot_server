var express = require('express');
var router = express.Router();


module.exports = function(passport)
{

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

    return router;
    
}
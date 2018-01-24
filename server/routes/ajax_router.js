var express = require('express');
var router = express.Router();
var data_controllers = require('../controllers/data_controllers');
var device_controllers = require('../controllers/device_controller');
var user_controllers = require('../controllers/user_controllers');

//check id
router.get('/ajaxid', function(req, res, next) {
    var user_id = req.query.user_id || req.params.user_id || req.body.user_id;
    console.log(user_id);
    var user_info = { id: user_id };
    if (user_id) {
        user_controllers.check_id(user_info, function(row, err) {
            if (row) {
                res.json('check : ' + row.datValues);
            } else if (err) {
                res.json('error : ' + err);
            } else {
                res.json('null');
            }
        });
    } else {
        res.json('checkking');
    }
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

    var data_info = {
        userid: user_id,
        apikey: apikey
    };
    data_controllers.data_list(data_info, function(row, err) {
        if (row) {
            res.json(row);
        } else if (err) {
            res.json(err);
        } else {
            res.json('0');
        }
    });
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
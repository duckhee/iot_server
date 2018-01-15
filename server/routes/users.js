var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user_controllers');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.redirect('/');
});

router.get('/test', function(req, res, next) {
    var user_info = {
        userid: 'fain9301',
        password: 'won1228',
        username: "duckhee",
        userage: 27,
        user_phone1: 010,
        user_phone2: 7713,
        user_phone3: 5036,
        apikey: 'aetadsfate'
    };
    user_controller.create_user(user_info, function(row, err) {
        if (row) {
            console.log('sequelize row : ', row);
            res.json(row);
        } else if (err) {
            console.log('sequelize error : ', err);
            res.json(err);
        } else {
            console.log('null');
            res.json('0');
        }
    });
});

router.get('/login', function(req, res, next) {
    res.render('/pages/user/login');
});

router.post('/login', function(req, res, next) {

});

router.get('/logout', function(req, res, next) {

});

router.post('/logout', function(req, res, next) {

});

router.get('/registe', function(req, res, next) {
    res.render('/pages/user/registe');
});

router.post('/registe', function(req, res, next) {

});

router.get('/profile', function(req, res, next) {
    res.render('/pages/user/profile');
});

router.post('/profile', function(req, res, next) {

});

router.get('/modify', function(req, res, next) {
    res.render('/pages/user/modify');
});

router.post('/modify', function(req, res, next) {

});

router.get('/delete', function(req, res, next) {
    res.render('/pages/user/delete');
});

router.post('/delete', function(req, res, next) {

});


module.exports = router;
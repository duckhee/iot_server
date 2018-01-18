var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user_controllers');
var bCrypt = require('bcrypt-nodejs');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.redirect('/');
});


router.get('/login', function(req, res, next) {
    res.render('user/login_page');
});

router.post('/login', function(req, res, next) {

});

router.get('/logout', function(req, res, next) {

});

router.post('/logout', function(req, res, next) {

});

router.get('/registe', function(req, res, next) {
    res.render('user/registe_page');
});

router.post('/registe', function(req, res, next) {
    console.log('id : ', req.body.id);
    console.log('country', req.body.shortCountryCode);
    console.log('phone', req.body.phone);
    var create_apikey;

    create_apikey = bCrypt.hashsync();

    var phone = new Array;
    if (req.body.phone.indexOf('-') != -1) {
        console.log('success');
        console.log(req.body.phone);
        phone = req.body.phone.split('-');
    } else {
        console.log('not - in ');
        phone[0] = req.body.phone.substr(0, 3);
        phone[1] = req.body.phone.substr(3, 4);
        phone[2] = req.body.phone.substr(7, 4);
    }
    console.log('phone split', phone[0]);
    console.log('phone split', phone[1]);
    console.log('phone split', phone[2]);

    var user = {
        userid: req.body.id,
        password: req.body.password,
        username: req.body.name,
        user_email: req.body.email,
        user_country: req.body.shortCountryCode,
        userage: req.body.userage,
        user_address1: '',
        user_address2: '',
        zip_code: '',
        user_phone1: phone[0],
        usre_phone2: phone[1],
        user_phone3: phone[2],
        apikey: '',

    };

    res.redirect('/users/registe');

});

router.get('/profile', function(req, res, next) {
    res.render('user/profilePage');
});

router.post('/profile', function(req, res, next) {

});

router.get('/modify', function(req, res, next) {
    res.render('user/modify');
});

router.post('/modify', function(req, res, next) {

});

router.get('/delete', function(req, res, next) {
    res.render('user/delete');
});

router.post('/delete', function(req, res, next) {

});


module.exports = router;
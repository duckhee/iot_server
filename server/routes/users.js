var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user_controllers');
var bCrypt = require('bcrypt-nodejs');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.redirect('/');
});


router.get('/login', function(req, res, next) {
    res.render('/user/login_page');
});

router.post('/login', function(req, res, next) {

});

router.get('/logout', function(req, res, next) {

});

router.post('/logout', function(req, res, next) {

});

router.get('/registe', function(req, res, next) {
    res.render('/user/registe_page');
});

router.post('/registe', function(req, res, next) {

});

router.get('/profile', function(req, res, next) {
    res.render('/user/profilePage');
});

router.post('/profile', function(req, res, next) {

});

router.get('/modify', function(req, res, next) {
    res.render('/user/modify');
});

router.post('/modify', function(req, res, next) {

});

router.get('/delete', function(req, res, next) {
    res.render('/user/delete');
});

router.post('/delete', function(req, res, next) {

});


module.exports = router;
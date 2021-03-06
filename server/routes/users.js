var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user_controllers');
var bCrypt = require('bcrypt-nodejs');

function createapikey() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 16;
    var randomstring = '';
    for (var i = 0; i < string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
    }
    //document.randform.randomfield.value = randomstring;
    return randomstring;
}

module.exports = function(passport) {


        /* GET users listing. */
        router.get('/', function(req, res, next) {

            res.redirect('/users/login');
        });


        router.get('/login', function(req, res, next) {

            res.render('user/login_page');
        });

        router.post('/process/login', function(req, res, next) {

        });

        router.get('/logout', function(req, res, next) {


        });

        router.post('/logout', function(req, res, next) {

        });

        router.get('/registe', function(req, res, next) {
            res.render('user/registe_page');
        });

        router.post('/registe', function(req, res, next) {

            var create_apikey = createapikey();

            //if do you want secret
            //create_apikey = bCrypt.hashSync(req.body.id, bCrypt.genSaltSync(3), null);

            var phone = new Array;
            if (req.body.phone.indexOf('-') != -1) {


                phone = req.body.phone.split('-');
            } else {

                phone[0] = req.body.phone.substr(0, 3);
                phone[1] = req.body.phone.substr(3, 4);
                phone[2] = req.body.phone.substr(7, 4);
            }

            var user_info = {
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
                user_phone2: phone[1],
                user_phone3: phone[2],
                apikey: create_apikey,

            };
            user_controller.create_user(user_info, function(user_new, user_old, err) {
                if (user_new) {

                    res.json('new user : ');
                } else if (user_old) {

                    res.json('old user : ' + user_old);
                } else if (err) {
                    console.log('error : ', err);
                    res.json(err);
                } else {
                    console.log('null')
                    res.json('/users/registe');
                }
            });

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
            user_info = {}
            user_controller(user_info, function(row, err) {

            });
        });
        return router;
    }
    //module.exports = router;
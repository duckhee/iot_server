var bCrypt = require('bcrypt-nodejs');
var LocalStrategy = require('passport-local').Strategy;
var db = require('../models');
var user = require('../models/user');


module.exports = function(passport, user) {
    //passport serialize
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    //passport deserialize
    passport.deserializeUser(function(id, done) {


    });

    var User = user;


};
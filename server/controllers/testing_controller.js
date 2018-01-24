var models = require('../models/index');
var testing = require("../models/testing");

exports.testing_insert = function(testing_info, callback) {
    models.testing.findOrCreate({
        where: {
            name: testing_info.name
        },
        defaults: {
            test: testing_info.test
        }
    }).spread(function(user, created) {
        if (created) {
            //created user callback baloon
            callback(created, null, null);
        } else {
            //find user
            callback(null, user.dataValues, null);
        }
    }).catch(function(err) {
        console.log('error');
        callback(null, null, err);
    });
};
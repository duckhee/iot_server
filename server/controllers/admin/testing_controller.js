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
    }).then(function(row) {
        console.log(row);
        callback(row, null);
    }).catch(function(err) {
        console.log(err);
        callback(null, err);
    });
};
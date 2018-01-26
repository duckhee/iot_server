var express = require('express');
var router = express.Router();

exports.module = function(passport){

    router.get('/upload/:id/:date', function(req, res, next) {

    });
    
    router.post('/upload/:id/:date', function(req, res, next) {
    
    });

    return router;
}

// module.exports = router;
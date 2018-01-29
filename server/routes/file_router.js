var express = require('express');
var router = express.Router();

exports.module = function(passport){

    router.get('/upload/:id/:date', function(req, res, next) {
        var id = req.query.id || req.param.id || req.params.id;
        var date = req.query.date || req.param.date || req.params.date;

    });
    
    router.post('/upload/:id/:date', function(req, res, next) {
        var id = req.query.id || req.param.id || req.params.id;
        var date = req.query.date || req.param.date || req.params.date;
    });

    return router;
}

// module.exports = router;
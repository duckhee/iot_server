var express = require('express');
var router = express.Router();
var data_controller = require('../controllers/data_controllers');
//var image_controller = require('../controllers/image_controllers');


// module.exports = function(){

//     return router;
// }

//insert data
router.get('/data', function(req, res, next) {
    var insert_apikey = req.query.apikey || req.params.apikey || req.body.apikey;
    data_controller.data_insert();
});

router.get('/image', function(req, res, next) {
    var insert_image_apikey = req.query.apikey || req.params.apikey || req.body.apikey;

});

module.exports = router;
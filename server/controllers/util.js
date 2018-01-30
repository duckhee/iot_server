var models = require('../models/index');
var device = require('../models/device');


//find device search list
exports.device_search = function(callback){
    module.device.findAll({
        attributes:[''],//볼 칼럼명
        group:['']//묶을 컬럼명
    }).then(function(values){
        return callback(vlaues, null);
    }).catch(function(err){
        return callback(null, err);
    })
};

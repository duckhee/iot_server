
var models = require('../models/index');
var device_data = require('../models/device_data');


//ajax get limit data
exports.ajax_getlistdata = function(ajax_info, callback){
    models.device_data.findAll({
        where:{
            data_apikey:ajax_info.apikey
        },
        include:[{
            models:models.user,
            where:{
                user_id:ajax_info.user_id
            }
        }],
        limit:10,
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(function(row){
        callback(row, null);
    }).catch(function(err){
        callback(null, err);
    });
};
//ajax get all data
exports.ajax_getalldata = function(ajax_info, callback){
    models.device_data.findAll({
        where:{
            data_apikey:ajax_info.apikey
        },  
        include:[{
            models:models.user,
            where:{
                user_id:ajax_info.user_id
            }
        }],
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(function(rows){
        callback(rows, null);
    }).catch(function(err){
        callback(null, err);
    });
};
//ajax get image path
exports.ajax_image = function(ajax_info, callback){

};

//ajax get image all 
exports.ajax_imagelist = function(ajax_info, callback){

}
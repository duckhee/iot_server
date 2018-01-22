var models = require('../models/index');
var images = require('../models/image');



exports.insert_image = function(img_info, callback){
    models.images.create({

    }).then(function(row){
        
    }).catch(function(err){

    })
};

exports.create_image = function(img_info, callback){
    models.images.findOrCreate({
        where:{

        }
    }).then(function(row){

    }).cratch(function(err){

    });
}

exports.get_image = function(img_info, callback){
    models.images.find({

    }).then(function(row){

    }).cratch(function(err){

    });
};

exports.list_image = function(img_info, callback){
    models.images.findAll({
        where:{

        }
    }).then(function(rows){

    }).catch(function(err){

    });
};

exports.delete_image = function(img_info, callback){
    models.images.destroy({
        where:{

        }
    }).then(function(row){

    }).catch(function(err){

    });
};

exports.modify_imgage = function(img_info, callback){
    models.images.update({},{
        where:{

        }
    }).then(function(row){

    }).catch(function(err){

    });
};
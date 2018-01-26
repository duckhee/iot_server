var models = require('../models/index');
var images = require('../models/image');



exports.insert_image = function(img_info, callback){
    models.images.create({

    }).then(function(row){
        callback(row, null);
    }).catch(function(err){
        callback(null, err);
    })
};

exports.create_image = function(img_info, callback){
    models.images.findOrCreate({
        where:{

        }
    }).then(function(row){
        callback(row, null);
    }).cratch(function(err){
        callback(null, err);
    });
}

exports.get_image = function(img_info, callback){
    models.images.find({

    }).then(function(row){
        callback(row, null);
    }).cratch(function(err){
        callback(null, err);
    });
};

exports.list_image = function(img_info, callback){
    models.images.findAll({
        where:{

        }
    }).then(function(rows){
        callback(rows, null);
    }).catch(function(err){
        callback(null, err);
    });
};

exports.delete_image = function(img_info, callback){
    models.images.destroy({
        where:{

        }
    }).then(function(row){
        callback(row, null);
    }).catch(function(err){
        callback(null, err);
    });
};

exports.modify_imgage = function(img_info, callback){
    models.images.update({},{
        where:{

        }
    }).then(function(row){
        callback(row, null);
    }).catch(function(err){
        callback(null, err);
    });
};
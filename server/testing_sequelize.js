var testing_controller = require('./controllers/testing_controller');

var test_info = {
    name: 'won',
    test: 'test'
}

testing_controller.testing_insert(test_info, function(row, err) {
    if (row) {
        console.log('success');
        console.log(row);
    } else if (err) {
        console.log('failed');
        console.log(err);
    } else {
        console.log('null');
    }
});


function randomString() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 15;
    var randomstring = '';
    for (var i = 0; i < string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
    }
    //document.randform.randomfield.value = randomstring;
    return randomstring;
}
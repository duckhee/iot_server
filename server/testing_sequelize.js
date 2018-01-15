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
var board_controller = require('../controllers/boarder_controllers');

module.exports = function(app) {


    app.get('/test', function(req, res, next) {
        res.redirect('/boards/list');
    });

    app.get('/test/registe', function(req, res, next) {
        res.render('boarder/registePage');
    });

    app.post('/test/process/registe', function(req, res, next) {
        var title = req.body.title;
        var content = req.body.content;
        var board_info = {
            title: title,
            content: content,
            writer: ''
        };
        board_controller.insert_board(board_info, function(row, err) {

        });
        res.redirect('/');
    });

    app.get('/test/list', function(req, res, next) {
        board_controller.all_list_board(function(rows, err) {
            if (rows) {
                console.log('rows length : ', rows.length);
                if (rows.length === 0) {
                    console.log('rows length : ', rows.length);
                    console.log(rows);
                    res.render('boarder/emptylistPage');
                } else if (rows.length !== 0) {
                    console.log('not empty rows length : ', rows.length);
                    res.render('boarder/listPage', {
                        post: rows
                    });
                } else {
                    res.redirect('/boards');
                }
            } else if (err) {
                next(err);
            } else {
                res.redirect('/boards');
            }
        });
    });

    app.get('/test/detail', function(req, res, next) {
        res.render('board/readPage');
    });

    app.post('/test/detail', function(req, res, next) {
        res.redirect('/');
    });

    app.get('/test/reply', function(req, res, next) {

    });

    app.post('/test/reply', function(req, res, next) {

    });

}
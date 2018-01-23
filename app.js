var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var sassMiddleware = require('node-sass-middleware');
var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');
var session = require('express-session');

//router
var index = require('./server/routes/index');
var users = require('./server/routes/users');
var boarders = require('./server/routes/boarder');
var devices = require('./server/routes/device');
var datas = require('./server/routes/data');
var ajax = require('./server/routes/ajax_router');
var insert_data = require('./server/routes/insert_data');

//testing page router
var testing = require('./server//routes/test_router');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server/views/pages'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(sassMiddleware({
//     src: path.join(__dirname, 'public'),
//     dest: path.join(__dirname, 'public'),
//     indentedSyntax: true, // true = .sass and false = .scss
//     sourceMap: true
// }));
//section use

app.use(session({
    secret: 'secretkeywon',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 // 쿠키 유효기간 1시간
    }
}));

//passport initialize
app.use(passport.initialize());
//login section foreever
app.use(passport.session());
//flash message 
//app.use(flash());

//public file url /static
app.use('/static', express.static(path.join(__dirname, 'public')));
//image file path
app.use('/images', express.static(path.join(__dirname, 'images')));
//file path register
app.use('/upload', express.static(path.join(__dirname, 'upload')));
//file download
app.use('/download', express.static(path.join(__dirname, 'download')));

app.use('/', index);
app.use('/users', users(passport));
app.use('/boards', boarders);
app.use('/device', devices);
app.use('/data', datas);
app.use('/get', ajax);
app.use('/insert', insert_data);
//test router
app.use('/test', testing);


//testing router (passport)
//var testing = require('./server/routes/boarder_test');
//app.use('/test', testing(passport));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.render('../error/404');
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log('server error : ', err);
    // render the error page
    res.status(err.status || 500);
    res.render('../error/500');
});

module.exports = app;
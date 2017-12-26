var mailer = require('nodemailer');
var config = require('./config.json');
var transporter = mailer.createTransport(config.mail);

var server_error = 'server error report : ';
var connectin_info = 'device connection report : ';

//nodemailer 옵션 설정을 위한 것 누가 보내고 누가 받는지 
var mail_option = {
    from: 'IOT Server report <' + config.mail.auth.user + '>',
    to: 'fain9301@yahoo.com',
    subject: 'server error report'
};

//mail로 에러 보고 하기위한 함수 선언
exports.send_error = function(error_data, callback) {
    server_error += error_data;
    mail_option.text = server_error;

    transporter.sendMail(mail_option, function(err, info) {
        if (err) {
            console.log('could not send report : ');
            console.log(server_error);
            transporter.close();
            callback(null, err);
        } else if (info) {
            console.log('success send report message %s and : %s', info.messageId, info.response);
            transporter.close();
            callback(info, null);
        }
    });
};
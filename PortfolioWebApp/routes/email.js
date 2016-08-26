var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var email = require('../protected/smtpTransport');
var smtpTransport = email.smtpTransport;

var mailOptions = {
    from: '"Portfolio server" <turkingk.server@gmail.com>', // sender address 
    to: 'Turkingtonkevin@gmail.com', // list of receivers 
    subject: 'test', // Subject line 
    html: '<b>NULL</b>' // html body 
};




function setupMailOptions(data) {
    mailOptions.subject = data.subject;
    mailOptions.html =
        '<b> Sender Name:</b><p> ' + data.name + '</p>' +
        '<b> Email:</b><p>  ' + data.email + '</p>' +
        '<b> Phone:</b><p> ' + data.phone + '</p>' +
        '<b> company:</b><p> ' + data.company + '</p>' +
        '<b> website:</b><p> ' + data.website + '</p>' +
        '<b> message:</b><p> ' + data.message + '</p>';
}

/* GET home page. */
router.post('/', function (req, res) {
    console.log(req.body);
    //setupMailOptions(req.body);
    //smtpTransport.sendMail(mailOptions, function (error, info) {
    //    if (error) {
    //        return console.log(error);
    //    }
    //    console.log('Message sent: ' + info.response);
    //    return console.log(info);
    //});
});

module.exports = router;
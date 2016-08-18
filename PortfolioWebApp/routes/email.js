var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var email = require('../protected/smtpTransport');
var smtpTransport = email.smtpTransport;

var mailOptions = {
    from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address 
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers 
    subject: 'Hello ✔', // Subject line 
    text: 'Hello world 🐴', // plaintext body 
    html: '<b>Hello world 🐴</b>' // html body 
};


/* GET home page. */
router.post('/', function (req, res) {
    smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
});

module.exports = router;
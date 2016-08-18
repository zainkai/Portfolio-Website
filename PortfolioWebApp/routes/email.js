var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var email = require('../protected/smtpTransport');
var smtpTransport = email.smtpTransport;

var testMessage = {

    // sender info
    from: 'Sender Name <sender@example.com>',

    // Comma separated list of recipients
    to: '"Receiver Name" <nodemailer@disposebox.com>',

    // Subject of the message
    subject: 'Nodemailer is unicode friendly ✔',

    // plaintext body
    text: 'Hello to myself!',

    // HTML body
    html: '<p><b>Hello</b> to myself <img src="cid:note@node"/></p>' +
    '<p>Here\'s a nyan cat for you as an embedded attachment:<br/></p>'
};


/* GET home page. */
router.post('/', function (req, res) {
    smtpTransport.sendMail({  //email options
        from: "Sender Name <email@gmail.com>", // sender address.  Must be the same as authenticated user if using Gmail.
        to: "Receiver Name <receiver@email.com>", // receiver
        subject: "Emailing with nodemailer", // subject
        text: "Email Example with nodemailer" // body
    }, function (error, response) {  //callback
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }
    });
});

module.exports = router;
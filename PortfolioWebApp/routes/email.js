var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var email = require('../protected/smtpTransport');
var bodyParser = require('body-parser');
var smtpTransport = email.smtpTransport;
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mailOptions = {
    from: '"Portfolio server" <turkingk.server@gmail.com>', // sender address 
    to: 'Turkingtonkevin@gmail.com', // list of receivers 
    subject: 'test', // Subject line 
    html: '<b>NULL</b>' // html body 
};




function setupMailOptions(data) {
    mailOptions.subject = data.subject;
    mailOptions.html =
        '<div><b> Sender Name:</b><p> ' + data.name + '</p> </div>' +
        '<div><b> Email:</b><p>  ' + data.email + '</p> </div>' +
        '<div><b> Phone:</b><p> ' + data.phone + '</p></div>' +
        '<div><b> company:</b><p> ' + data.company + '</p></div>' +
        '<div><b> website:</b><p> ' + data.website + '</p></div>' +
        '<div><b> message:</b><p> ' + data.message + '</p></div>';
}

/* GET home page. */
router.post('/', urlencodedParser,function (req, res) {
    setupMailOptions(req.body);
    smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.sendStatus(500);
            console.log(error);
        }
        else {
            res.sendStatus(200);
            console.log('Message sent: ' + info.response);
        }
    });
});

module.exports = router;
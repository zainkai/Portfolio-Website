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
    html: '<h1>N/A</h1>' // html body 
};

function setupMailOptions(data) {
    mailOptions.subject = data.subject;
    mailOptions.html =
        '<div><h2>Someone contacted you!</h2></div>' +
        '<div><p><b> Sender Name:</b> ' + data.name + '</p> </div>' +
        '<div><p><b> Email:</b>  ' + data.email + '</p> </div>' +
        '<div><p><b> Phone:</b> ' + data.phone + '</p></div>' +
        '<div><p><b> Company:</b> ' + data.company + '</p></div>' +
        '<div><p><b> Website:</b> ' + data.website + '</p></div>' +
        '<div><p><b> Message:</b> ' + data.message + '</p></div>';
}

/* GET home page. */
router.post('/', urlencodedParser, function (req, res) {
    //res.status(200).send({
    //    header: "test data!",
    //    message: "test test test"
    //});

    setupMailOptions(req.body);
    smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.sendStatus(500);
            console.log(error);
        }
        else {
            res.status(200).send({
                header: "Success!",
                message: "Your Email was Sent."
            });
            console.log('Message sent: ' + info.response);
        }
    });
});

module.exports = router;
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();

//route definitions
var index = require('./routes/index');
var resume = require('./routes/resume');
var projects = require('./routes/projects');
var media = require('./routes/media');
var contact = require('./routes/contact');
var email = require('./routes/email');


//protected route definitions
var smtpTransport = require('./protected/smtpTransport');

//email setup
app.use('/contactMe', email);


// view engine setup
app.set('views', path.join(__dirname, 'Views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'Content')));

//website links
app.use('/', index);
app.use('/resume', resume);
app.use('/projects', projects);
app.use('/media', media);
app.use('/contactMe', contact);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});


app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});


module.exports = app;

var express = require('express');
var router = express.Router();

var testData = {
    data: [
        {
            Name: 'Project Name test',
            subHeading:'Subheading test',
            imgLink: ['./images/projects/test/test1.png', './images/projects/test/test2.png', './images/projects/test/test3.png'],
            Description: 'lorem ispsum description 1',
            githubLink:'http://www.google.com'
        },
        {
            Name: 'Project Name test 22222222222222222',
            subHeading: 'Subheading test',
            imgLink: ['./images/projects/test/test1.png', './images/projects/test/test2.png', './images/projects/test/test3.png'],
            Description: 'lorem ispsum',
            githubLink: 'http://www.google.com'
        },
        {
            Name: 'Project Name test 3333333',
            subHeading: 'Subheading test',
            imgLink: ['./images/projects/test/test1.png', './images/projects/test/test2.png', './images/projects/test/test3.png'],
            Description: 'lorem ispsum',
            githubLink: 'http://www.google.com'
        }
    ]
};

/* GET home page. */
router.get('/', function (req, res) {
    res.render('Projects', testData);
});



module.exports = router;
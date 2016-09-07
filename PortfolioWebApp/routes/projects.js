var express = require('express');
var router = express.Router();

var testData = {
    data: [
        {
            Name: 'Portfolio Website',
            subHeading:'Personal Project',
            imgLink: ['./images/projects/portfolioWebsite/portfolioProjects.PNG', './images/projects/portfolioWebsite/Capture1.png', './images/projects/portfolioWebsite/Capture2.png'],
            Description: 'This is a Basic website to display my skills with nodejs and development of a website',
            githubLink:'https://github.com/zainkai/Portfolio-Website'
        },
        {
            Name: 'i3-wm',
            subHeading: 'Desktop Manager theme',
            imgLink: ['./images/projects/i3/logo.png', './images/projects/i3/Capture1.png', './images/projects/i3/Capture2.png'],
            Description: 'A custom i3 windown manager theme',
            githubLink: 'https://github.com/zainkai/i3-wm'
        },
        {
            Name: 'ASME-Website (In Development)',
            subHeading: 'Collaboration Project',
            imgLink: ['./images/projects/asme/asme.png', './images/projects/asme/shell1.jpeg', './images/projects/asme/osu.png'],
            Description: 'Website for Oregon state Universitys ASME Shell eco marathon club. Developed by Jonah Spencer and myself.',
            githubLink: 'https://github.com/jonah1217/asme-website'
        }
    ]
};

/* GET home page. */
router.get('/', function (req, res) {
    res.render('Projects', testData);
});



module.exports = router;
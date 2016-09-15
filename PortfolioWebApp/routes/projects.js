var express = require('express');
var router = express.Router();

var testData = {
    data: [
        {
            Name: 'Portfolio Website',
            subHeading:'Personal Project',
            imgLink: ['./images/projects/portfolioWebsite/portfolioProjects.PNG', './images/projects/portfolioWebsite/capture1.png', './images/projects/portfolioWebsite/capture2.png'],
            Description: 'This is a Basic website to display my skills with nodejs and development of a website',
            githubLink:'https://github.com/zainkai/Portfolio-Website'
        },
        {
            Name: 'i3-wm',
            subHeading: 'Desktop Manager theme',
            imgLink: ['./images/projects/i3/logo.png', './images/projects/i3/capture1.png', './images/projects/i3/capture2.png'],
            Description: 'A custom i3 windown manager theme',
            githubLink: 'https://github.com/zainkai/i3-wm'
        },
        {
            Name: 'ASME-Website (In Development)',
            subHeading: 'Collaboration Project',
            imgLink: ['./images/projects/asme/asme.png', './images/projects/asme/shell1.jpeg', './images/projects/asme/osu.png'],
            Description: 'Website for Oregon state Universitys ASME Shell eco marathon club. Developed by Jonah Spencer and myself.',
            githubLink: 'https://github.com/jonah1217/asme-website'
        },
        {
            Name: 'CH53E-Helicopter-App (In Development)',
            subHeading: 'Collaboration Project',
            imgLink: ['./images/projects/ch53e/helicopter.jpg', './images/projects/ch53e/helicopter.jpg', './images/projects/ch53e/helicopter.jpg'],
            Description: 'Android application for CH53E operators to quickly reference and find flight calculations on the go.',
            githubLink: 'https://github.com/zainkai/Ch53E-helicopter-App'
        }
    ]
};

/* GET home page. */
router.get('/', function (req, res) {
    res.render('Projects', testData);
});



module.exports = router;
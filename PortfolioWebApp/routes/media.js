var express = require('express');
var router = express.Router();

var mediaData = {
    data: [
        {
            Link: "https://github.com/zainkai",
            img: "images/media_images/github.png",
            description: "Github"
        },
        {
            Link: "https://www.linkedin.com/in/kevin-turkington-b211a798",
            img: "images/media_images/linkedin.png",
            description: "Linkedin"
        }
    ]
}

/* GET home page. */
router.get('/', function (req, res) {
    res.render('Media',mediaData);
});

module.exports = router;
var express = require('express'),
    router = express.Router(),
    path = require("path");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, "..", "public", "images", "advert.gif"));
});

module.exports = router;

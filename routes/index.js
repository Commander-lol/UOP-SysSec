var express = require('express'),
    router = express.Router(),
    util = require("../local_modules/utils"),
    mem = require("../local_modules/memdb"),
    striptags = require("striptags");

/* GET home page. */
router.get('/', function(req, res, next) {
    var s = util.sources;
    s.posts = mem.posts;
    s.title = "Home";
    res.render('index', s);
});

router.post('/new', function(req, res, next) {
    var post = {
        title: striptags(req.body.title),
        body: striptags(req.body.content, "<em><strong><img><br>")
    }
    mem.posts = post;
    res.json(post);
});

module.exports = router;
